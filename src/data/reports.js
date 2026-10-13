export const reports = [
  {
    id: "r1",
    patientName: "John Doe",
    testName: "Lumbar Spine MRI",
    date: "2026-10-01",
    status: "Reviewed",
    findings: "Multiple small disc bulges are noted in the lumbar spine. Mild narrowing of the neural foramina at L4-L5.",
    impression: "Mild degenerative disc disease.",
    aiSummary: "The report shows early signs of wear and tear in your lower back. The discs (cushions between your spine bones) are slightly bulging.",
    medicalTerms: [
      { term: "Disc bulge", explanation: "A disc is slightly extending beyond its normal boundary." },
      { term: "Neural foramina", explanation: "The small openings where nerve roots exit the spine." },
      { term: "Degenerative disc disease", explanation: "Normal wear and tear of the spinal discs due to aging." }
    ],
    doctorQuestions: [
      "What does this finding mean in my case?",
      "Do I need additional tests?",
      "What treatment options are available?",
      "Should I change my daily activities or do physical therapy?"
    ],
    categorizedFindings: {
      normal: ["Spinal cord is normal in appearance."],
      discuss: ["Small disc bulges at L4-L5."],
      urgent: []
    }
  },
  {
    id: "r2",
    patientName: "Jane Smith",
    testName: "Chest X-Ray",
    date: "2026-10-05",
    status: "Pending Review",
    findings: "Lungs are clear. Heart size is within normal limits. No pleural effusion or pneumothorax.",
    impression: "Unremarkable study.",
    aiSummary: "Your chest X-ray appears completely normal. There are no signs of infection or other major issues in your lungs or heart.",
    medicalTerms: [
      { term: "Pleural effusion", explanation: "Fluid buildup around the lungs." },
      { term: "Pneumothorax", explanation: "A collapsed lung." },
      { term: "Unremarkable", explanation: "Medical term meaning perfectly normal, nothing of concern was found." }
    ],
    doctorQuestions: [
      "If the X-ray is normal, what could be causing my symptoms?",
      "Are there other tests I should consider?"
    ],
    categorizedFindings: {
      normal: ["Lungs are clear.", "Heart size is normal."],
      discuss: [],
      urgent: []
    }
  },
  {
    id: "r3",
    patientName: "Mark Johnson",
    testName: "Complete Blood Count",
    date: "2026-09-28",
    status: "Reviewed",
    findings: "Hemoglobin 11.5 g/dL (Low). WBC count normal.",
    impression: "Mild anemia.",
    aiSummary: "Your blood test shows slightly low hemoglobin, which means you have mild anemia. Your white blood cells (infection fighters) are normal.",
    medicalTerms: [
      { term: "Hemoglobin", explanation: "Protein in red blood cells that carries oxygen." },
      { term: "WBC count", explanation: "White blood cell count, used to check for infection." },
      { term: "Anemia", explanation: "A condition in which you lack enough healthy red blood cells." }
    ],
    doctorQuestions: [
      "Is this level of anemia concerning?",
      "Should I take iron supplements?",
      "Could my diet be causing this?"
    ],
    categorizedFindings: {
      normal: ["WBC count is normal."],
      discuss: ["Hemoglobin is slightly low."],
      urgent: []
    }
  },
  {
    id: "r4",
    patientName: "Emily Davis",
    testName: "ECG",
    date: "2026-10-07",
    status: "Pending Review",
    findings: "Normal sinus rhythm. Mild ST elevation in leads V2-V3. Possible early repolarization.",
    impression: "Borderline ECG. Clinical correlation advised.",
    aiSummary: "Your heart rhythm is normal. There is a slight change in the electrical pattern, which can sometimes be normal, but requires a doctor's review.",
    medicalTerms: [
      { term: "Normal sinus rhythm", explanation: "A completely normal heart rhythm." },
      { term: "ST elevation", explanation: "A specific change on the ECG graph that indicates how the heart's electrical system is recovering." },
      { term: "Early repolarization", explanation: "A generally harmless ECG pattern commonly seen in healthy people." }
    ],
    doctorQuestions: [
      "Is this ST elevation normal for my age and health?",
      "Do I need an Echocardiogram?",
      "Is it safe for me to exercise vigorously?"
    ],
    categorizedFindings: {
      normal: ["Normal sinus rhythm."],
      discuss: ["Mild ST elevation in leads V2-V3."],
      urgent: ["This finding may require prompt medical review. Please contact your doctor or seek appropriate medical care if you have chest pain."]
    }
  }
];
