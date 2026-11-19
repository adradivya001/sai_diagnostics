import React, { useState, useEffect } from 'react';
import { 
  X, 
  User, 
  Mail, 
  Phone, 
  Stethoscope, 
  Award, 
  FileText, 
  Save, 
  Edit3, 
  CheckCircle2, 
  AlertCircle, 
  Loader2,
  Camera
} from 'lucide-react';
import { doctorService } from '../services/doctorService';
import { useTheme } from '../context/ThemeContext';
import { supabase } from '../../lib/supabaseClient';

export const DoctorProfileModal = ({ isOpen, onClose, onUpdated }) => {
  const { colors, isDark } = useTheme();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Form fields
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    specialty: '',
    qualifications: '',
    phone: '',
    email: '',
    bio: ''
  });

  const loadDoctor = async () => {
    setLoading(true);
    setError(null);
    try {
      const doc = await doctorService.getPrimaryDoctor();
      setDoctor(doc);
      if (doc) {
        setFormData({
          name: doc.name || 'Dr. T. Sai Kiranmai',
          title: doc.title || 'Consultant Radiologist & Fetal Medicine Specialist',
          specialty: doc.specialty || 'Maternal-Fetal Ultrasound & Prenatal Imaging',
          qualifications: doc.qualifications || 'M.B.B.S., DMRD',
          phone: doc.phone || '+91 77999 00248',
          email: doc.email || 'dr.kiranmai@saidiagnostics.com',
          bio: doc.bio || ''
        });
      }
    } catch (err) {
      console.error('Failed to load doctor profile:', err);
      setError(err.message || 'Unable to load profile from database.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadDoctor();
      setIsEditing(false);
      setSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!formData.name.trim()) {
      setError('Doctor name is required.');
      return;
    }

    setSaving(true);
    try {
      const docId = doctor?.id || 'd0c00000-0000-0000-0000-000000000001';

      // Update doctor in public.doctors
      const { data, error: updateErr } = await supabase
        .from('doctors')
        .upsert({
          id: docId,
          name: formData.name.trim(),
          title: formData.title.trim(),
          specialty: formData.specialty.trim(),
          qualifications: formData.qualifications.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          bio: formData.bio.trim(),
          is_active: true,
          updated_at: new Date().toISOString()
        })
        .select()
        .single();

      if (updateErr) throw updateErr;

      // Also update name in staff_profiles if matched by email
      await supabase
        .from('staff_profiles')
        .update({ full_name: formData.name.trim() })
        .eq('email', formData.email.trim());

      setDoctor(data);
      setSuccess(true);
      setIsEditing(false);

      if (onUpdated) onUpdated(data);
    } catch (err) {
      console.error('Save profile error:', err);
      setError(err.message || 'Failed to update doctor profile in Supabase.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: colors.modalOverlay,
        backdropFilter: 'blur(4px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        overflowY: 'auto'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: colors.cardBg,
          color: colors.textPrimary,
          borderRadius: '24px',
          width: '100%',
          maxWidth: '620px',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
          border: `1.5px solid ${colors.border}`,
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${colors.border}`,
            background: colors.subtleBg
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: colors.brandPrimary,
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Stethoscope size={20} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: colors.textPrimary }}>
                Consultant Doctor Profile
              </h3>
              <p style={{ margin: '0.15rem 0 0', fontSize: '0.8rem', color: colors.textSecondary }}>
                Sai Diagnostics Clinical Faculty &amp; Practice Details
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {!isEditing && (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '8px',
                  border: `1px solid ${colors.border}`,
                  background: colors.cardBg,
                  color: colors.brandPrimary,
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <Edit3 size={14} /> Edit Profile
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: colors.textSecondary,
                cursor: 'pointer',
                padding: '6px',
                borderRadius: '8px'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: '1.5rem 1.75rem', overflowY: 'auto' }}>
          {error && (
            <div
              style={{
                padding: '0.85rem 1rem',
                borderRadius: '12px',
                background: colors.dangerBg,
                border: `1px solid ${colors.danger}`,
                color: colors.danger,
                fontSize: '0.86rem',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <AlertCircle size={18} style={{ flexShrink: 0 }} />
              <div>{error}</div>
            </div>
          )}

          {success && (
            <div
              style={{
                padding: '0.85rem 1rem',
                borderRadius: '12px',
                background: colors.successBg,
                border: `1px solid ${colors.success}`,
                color: colors.success,
                fontSize: '0.86rem',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
              <div>Doctor profile updated successfully and persisted to Supabase!</div>
            </div>
          )}

          {/* Doctor Portrait Header Card */}
          <div
            style={{
              padding: '1.25rem',
              borderRadius: '16px',
              background: colors.subtleBg,
              border: `1px solid ${colors.border}`,
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              marginBottom: '1.5rem'
            }}
          >
            <div style={{ position: 'relative' }}>
              <img
                src="/dr-sai-kiranmai.jpg"
                alt="Dr. T. Sai Kiranmai"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: `3px solid ${colors.brandPrimary}`
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  bottom: '2px',
                  right: '2px',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: '#2E7D32',
                  border: '2px solid #FFFFFF'
                }}
                title="Active Consultant"
              />
            </div>

            <div>
              <h4 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, color: colors.textPrimary }}>
                {formData.name}
              </h4>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.86rem', color: colors.brandPrimary, fontWeight: 600 }}>
                {formData.title}
              </p>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.8rem', color: colors.textSecondary }}>
                {formData.qualifications} • {formData.specialty}
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: colors.textSecondary, marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  Doctor Name
                </label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
                    borderRadius: '10px',
                    border: `1.5px solid ${colors.border}`,
                    background: isEditing ? colors.inputBg : colors.subtleBg,
                    color: colors.textPrimary,
                    fontSize: '0.88rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: colors.textSecondary, marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  Qualifications
                </label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={formData.qualifications}
                  onChange={(e) => setFormData({ ...formData, qualifications: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
                    borderRadius: '10px',
                    border: `1.5px solid ${colors.border}`,
                    background: isEditing ? colors.inputBg : colors.subtleBg,
                    color: colors.textPrimary,
                    fontSize: '0.88rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: colors.textSecondary, marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  Professional Title
                </label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
                    borderRadius: '10px',
                    border: `1.5px solid ${colors.border}`,
                    background: isEditing ? colors.inputBg : colors.subtleBg,
                    color: colors.textPrimary,
                    fontSize: '0.88rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: colors.textSecondary, marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  Clinical Specialty
                </label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
                    borderRadius: '10px',
                    border: `1.5px solid ${colors.border}`,
                    background: isEditing ? colors.inputBg : colors.subtleBg,
                    color: colors.textPrimary,
                    fontSize: '0.88rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: colors.textSecondary, marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  Direct Phone Number
                </label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
                    borderRadius: '10px',
                    border: `1.5px solid ${colors.border}`,
                    background: isEditing ? colors.inputBg : colors.subtleBg,
                    color: colors.textPrimary,
                    fontSize: '0.88rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: colors.textSecondary, marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  Official Email
                </label>
                <input
                  type="email"
                  disabled={!isEditing}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
                    borderRadius: '10px',
                    border: `1.5px solid ${colors.border}`,
                    background: isEditing ? colors.inputBg : colors.subtleBg,
                    color: colors.textPrimary,
                    fontSize: '0.88rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: colors.textSecondary, marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                Doctor Bio / Clinical Focus
              </label>
              <textarea
                rows={3}
                disabled={!isEditing}
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.8rem',
                  borderRadius: '10px',
                  border: `1.5px solid ${colors.border}`,
                  background: isEditing ? colors.inputBg : colors.subtleBg,
                  color: colors.textPrimary,
                  fontSize: '0.88rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Actions */}
            {isEditing && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '0.75rem',
                  paddingTop: '1rem',
                  borderTop: `1px solid ${colors.border}`
                }}
              >
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  disabled={saving}
                  style={{
                    padding: '0.6rem 1.2rem',
                    borderRadius: '10px',
                    border: `1px solid ${colors.border}`,
                    background: colors.cardBg,
                    color: colors.textSecondary,
                    fontWeight: 600,
                    fontSize: '0.86rem',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  style={{
                    padding: '0.6rem 1.4rem',
                    borderRadius: '10px',
                    border: 'none',
                    background: colors.brandPrimary,
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '0.86rem',
                    cursor: saving ? 'not-allowed' : 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 4px 12px rgba(173, 35, 72, 0.3)'
                  }}
                >
                  {saving ? (
                    <>
                      <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                      Saving to Supabase...
                    </>
                  ) : (
                    <>
                      <Save size={16} /> Save Changes
                    </>
                  )}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
