export const categories = [
  "All Scans & Tests",
  "Pregnancy & Fetal Medicine Scans",
  "General Ultrasound Scans",
  "Blood Tests & Genetic Screening",
  "Pregnancy Tissue & Genetic Diagnostic Tests",
  "Fertility Follow-Up"
];

export const services = [
  // Category 1: Pregnancy & Fetal Medicine Scans
  {
    id: 1,
    name: "Dating, Viability / Pregnancy Scan",
    category: "Pregnancy & Fetal Medicine Scans",
    price: "1000",
    image: "/dating-viability-scan.png",
    purpose: "To confirm and assess an early pregnancy.",
    procedure: "An ultrasound probe is moved over the abdomen or, when needed, a probe is gently inserted into the vagina to obtain clearer images.",
    whatItChecks: [
      "Location of the pregnancy",
      "Embryo development and heartbeat, when visible",
      "Estimated gestational age and number of babies"
    ],
    preparation: "Moderately full bladder may be required for transabdominal scans; no preparation needed for transvaginal scans."
  },
  {
    id: 2,
    name: "Nuchal Translucency Scan (12–14 Weeks)",
    category: "Pregnancy & Fetal Medicine Scans",
    price: "1500",
    image: "/nuchal-translucency-scan.png",
    purpose: "To assess the risk of certain chromosomal conditions.",
    procedure: "An abdominal ultrasound measures the fluid-filled space at the back of the baby's neck.",
    whatItChecks: [
      "Nuchal translucency measurement",
      "Early fetal development",
      "Risk indicators for selected chromosomal conditions"
    ],
    preparation: "Drink 2-3 glasses of water 1 hour prior to scan for adequate bladder filling."
  },
  {
    id: 3,
    name: "Twins-NT Scan",
    category: "Pregnancy & Fetal Medicine Scans",
    price: "2500",
    image: "/twin-nt-scan.jpg",
    purpose: "To assess early development and screening markers in a twin pregnancy.",
    procedure: "An ultrasound examines both babies and measures the nuchal translucency of each baby when appropriate.",
    whatItChecks: [
      "Individual nuchal translucency measurements",
      "Early development of both babies",
      "Relevant features of the twin pregnancy"
    ],
    preparation: "Comfortably full bladder recommended. Bring all previous ultrasound reports."
  },
  {
    id: 4,
    name: "Combined Test NR + Double Marker Test (12–14 Weeks)",
    category: "Pregnancy & Fetal Medicine Scans",
    price: "4000",
    image: "/double-marker-test.png",
    purpose: "To estimate the risk of selected chromosomal conditions.",
    procedure: "An ultrasound assessment is combined with a maternal blood test measuring two biochemical markers. The results are interpreted together.",
    whatItChecks: [
      "Nuchal translucency and relevant ultrasound findings",
      "Pregnancy-related blood markers",
      "Estimated risk of selected chromosomal conditions"
    ],
    preparation: "Ultrasound scan followed immediately by maternal blood sample collection. No fasting required."
  },
  {
    id: 5,
    name: "Anomaly / TIFFA Scan",
    category: "Pregnancy & Fetal Medicine Scans",
    price: "1800",
    image: "/anomaly-scan.jpg",
    purpose: "To examine the baby's anatomy in detail.",
    procedure: "An ultrasound probe is moved over the mother's abdomen to obtain detailed images of the baby's organs and body structures.",
    whatItChecks: [
      "Brain, spine, face and limbs",
      "Heart and other major organs",
      "Growth and visible structural abnormalities"
    ],
    preparation: "Typically performed between 18-22 weeks. Have a light meal before the scan; full bladder is usually not required."
  },
  {
    id: 6,
    name: "Late Anomaly Scan",
    category: "Pregnancy & Fetal Medicine Scans",
    price: "1800",
    image: "/tifa-scan.png",
    purpose: "To assess fetal anatomy later in pregnancy.",
    procedure: "An abdominal ultrasound examines visible fetal structures that can be evaluated at the stage of pregnancy.",
    whatItChecks: [
      "Visible organ structures",
      "Fetal growth and development",
      "Possible structural abnormalities detectable at this stage"
    ],
    preparation: "No specific fasting required. Please bring all previous pregnancy scan reports."
  },
  {
    id: 7,
    name: "Advanced Fetal Echo",
    category: "Pregnancy & Fetal Medicine Scans",
    price: "2500",
    image: "/fetal-echo-scan.png",
    purpose: "To examine the baby's heart in detail.",
    procedure: "A specialist uses ultrasound to obtain detailed views of the fetal heart and its blood flow.",
    whatItChecks: [
      "Heart chambers and valves",
      "Major blood vessels",
      "Heart rhythm and possible congenital heart abnormalities"
    ],
    preparation: "Best performed around 20-24 weeks. No special preparation required."
  },
  {
    id: 8,
    name: "Anomaly Scan + Fetal Echo",
    category: "Pregnancy & Fetal Medicine Scans",
    price: "3000",
    image: "/anomaly-fetal-echo.png",
    purpose: "To assess both the baby's overall anatomy and heart.",
    procedure: "The doctor performs a detailed fetal anatomy ultrasound alongside a specialized fetal echocardiography examination.",
    whatItChecks: [
      "Major organs and body structures",
      "Heart chambers and major vessels",
      "Possible structural and cardiac abnormalities"
    ],
    preparation: "Comprehensive examination lasting 45-60 minutes. Have a light meal prior to your appointment."
  },
  {
    id: 9,
    name: "Twins Anomaly Scan",
    category: "Pregnancy & Fetal Medicine Scans",
    price: "3500",
    image: "/twins-anomaly-scan.png",
    purpose: "To assess the anatomy and development of both babies.",
    procedure: "A detailed ultrasound examines each baby separately, with additional assessment of the twin pregnancy.",
    whatItChecks: [
      "Anatomy of each baby",
      "Individual growth measurements",
      "Amniotic fluid and relevant twin-pregnancy features"
    ],
    preparation: "Detailed multi-fetal evaluation. Allow 60-75 minutes for a complete assessment."
  },
  {
    id: 10,
    name: "Growth / Fetal Well-Being Scan",
    category: "Pregnancy & Fetal Medicine Scans",
    price: "1500",
    image: "/fetal-wellbeing-scan.png",
    purpose: "To monitor the baby's growth and well-being.",
    procedure: "An ultrasound measures the baby and assesses amniotic fluid. Additional Doppler studies may be performed when indicated.",
    whatItChecks: [
      "Estimated fetal weight",
      "Growth measurements",
      "Amniotic fluid and other indicators of well-being"
    ],
    preparation: "No special bladder filling required in third trimester. Normal food and fluid intake."
  },
  {
    id: 11,
    name: "Twins Growth Scan",
    category: "Pregnancy & Fetal Medicine Scans",
    price: "2500",
    image: "/twins-growth-scan.png",
    purpose: "To monitor the growth of both babies.",
    procedure: "Ultrasound measurements are taken for each baby and compared with expected growth patterns.",
    whatItChecks: [
      "Individual estimated fetal weights",
      "Differences in growth between the babies",
      "Amniotic fluid and other relevant indicators"
    ],
    preparation: "Routine third-trimester scan. Bring previous twin growth scan reports for comparison."
  },
  {
    id: 12,
    name: "Obstetric Doppler + AFI Check",
    category: "Pregnancy & Fetal Medicine Scans",
    price: "1500",
    image: "/obstetric-doppler-scan.png",
    purpose: "To assess blood flow and amniotic fluid during pregnancy.",
    procedure: "Doppler ultrasound measures blood flow in selected vessels, while ultrasound measurements assess amniotic fluid volume.",
    whatItChecks: [
      "Blood flow in selected maternal-fetal circulation vessels",
      "Amniotic fluid index (AFI)",
      "Relevant indicators of placental function and fetal well-being"
    ],
    preparation: "Stay well-hydrated before the examination. No fasting necessary."
  },
  {
    id: 13,
    name: "Cervical Assessment Scan",
    category: "Pregnancy & Fetal Medicine Scans",
    price: "500",
    image: "/cervical-assessment-scan.png",
    purpose: "To assess the cervix during pregnancy.",
    procedure: "Ultrasound measures cervical length, often through a transvaginal scan when clinically appropriate.",
    whatItChecks: [
      "Cervical length",
      "Relevant cervical changes",
      "Factors associated with the risk of premature birth"
    ],
    preparation: "Empty bladder prior to transvaginal assessment."
  },

  // Category 2: General Ultrasound Scans
  {
    id: 14,
    name: "USG Abdomen / Pelvis Scan",
    category: "General Ultrasound Scans",
    price: "1000",
    image: "/usg-abdomen-pelvis.png",
    purpose: "To examine abdominal and pelvic organs.",
    procedure: "An ultrasound probe is moved over the abdomen to obtain images of the organs being assessed.",
    whatItChecks: [
      "Relevant abdominal organs (liver, gall bladder, kidneys, spleen)",
      "Uterus and ovaries, when included",
      "Cysts, masses, fluid collections or other visible abnormalities"
    ],
    preparation: "Fasting for 6 hours prior to appointment for abdominal organs; drink water for a full bladder for pelvic organs."
  },
  {
    id: 15,
    name: "Pelvis / Transvaginal Scan",
    category: "General Ultrasound Scans",
    price: "1000",
    image: "/pelvis-transvaginal-scan.png",
    purpose: "To obtain detailed images of the uterus, ovaries and pelvic structures.",
    procedure: "For a transvaginal scan, a covered ultrasound probe is gently inserted into the vagina. A transabdominal approach may be used when appropriate.",
    whatItChecks: [
      "Uterus and endometrial lining",
      "Ovaries and ovarian follicles",
      "Pelvic abnormalities or early pregnancy findings"
    ],
    preparation: "Empty bladder immediately before transvaginal scan. If transabdominal, full bladder is needed."
  },
  {
    id: 16,
    name: "Pelvis 3D Scan",
    category: "General Ultrasound Scans",
    price: "1200",
    image: "/pelvis-3d-scan.png",
    purpose: "To obtain three-dimensional images of pelvic structures.",
    procedure: "Specialized ultrasound equipment combines multiple images to produce a three-dimensional view.",
    whatItChecks: [
      "Uterine shape and congenital anomalies (septate, bicornuate uterus)",
      "Selected pelvic abnormalities",
      "Anatomical details that may not be as clear in standard two-dimensional images"
    ],
    preparation: "Best scheduled post-menstruation for uterine cavity evaluation. Follow doctor's specific advice."
  },
  {
    id: 17,
    name: "Follicular Monitoring Studies",
    category: "General Ultrasound Scans",
    price: "1500",
    image: "/follicular-monitoring-scan.png",
    purpose: "To monitor ovarian follicle growth and ovulation.",
    procedure: "Ultrasound scans are performed at intervals during the menstrual cycle, often using a transvaginal approach.",
    whatItChecks: [
      "Follicle size and growth rate",
      "Ovarian response to fertility medications",
      "Signs of ovulation and optimal treatment timing"
    ],
    preparation: "Requires multiple scheduled visits during the cycle. Empty bladder before each scan."
  },

  {
    id: 20,
    name: "USG Soft Tissues Swelling",
    category: "General Ultrasound Scans",
    price: "1200",
    image: "/soft-tissue-swelling.png",
    purpose: "To investigate a swelling or lump beneath the skin.",
    procedure: "An ultrasound probe is moved over the affected area to examine the underlying soft tissues.",
    whatItChecks: [
      "Cysts or fluid collections",
      "Soft-tissue masses (lipomas, hematomas)",
      "Other visible tissue changes"
    ],
    preparation: "No special dietary preparation required. Keep the affected area clean and accessible."
  },
  {
    id: 21,
    name: "Neurosonogram",
    category: "General Ultrasound Scans",
    price: "1500",
    image: "/neurosonogram-scan.png",
    purpose: "To examine the baby's brain and nervous system using specialized ultrasound.",
    procedure: "A specialist obtains targeted ultrasound views of the fetal brain, using the appropriate imaging approach for the pregnancy.",
    whatItChecks: [
      "Brain structures and cortical development",
      "Ventricles and other visible anatomical features",
      "Possible abnormalities requiring further evaluation"
    ],
    preparation: "Detailed neuro-developmental scan performed by fetal medicine specialist. Allow 45 minutes."
  },

  // Category 3: Blood Tests & Genetic Screening
  {
    id: 22,
    name: "Double Marker Test (12–14 Weeks)",
    category: "Blood Tests & Genetic Screening",
    price: "2500",
    image: "/double-marker-test.png",
    purpose: "To estimate the risk of certain chromosomal conditions in pregnancy.",
    procedure: "A blood sample is collected from the mother and analyzed for two pregnancy-related biochemical markers.",
    whatItChecks: [
      "Levels of Free Beta hCG and PAPP-A biochemical markers",
      "Risk estimates when combined with relevant pregnancy information",
      "Whether additional screening or diagnostic counselling may be appropriate"
    ],
    preparation: "Simple blood draw. Requires an accompanying NT ultrasound report taken within the valid gestational window."
  },
  {
    id: 23,
    name: "Quadruple Test",
    category: "Blood Tests & Genetic Screening",
    price: "3000",
    image: "/double-marker-test.png",
    purpose: "To screen for selected chromosomal conditions and pregnancy-related risks.",
    procedure: "A maternal blood sample is tested for four biochemical markers, and the results are interpreted using the appropriate screening protocol.",
    whatItChecks: [
      "Four biochemical marker levels (AFP, hCG, uE3, Inhibin-A)",
      "Estimated risk of selected chromosomal conditions (Trisomy 21, 18)",
      "Other risks included in the clinic's screening protocol"
    ],
    preparation: "Conducted between 15 and 20 weeks of gestation. No fasting required."
  },
  {
    id: 24,
    name: "NIPT – Cell-Free DNA Test",
    category: "Blood Tests & Genetic Screening",
    price: "15000",
    image: "/nipt-cellfree-dna.png",
    purpose: "To screen for selected chromosomal conditions in the baby.",
    procedure: "A blood sample is collected from the mother and analyzed for cell-free DNA circulating in her bloodstream, including DNA originating from the placenta.",
    whatItChecks: [
      "Risk of selected chromosomal conditions (Trisomies 21, 18, 13 and sex chromosomes)",
      "Chromosomal screening results according to the test panel",
      "Whether further diagnostic testing should be considered based on the result"
    ],
    preparation: "Can be performed from 10 weeks onwards. Routine peripheral blood draw; no fasting needed."
  },
  {
    id: 25,
    name: "Peripheral Blood Karyotyping",
    category: "Blood Tests & Genetic Screening",
    price: "3500",
    image: "/karyotyping-scan.png",
    purpose: "To examine the number and structure of chromosomes.",
    procedure: "A blood sample is collected and processed in a laboratory so that chromosomes in suitable cells can be examined.",
    whatItChecks: [
      "Chromosome number",
      "Large chromosome structural changes (translocations, inversions)",
      "Certain chromosomal conditions"
    ],
    preparation: "Venous blood sample collected in sodium heparin tubes. Genetic counselling recommended prior to testing."
  },

  // Category 4: Pregnancy Tissue & Genetic Diagnostic Tests
  {
    id: 26,
    name: "POC (Microarray)",
    category: "Pregnancy Tissue & Genetic Diagnostic Tests",
    price: "15000",
    image: "/karyotyping-scan.png",
    purpose: "To examine genetic changes in products of conception when clinically indicated.",
    procedure: "An appropriate tissue sample is collected and sent to a laboratory for chromosomal microarray analysis.",
    whatItChecks: [
      "Certain chromosome gains and losses",
      "Selected genetic changes associated with pregnancy loss",
      "Findings that may help explain the pregnancy outcome"
    ],
    preparation: "Sample collection must follow sterile clinical protocol provided by the attending gynecologist."
  },
  {
    id: 27,
    name: "POC (DNA Storage)",
    category: "Pregnancy Tissue & Genetic Diagnostic Tests",
    price: "3000",
    image: "/nipt-cellfree-dna.png",
    purpose: "To preserve suitable DNA material for possible future testing.",
    procedure: "An appropriate tissue sample is collected, processed and stored under laboratory protocols, with consent where required.",
    whatItChecks: [
      "This is a storage service, not a standalone diagnostic test",
      "Sample suitability for future genetic analysis",
      "Availability of preserved material for further testing, subject to storage conditions"
    ],
    preparation: "Informed consent required before sample preservation and bio-banking."
  },
  {
    id: 28,
    name: "Amniocentesis (FISH & Karyotyping)",
    category: "Pregnancy Tissue & Genetic Diagnostic Tests",
    price: "20000",
    image: "/amniocentesis-fish.png",
    purpose: "To investigate selected chromosomal conditions through prenatal diagnostic testing.",
    procedure: "A specialist uses ultrasound guidance to insert a thin needle through the mother's abdomen and collect a small amount of amniotic fluid.",
    whatItChecks: [
      "Selected chromosome changes using FISH (rapid results for chromosomes 13, 18, 21, X, Y)",
      "Chromosome number and larger structural changes using karyotyping",
      "Findings relevant to the clinical indication for testing"
    ],
    preparation: "Performed after 15-16 weeks under continuous ultrasound guidance. Blood group report needed (anti-D may be required for Rh-negative mothers).",
    importantNote: "Amniocentesis is an invasive procedure. The doctor should explain the benefits, risks and alternatives before it is performed."
  },
  {
    id: 29,
    name: "Amniocentesis (Microarray)",
    category: "Pregnancy Tissue & Genetic Diagnostic Tests",
    price: "25000",
    image: "/amniocentesis-procedure.png",
    purpose: "To investigate certain fetal chromosome gains and losses.",
    procedure: "A specialist collects a small amount of amniotic fluid using ultrasound guidance. The sample is sent for genetic microarray analysis.",
    whatItChecks: [
      "Certain chromosome gains and losses",
      "Selected genetic changes that may not be visible on a standard karyotype",
      "Genetic findings relevant to the reason for testing"
    ],
    preparation: "Ultrasound-guided prenatal sampling. Blood grouping and infectious disease markers required prior to procedure.",
    importantNote: "The procedure requires specialist counselling about risks, benefits and alternatives."
  },

  // Category 5: Fertility Follow-Up
  {
    id: 30,
    name: "Review Follicular (Each Visit)",
    category: "Fertility Follow-Up",
    price: "500",
    image: "/follicular-review-scan.png",
    purpose: "To review follicle development and guide fertility treatment.",
    procedure: "The doctor reviews the latest follicular ultrasound findings and compares them with previous visits. Additional scans may be performed when needed.",
    whatItChecks: [
      "Changes in follicle size",
      "Progress toward ovulation",
      "Timing of follow-up scans or fertility treatment"
    ],
    preparation: "Bring records of the current cycle's previous scans and prescribed fertility medications."
  }
];

export const slugify = (text) => {
  return (text || '')
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const TIMING_MAP = {
  1: '6 – 10 Weeks of Gestation',
  2: '11 – 13+6 Weeks of Gestation',
  3: '11 – 14 Weeks of Gestation',
  4: '11 – 13+6 Weeks of Gestation',
  5: '18 – 22 Weeks of Gestation',
  6: '24 – 28 Weeks of Gestation',
  7: '20 – 24 Weeks of Gestation',
  8: '18 – 22 Weeks of Gestation',
  9: '18 – 22 Weeks of Gestation',
  10: '28 – 36 Weeks of Gestation',
  11: 'Every 2–4 Weeks from 24 Weeks',
  12: '24 – 38 Weeks of Gestation',
  13: '16 – 24 Weeks of Gestation',
  14: 'Mon – Sat: 8:30 AM – 7:00 PM',
  15: 'Mon – Sat: 8:30 AM – 7:00 PM',
  16: 'Mon – Sat: 8:30 AM – 7:00 PM',
  17: 'Cycle Days 9 to 18 (As Advised)',
  18: 'Mon – Sat: 8:30 AM – 7:00 PM',
  19: 'Mon – Sat: 8:30 AM – 7:00 PM',
  20: 'Mon – Sat: 8:30 AM – 7:00 PM',
  21: 'Targeted Fetal Brain Scan Window',
  22: '11 – 13+6 Weeks of Gestation',
  23: '15 – 20 Weeks of Gestation',
  24: 'From 10 Weeks of Gestation onwards',
  25: 'Mon – Sat: 8:30 AM – 7:00 PM',
  26: 'As Clinically Indicated',
  27: 'As Clinically Indicated',
  28: 'From 15–16 Weeks of Gestation',
  29: 'From 15–16 Weeks of Gestation',
  30: 'Sequential Follicular Days'
};

// Service-wise verified diagnostic content (Diagnostic Focus & What This Scan Evaluates)
export const DIAGNOSTIC_DETAILS_MAP = {
  // 1. Anomaly / TIFFA Scan (id: 5)
  5: {
    diagnosticFocus: "The Anomaly or TIFFA Scan is a detailed ultrasound examination performed during pregnancy to assess the baby's anatomical development. It provides a systematic evaluation of major fetal organs and structures to identify visible structural abnormalities and variations in development.",
    evaluates: "This scan examines the development of the baby's brain, spine, face, heart, abdomen and limbs. It evaluates major internal organs, skeletal structures and the abdominal wall. It also assesses placental location and amniotic fluid levels as part of the overall fetal examination.",
    evaluatesList: [
      "Brain, spine, face, and intracranial anatomy",
      "Four-chamber cardiac structures and outflow tracts",
      "Abdomen, kidneys, stomach, and abdominal wall integrity",
      "Upper and lower limbs and extremities",
      "Skeletal structures and spinal alignment",
      "Placental location, umbilical cord insertion, and amniotic fluid volume"
    ]
  },
  // 2. Nuchal Translucency Scan (12–14 Weeks) (id: 2)
  2: {
    diagnosticFocus: "The Nuchal Translucency Scan is a specialized first-trimester ultrasound examination that measures the fluid-filled space at the back of the baby's neck. It helps assess early fetal development and contributes to prenatal screening for selected chromosomal conditions.",
    evaluates: "The examination measures nuchal translucency thickness and crown-rump length to assess early fetal development. It also evaluates fetal heartbeat, observes early anatomical structures and assesses the nasal bone and other screening markers when indicated.",
    evaluatesList: [
      "Nuchal translucency (NT) thickness measurement",
      "Crown-rump length (CRL) and accurate gestational dating",
      "Fetal cardiac activity and heart rate",
      "Nasal bone presence and early facial profile",
      "Early anatomical structures and physiological milestones",
      "First-trimester chromosomal screening risk markers"
    ]
  },
  // 3. Advanced Fetal Echo (id: 7)
  7: {
    diagnosticFocus: "Advanced Fetal Echocardiography is a specialized ultrasound examination that provides detailed imaging of the developing baby's heart. It focuses on evaluating cardiac anatomy, structural development and selected functional characteristics to identify suspected abnormalities of the fetal heart.",
    evaluates: "The examination assesses the four chambers of the fetal heart, cardiac valves and septal structures. It also evaluates the major blood vessels, including the aortic and pulmonary outflow tracts, and examines fetal heart rate, rhythm and blood-flow patterns using Doppler techniques when indicated.",
    evaluatesList: [
      "Four cardiac chambers, ventricular symmetry, and atrial arrangement",
      "Atrioventricular and semilunar cardiac valves",
      "Interventricular and interatrial septal structures",
      "Aortic and pulmonary arterial outflow tract alignment",
      "Fetal heart rate, rhythm, and cardiac contractility",
      "Color and spectral Doppler blood-flow velocities across cardiac valves"
    ]
  },
  // 4. Obstetric Doppler + AFI Check (id: 12)
  12: {
    diagnosticFocus: "Obstetric Doppler and Amniotic Fluid Index assessment combine ultrasound techniques to evaluate blood circulation in selected maternal-fetal blood vessels and measure the fluid surrounding the baby. These assessments provide important information for monitoring pregnancy and evaluating selected indicators of fetal wellbeing.",
    evaluates: "The examination assesses blood-flow patterns in the umbilical artery and other selected maternal or fetal blood vessels, depending on clinical requirements. It also measures amniotic fluid volume using the Amniotic Fluid Index or deepest vertical pocket method and evaluates additional fetal wellbeing parameters when indicated.",
    evaluatesList: [
      "Umbilical artery blood-flow waveforms and resistance index",
      "Middle cerebral artery (MCA) Doppler and peak systolic velocity",
      "Uterine artery bilateral Doppler impedance",
      "Ductus venosus blood-flow patterns when clinically required",
      "Amniotic Fluid Index (AFI) or single deepest vertical pocket (DVP)",
      "Comprehensive fetal hemodynamic wellbeing assessment"
    ]
  },
  // 5. Dating, Viability / Pregnancy Scan (id: 1)
  1: {
    diagnosticFocus: "A Dating and Viability Scan is an early pregnancy ultrasound examination performed to assess the location and development of the pregnancy. It helps establish gestational age, evaluate early embryonic development and observe cardiac activity when appropriate for the stage of pregnancy.",
    evaluates: "The examination identifies the gestational sac and assesses the presence of the yolk sac and embryo. It measures crown-rump length when appropriate, evaluates fetal cardiac activity and estimates gestational age. It also assesses the number of gestational sacs and embryos and examines visible uterine and surrounding pelvic structures.",
    evaluatesList: [
      "Gestational sac location (intrauterine pregnancy confirmation)",
      "Yolk sac presence and healthy morphological appearance",
      "Embryonic pole identification and crown-rump length (CRL)",
      "Early cardiac flicker and heart rate quantification",
      "Number of gestational sacs and embryos (singleton vs. multiple)",
      "Uterine cavity, myometrium, and adjacent adnexal structures"
    ]
  },
  // 6. Growth / Fetal Well-Being Scan (id: 10)
  10: {
    diagnosticFocus: "A Growth and Fetal Well-Being Scan is an ultrasound examination performed during pregnancy to assess the baby's physical growth and development. It provides biometric measurements, estimated fetal weight and information about selected parameters associated with fetal wellbeing.",
    evaluates: "The examination measures the baby's head circumference, abdominal circumference, biparietal diameter and femur length. These measurements are used to estimate fetal weight and assess growth in relation to gestational age. It also evaluates amniotic fluid volume, placental location and additional fetal wellbeing or blood-flow parameters when clinically indicated.",
    evaluatesList: [
      "Head circumference (HC) and biparietal diameter (BPD)",
      "Abdominal circumference (AC) for metabolic growth evaluation",
      "Femur length (FL) and long bone biometric tracking",
      "Estimated Fetal Weight (EFW) plotted against gestational percentiles",
      "Amniotic fluid volume assessment (AFI / DVP)",
      "Placental location, grading, and fetal presentation"
    ]
  },
  // 7. Twins Anomaly Scan (id: 9)
  9: {
    diagnosticFocus: "A Twins Anomaly Scan is a detailed ultrasound examination designed to assess the anatomical development of both babies in a twin pregnancy. It provides an individual assessment of each fetus while also evaluating the placental arrangement and other important features of the multiple pregnancy.",
    evaluates: "The examination assesses the brain, spine, face, heart, abdomen and skeletal structures of both babies. It measures each baby's growth separately and evaluates placental location, chorionicity and amniotic fluid levels in the respective sacs. Additional Doppler assessments may be performed when clinically indicated.",
    evaluatesList: [
      "Individual structural head-to-toe anomaly assessment for Twin A and Twin B",
      "Placental chorionicity and amnionicity confirmation",
      "Separate biometric growth tracking and inter-twin weight discordance",
      "Amniotic fluid volume evaluation in each individual gestational sac",
      "Umbilical cord insertions and placental site mapping",
      "Twin-specific Doppler blood-flow assessments when indicated"
    ]
  },
  // 8. Cervical Assessment Scan (id: 13)
  13: {
    diagnosticFocus: "A Cervical Assessment Scan is an ultrasound examination that evaluates the length and appearance of the cervix during pregnancy. It provides measurements and structural observations that help clinicians assess cervical characteristics and evaluate factors associated with the risk of preterm birth.",
    evaluates: "The examination measures cervical length and assesses the appearance of the cervical canal and its internal and external openings. It also evaluates the presence of cervical funneling or other visible structural changes that may be relevant to pregnancy monitoring.",
    evaluatesList: [
      "Closed cervical canal length measurement",
      "Internal and external cervical os structural integrity",
      "Presence or absence of cervical funneling under gentle fundal pressure",
      "Evaluation of lower uterine segment architecture",
      "Monitoring cervical cerclage position when applicable",
      "Objective risk stratification for spontaneous preterm delivery"
    ]
  },
  // 9. USG Abdomen / Pelvis Scan (id: 14)
  14: {
    diagnosticFocus: "An Abdominal and Pelvic Ultrasound is a non-invasive imaging examination that uses sound waves to visualize internal organs and assess their structure, size and appearance. It helps identify visible abnormalities in the abdominal and pelvic regions through detailed ultrasound imaging.",
    evaluates: "Depending on the requested examination, the scan evaluates the liver, gallbladder, pancreas, spleen, kidneys and urinary bladder. When a pelvic examination is included, it also assesses the uterus and ovaries. The examination may identify visible cysts, stones, masses, fluid collections and other structural changes.",
    evaluatesList: [
      "Liver size, parenchyma, and intrahepatic biliary ducts",
      "Gallbladder wall thickness, calculi (gallstones), and lumen",
      "Pancreas and spleen size, outline, and echo-texture",
      "Bilateral kidneys for calculi, hydronephrosis, and cortico-medullary differentiation",
      "Urinary bladder distension, wall regularity, and pre/post-void volume",
      "Pelvic organs (uterus, endometrial lining, and ovaries) with mass/cyst review"
    ]
  },
  // 10. Pelvis 3D Scan (id: 16)
  16: {
    diagnosticFocus: "A Pelvis 3D Scan is an advanced ultrasound examination that produces three-dimensional images of pelvic structures. It provides detailed visualization of uterine anatomy and the endometrial cavity, helping evaluate structural variations and selected pelvic abnormalities.",
    evaluates: "The examination provides three-dimensional views of the uterus, including its shape, contour and endometrial cavity configuration. It also evaluates visible uterine structural variations, fibroids and their location, along with the appearance of the endometrial cavity and other relevant pelvic structures.",
    evaluatesList: [
      "Three-dimensional coronal-plane visualization of the uterine cavity",
      "Congenital uterine anomalies (septate, arcuate, bicornuate, unicornuate)",
      "Endometrial cavity contour, polyps, and intra-cavitary adhesions",
      "Uterine fibroid mapping (submucosal, intramural, subserosal)",
      "Adenomyosis depth, junctional zone assessment, and distribution",
      "Ovarian follicular reserve and detailed adnexal structural analysis"
    ]
  },
  // 11. Pelvis / Transvaginal Scan (id: 15)
  15: {
    diagnosticFocus: "A Pelvic and Transvaginal Ultrasound is an imaging examination used to assess the female reproductive organs and surrounding pelvic structures. Depending on clinical requirements, abdominal or transvaginal imaging is used to obtain detailed views of the uterus, ovaries and related anatomical structures.",
    evaluates: "The examination assesses uterine size, shape and endometrial thickness. It evaluates ovarian size, follicular development and the presence of visible cysts or other abnormalities. It also examines surrounding pelvic structures, including the adnexa, and identifies visible masses or fluid collections when present.",
    evaluatesList: [
      "Uterine size, myometrial echo-pattern, and position",
      "Endometrial thickness measurement and phase-appropriate architecture",
      "Bilateral ovarian volume, morphology, and follicular pattern",
      "Identification of simple cysts, hemorrhagic cysts, endometriomas, or dermoids",
      "Adnexal regions for visible masses, hydrosalpinx, or fluid collections",
      "Pouch of Douglas evaluation for free pelvic fluid"
    ]
  },
  // 12. Follicular Monitoring Studies (id: 17)
  17: {
    diagnosticFocus: "Follicular Monitoring is a series of ultrasound examinations performed during selected days of the menstrual cycle to observe ovarian follicular development. It helps track the growth of developing follicles, monitor changes in the uterine lining and identify ultrasound findings associated with ovulation.",
    evaluates: "The examinations monitor the number and size of developing ovarian follicles and identify the growth of the dominant follicle. They also measure endometrial thickness, assess its appearance and observe changes in the ovaries across different monitoring visits. Evidence of follicular rupture may also be evaluated during the monitoring process.",
    evaluatesList: [
      "Sequential measurement and growth tracking of dominant follicle(s)",
      "Ovarian follicular count in right and left ovaries",
      "Endometrial thickness and trilaminar pattern tracking",
      "Detection of sonographic signs of ovulation / follicular rupture",
      "Post-ovulatory changes including corpus luteum formation and cul-de-sac fluid",
      "Timing coordination for natural conception, IUI, or fertility guidance"
    ]
  },
  // 13. Neurosonogram (Fetal Neurosonogram) (id: 21)
  21: {
    diagnosticFocus: "A Fetal Neurosonogram is a specialized ultrasound examination focused on the developing baby's brain and central nervous system. It provides detailed imaging of intracranial structures to assess neurological anatomy and identify visible structural variations or abnormalities.",
    evaluates: "The examination assesses the cerebral hemispheres, ventricular system and midline brain structures. It also evaluates the posterior fossa, cerebellum and cisterna magna. Additional structures, including the corpus callosum and fetal spine, may be examined depending on the clinical indication and scanning protocol.",
    evaluatesList: [
      "Cerebral hemispheres, gyral development, and sylvian fissure maturation",
      "Lateral ventricles, atrium, third ventricle, and choroid plexus",
      "Midline brain structures including cavum septum pellucidum and corpus callosum",
      "Posterior fossa anatomy, cerebellar vermis, transverse diameter, and cisterna magna",
      "Brain parenchymal echo-texture and vascular circle of Willis Doppler",
      "Complete fetal spinal canal, vertebral bodies, and posterior elements"
    ]
  },
  // 14. NIPT – Cell-Free DNA Test (id: 24)
  24: {
    diagnosticFocus: "Non-Invasive Prenatal Testing (NIPT) is a blood-based prenatal screening test that analyzes cell-free DNA circulating in the mother's blood. It estimates the likelihood of selected chromosomal conditions in the developing baby without requiring an invasive sampling procedure.",
    evaluates: "Depending on the selected laboratory panel, the test screens for common chromosomal conditions such as Trisomy 21 (Down syndrome), Trisomy 18 (Edwards syndrome) and Trisomy 13 (Patau syndrome). Certain panels may also evaluate selected sex chromosome aneuploidies and additional chromosomal conditions. The results indicate screening risk and are not a definitive diagnosis.",
    evaluatesList: [
      "Trisomy 21 (Down syndrome) statistical screening risk",
      "Trisomy 18 (Edwards syndrome) statistical screening risk",
      "Trisomy 13 (Patau syndrome) statistical screening risk",
      "Sex chromosome aneuploidies (Turner, Klinefelter, Triple X, Jacobs syndromes)",
      "Circulating fetal fraction percentage calculation",
      "Microdeletion syndromes (when specific expanded panel is requested)"
    ]
  }
};

// Enrich all services with robust metadata for detail views and navigation
services.forEach((s) => {
  s.slug = slugify(s.name);
  s.timing = TIMING_MAP[s.id] || "Mon – Sat: 8:30 AM – 7:00 PM";
  s.shortDescription = s.purpose;
  s.departmentType = s.category;

  const verifiedDetail = DIAGNOSTIC_DETAILS_MAP[s.id];
  if (verifiedDetail) {
    s.diagnosticFocus = verifiedDetail.diagnosticFocus;
    s.evaluates = verifiedDetail.evaluates;
    s.evaluatesList = verifiedDetail.evaluatesList;
    s.introduction = verifiedDetail.diagnosticFocus;
  } else {
    s.diagnosticFocus = s.purpose;
    s.evaluates = s.procedure;
    s.evaluatesList = s.whatItChecks || [];
    s.introduction = s.introduction || `${s.name} at Sai Diagnostics & Fetal Medicine Centre provides high-precision diagnostic imaging and careful clinical evaluation. Conducted by Dr. T. Sai Kiranmai using advanced GE Voluson ultrasound systems, this examination ensures unhurried, attentive assessment and clear doctor explanations for parents and referring obstetricians.`;
  }

  s.conditions = s.evaluatesList && s.evaluatesList.length > 0 ? s.evaluatesList : (s.whatItChecks || []);
  s.services = [
    "High-resolution real-time ultrasound imaging with multi-planar assessment",
    "Detailed biometric measurements calibrated against international reference standards",
    "Color Doppler hemodynamic blood-flow analysis when clinically indicated",
    "Standardised evaluation adhering strictly to FMF and ISUOG clinical protocols",
    "Direct in-person consultation and findings explanation by Dr. T. Sai Kiranmai",
    "Comprehensive printed diagnostic report with high-definition thermal scan prints"
  ];
  s.whenToConsult = [
    "Prescribed or referred by your consulting obstetrician/doctor",
    "Reaching the recommended gestational age or clinical screening window",
    "Follow-up evaluation on previous scan findings or ultrasound observations",
    "Presence of maternal risk factors, twin pregnancy, or previous complications",
    "Expectant parents seeking verified specialist imaging and reassurance"
  ];
  s.faqs = [
    {
      question: "Is this ultrasound examination safe for the baby and mother?",
      answer: "Yes, diagnostic ultrasound uses high-frequency sound waves without ionizing radiation. It is clinically established as completely safe throughout all trimesters of pregnancy when performed by trained specialists."
    },
    {
      question: "What preparation is needed before arriving for the scan?",
      answer: s.preparation || "Generally, a moderately full bladder is helpful for early scans, while mid-to-late pregnancy scans require no special fasting. Please bring your consulting doctor's prescription."
    },
    {
      question: "How long does the examination take and when will I get my report?",
      answer: "Most scans take approximately 25 to 45 minutes to ensure an attentive, unhurried assessment. Your comprehensive diagnostic report and ultrasound images are handed over on the same day after doctor review."
    },
    {
      question: "Can my spouse or a family member join me in the scan suite?",
      answer: "Yes, at Sai Diagnostics we welcome expectant mothers to have their spouse or an accompanying family member present in our comfortable consultation suite during the examination."
    },
    {
      question: "Will the doctor explain the scan results to us?",
      answer: "Dr. T. Sai Kiranmai personally performs the scan and provides immediate, reassuring explanations of the findings, answering all questions and coordinating closely with your referring obstetrician."
    }
  ];
});

export function getServiceBySlug(slug) {
  if (!slug) return null;
  const clean = slug.toLowerCase().trim();
  return (
    services.find(
      (s) =>
        s.slug === clean ||
        slugify(s.name) === clean ||
        String(s.id) === clean
    ) || null
  );
}

export const FETAL_MEDICINE_SCANS = [
  services.find((s) => s.id === 5),  // Anomaly / TIFFA Scan
  services.find((s) => s.id === 2),  // NT Scan (12-14W)
  services.find((s) => s.id === 7),  // Advanced Fetal Echo
  services.find((s) => s.id === 12), // Obstetric Doppler + AFI
  services.find((s) => s.id === 1),  // Dating / Viability Scan
  services.find((s) => s.id === 10), // Growth / Fetal Well-Being
  services.find((s) => s.id === 9),  // Twins Anomaly Scan
  services.find((s) => s.id === 13), // Cervical Assessment Scan
].filter(Boolean);

export const GENERAL_DIAGNOSTIC_SCANS = [
  services.find((s) => s.id === 14), // USG Abdomen / Pelvis
  services.find((s) => s.id === 16), // Pelvis 3D Scan
  services.find((s) => s.id === 15), // Pelvis / TVS Scan
  services.find((s) => s.id === 17), // Follicular Monitoring
  services.find((s) => s.id === 20), // USG Soft Tissues Swelling
  services.find((s) => s.id === 21), // Neurosonogram
  services.find((s) => s.id === 24), // NIPT Cell-Free DNA Test
].filter(Boolean);

