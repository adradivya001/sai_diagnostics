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
    id: 18,
    name: "Breast Scan",
    category: "General Ultrasound Scans",
    price: "1500",
    image: "/breast-scan.png",
    purpose: "To examine breast tissue and investigate breast changes.",
    procedure: "An ultrasound probe is moved over the breast to produce images of the underlying tissue.",
    whatItChecks: [
      "Breast lumps and cysts",
      "Tissue changes and architecture",
      "Other visible abnormalities in the examined area"
    ],
    preparation: "Wear comfortable two-piece clothing. Bring any previous mammography or ultrasound reports."
  },
  {
    id: 19,
    name: "Thyroid Scan",
    category: "General Ultrasound Scans",
    price: "1200",
    image: "/thyroid-scan.png",
    purpose: "To examine the thyroid gland in the neck.",
    procedure: "An ultrasound probe is moved over the front of the neck to obtain images of the thyroid gland.",
    whatItChecks: [
      "Thyroid size and structure",
      "Nodules or cysts",
      "Other structural abnormalities and vascularity"
    ],
    preparation: "Wear an open-neck shirt or blouse; avoid necklaces and jewelry around the neck."
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
