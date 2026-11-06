-- ==============================================================================
-- Migration: 001_create_appointments.sql
-- Project: Sai Diagnostics & Fetal Medicine Centre, Anantapur
-- Purpose: Unified persistent storage for patient appointments & doctor consultations
-- ==============================================================================

-- 1. Ensure UUID extension is available
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Create updated_at automatic trigger function
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 3. Create public.appointments table
CREATE TABLE IF NOT EXISTS public.appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),

  -- Request Classification (appointment vs consultation)
  request_type TEXT NOT NULL DEFAULT 'appointment' CHECK (request_type IN ('appointment', 'consultation')),

  -- Patient Information (Matching form fields)
  patient_name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  age INTEGER NULL CHECK (age IS NULL OR (age > 0 AND age < 125)),
  
  -- Scan / Consultation Details
  scan_type TEXT NOT NULL,
  consultant_doctor TEXT NOT NULL DEFAULT 'Dr. T. Sai Kiranmai (M.B.B.S., DMRD)',
  preferred_date DATE NULL,
  additional_notes TEXT NULL,

  -- Appointment Lifecycle Workflow Statuses
  status TEXT NOT NULL DEFAULT 'pending_review' CHECK (status IN ('pending_review', 'contacted', 'confirmed', 'completed', 'cancelled')),
  reception_status TEXT NOT NULL DEFAULT 'pending' CHECK (reception_status IN ('pending', 'contacted', 'unreachable', 'verified')),
  whatsapp_status TEXT NOT NULL DEFAULT 'pending' CHECK (whatsapp_status IN ('pending', 'sent', 'delivered', 'read', 'failed')),

  -- Reception Operational Details
  reception_notes TEXT NULL,
  called_at TIMESTAMPTZ NULL,
  confirmed_slot TIMESTAMPTZ NULL,
  whatsapp_message_id TEXT NULL
);

-- 4. Create indexes for operational speed and reception queries
CREATE INDEX IF NOT EXISTS idx_appointments_status ON public.appointments (status);
CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON public.appointments (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_appointments_phone ON public.appointments (phone_number);
CREATE INDEX IF NOT EXISTS idx_appointments_preferred_date ON public.appointments (preferred_date);
CREATE INDEX IF NOT EXISTS idx_appointments_request_type ON public.appointments (request_type);

-- 5. Attach updated_at trigger
DROP TRIGGER IF EXISTS trg_appointments_updated_at ON public.appointments;
CREATE TRIGGER trg_appointments_updated_at
  BEFORE UPDATE ON public.appointments
  FOR EACH ROW
  EXECUTE FUNCTION public.set_updated_at();

-- 6. Enable Row Level Security (RLS)
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- 7. RLS Policy: Public Patients can INSERT appointment requests
-- Allows anonymous and authenticated visitors to submit appointment requests
DROP POLICY IF EXISTS "Public patients can submit appointment requests" ON public.appointments;
CREATE POLICY "Public patients can submit appointment requests"
  ON public.appointments
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    -- Basic validation check at RLS layer
    char_length(patient_name) >= 2 AND
    char_length(phone_number) >= 10
  );

-- 8. RLS Policy: Prohibit Public SELECT / UPDATE / DELETE
-- By default with RLS enabled and no SELECT policy for anon, anonymous users CANNOT read any patient data.
-- Authorized clinic staff role can view and manage all appointments
DROP POLICY IF EXISTS "Authorized staff can view and manage appointments" ON public.appointments;
CREATE POLICY "Authorized staff can view and manage appointments"
  ON public.appointments
  FOR ALL
  TO authenticated
  USING (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'clinic_staff'
    OR (auth.jwt() ->> 'role') = 'service_role'
  )
  WITH CHECK (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'clinic_staff'
    OR (auth.jwt() ->> 'role') = 'service_role'
  );

