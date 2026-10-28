// NEET DESTROYER DATA STORE - COMPLETE 97 CHAPTERS & 30,850 TARGET QUESTIONS
const NEET_DATA = {
    colleges: [
    {
        "id": "aiims_delhi",
        "name": "AIIMS New Delhi",
        "air": 50,
        "score": 715,
        "location": "New Delhi",
        "seats": 125,
        "tier": "Super Elite"
    },
    {
        "id": "jipmer",
        "name": "JIPMER Puducherry",
        "air": 100,
        "score": 712,
        "location": "Puducherry",
        "seats": 200,
        "tier": "Super Elite"
    },
    {
        "id": "mamc",
        "name": "Maulana Azad Medical College (MAMC)",
        "air": 200,
        "score": 710,
        "location": "New Delhi",
        "seats": 250,
        "tier": "Top State GMC"
    },
    {
        "id": "vmmc",
        "name": "VMMC & Safdarjung Hospital",
        "air": 350,
        "score": 708,
        "location": "New Delhi",
        "seats": 170,
        "tier": "Central Hospital"
    },
    {
        "id": "lhmc",
        "name": "Lady Hardinge Medical College",
        "air": 500,
        "score": 705,
        "location": "New Delhi",
        "seats": 240,
        "tier": "Premier Central"
    },
    {
        "id": "grant_mc",
        "name": "Grant Government Medical College",
        "air": 700,
        "score": 702,
        "location": "Mumbai",
        "seats": 250,
        "tier": "Top Maharashtra"
    },
    {
        "id": "kem_mumbai",
        "name": "Seth GS Medical College (KEM)",
        "air": 800,
        "score": 700,
        "location": "Mumbai",
        "seats": 250,
        "tier": "Top Maharashtra"
    },
    {
        "id": "ucms",
        "name": "UCMS & GTB Hospital",
        "air": 900,
        "score": 698,
        "location": "New Delhi",
        "tier": "Delhi University",
        "seats": 170
    },
    {
        "id": "bhu_ims",
        "name": "Institute of Medical Sciences, BHU",
        "air": 1000,
        "score": 695,
        "location": "Varanasi",
        "tier": "Central University",
        "seats": 100
    },
    {
        "id": "bmc_bangalore",
        "name": "Bangalore Medical College (BMCRI)",
        "air": 1200,
        "score": 692,
        "location": "Bengaluru",
        "tier": "Top Karnataka",
        "seats": 250
    }
],
    chapters: [
    {
        "id": "bio_11_01",
        "sub": "Botany",
        "class": 11,
        "num": 1,
        "name": "The Living World",
        "prio": "C",
        "qs": "1-2 Q",
        "days": 1.0,
        "target": 200,
        "is_nmc": true,
        "unit": "Diversity in Living World",
        "diff": 1,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_11_02",
        "sub": "Botany",
        "class": 11,
        "num": 2,
        "name": "Biological Classification",
        "prio": "A",
        "qs": "8-10 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Diversity in Living World",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_11_03",
        "sub": "Botany",
        "class": 11,
        "num": 3,
        "name": "Plant Kingdom",
        "prio": "A",
        "qs": "6-8 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Diversity in Living World",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_11_04",
        "sub": "Zoology",
        "class": 11,
        "num": 4,
        "name": "Animal Kingdom",
        "prio": "A",
        "qs": "8-10 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Diversity in Living World",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_11_05",
        "sub": "Botany",
        "class": 11,
        "num": 5,
        "name": "Morphology of Flowering Plants",
        "prio": "A",
        "qs": "6-8 Q",
        "days": 2.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Structural Organisation",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_11_06",
        "sub": "Botany",
        "class": 11,
        "num": 6,
        "name": "Anatomy of Flowering Plants",
        "prio": "B",
        "qs": "4-5 Q",
        "days": 2.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Structural Organisation",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_11_07",
        "sub": "Zoology",
        "class": 11,
        "num": 7,
        "name": "Structural Organisation in Animals",
        "prio": "B",
        "qs": "3-4 Q",
        "days": 1.5,
        "target": 300,
        "is_nmc": true,
        "unit": "Structural Organisation",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_11_08",
        "sub": "Botany",
        "class": 11,
        "num": 8,
        "name": "Cell: The Unit of Life",
        "prio": "A",
        "qs": "8-10 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Cell Structure & Function",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_11_09",
        "sub": "Zoology",
        "class": 11,
        "num": 9,
        "name": "Biomolecules",
        "prio": "A",
        "qs": "6-8 Q",
        "days": 2.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Cell Structure & Function",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_11_10",
        "sub": "Botany",
        "class": 11,
        "num": 10,
        "name": "Cell Cycle and Cell Division",
        "prio": "A",
        "qs": "6-8 Q",
        "days": 2.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Cell Structure & Function",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_11_11",
        "sub": "Botany",
        "class": 11,
        "num": 11,
        "name": "Transport in Plants",
        "prio": "B",
        "qs": "3-4 Q",
        "days": 1.5,
        "target": 300,
        "is_nmc": false,
        "unit": "Plant Physiology",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_11_12",
        "sub": "Botany",
        "class": 11,
        "num": 12,
        "name": "Mineral Nutrition",
        "prio": "B",
        "qs": "3-4 Q",
        "days": 1.5,
        "target": 250,
        "is_nmc": false,
        "unit": "Plant Physiology",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_11_13",
        "sub": "Botany",
        "class": 11,
        "num": 13,
        "name": "Photosynthesis in Higher Plants",
        "prio": "A",
        "qs": "4-6 Q",
        "days": 2.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Plant Physiology",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_11_14",
        "sub": "Botany",
        "class": 11,
        "num": 14,
        "name": "Respiration in Plants",
        "prio": "B",
        "qs": "3-4 Q",
        "days": 1.5,
        "target": 300,
        "is_nmc": true,
        "unit": "Plant Physiology",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_11_15",
        "sub": "Botany",
        "class": 11,
        "num": 15,
        "name": "Plant Growth and Development",
        "prio": "B",
        "qs": "3-4 Q",
        "days": 1.5,
        "target": 300,
        "is_nmc": true,
        "unit": "Plant Physiology",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_11_16",
        "sub": "Zoology",
        "class": 11,
        "num": 16,
        "name": "Digestion and Absorption",
        "prio": "B",
        "qs": "3-4 Q",
        "days": 1.5,
        "target": 350,
        "is_nmc": false,
        "unit": "Human Physiology",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_11_17",
        "sub": "Zoology",
        "class": 11,
        "num": 17,
        "name": "Breathing and Gas Exchange",
        "prio": "A",
        "qs": "4-6 Q",
        "days": 2.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Human Physiology",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_11_18",
        "sub": "Zoology",
        "class": 11,
        "num": 18,
        "name": "Body Fluids and Circulation",
        "prio": "A",
        "qs": "4-6 Q",
        "days": 2.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Human Physiology",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_11_19",
        "sub": "Zoology",
        "class": 11,
        "num": 19,
        "name": "Excretory Products and their Elimination",
        "prio": "B",
        "qs": "4-5 Q",
        "days": 2.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Human Physiology",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_11_20",
        "sub": "Zoology",
        "class": 11,
        "num": 20,
        "name": "Locomotion and Movement",
        "prio": "B",
        "qs": "4-6 Q",
        "days": 2.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Human Physiology",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_11_21",
        "sub": "Zoology",
        "class": 11,
        "num": 21,
        "name": "Neural Control and Coordination",
        "prio": "A",
        "qs": "6-8 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Human Physiology",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_11_22",
        "sub": "Zoology",
        "class": 11,
        "num": 22,
        "name": "Chemical Coordination and Integration",
        "prio": "A",
        "qs": "4-6 Q",
        "days": 2.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Human Physiology",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_11_01",
        "sub": "Chemistry",
        "class": 11,
        "num": 1,
        "name": "Some Basic Concepts of Chemistry",
        "prio": "A",
        "qs": "3-4 Q",
        "days": 2.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Physical Chemistry",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_11_02",
        "sub": "Chemistry",
        "class": 11,
        "num": 2,
        "name": "Structure of Atom",
        "prio": "A",
        "qs": "4-5 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Physical Chemistry",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_11_03",
        "sub": "Chemistry",
        "class": 11,
        "num": 3,
        "name": "Classification of Elements & Periodicity",
        "prio": "B",
        "qs": "3-4 Q",
        "days": 2.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Inorganic Chemistry",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_11_04",
        "sub": "Chemistry",
        "class": 11,
        "num": 4,
        "name": "Chemical Bonding & Molecular Structure",
        "prio": "A",
        "qs": "6-8 Q",
        "days": 4.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Inorganic Chemistry",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_11_05",
        "sub": "Chemistry",
        "class": 11,
        "num": 5,
        "name": "States of Matter: Gases and Liquids",
        "prio": "B",
        "qs": "2-3 Q",
        "days": 2.0,
        "target": 300,
        "is_nmc": false,
        "unit": "Physical Chemistry",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_11_06",
        "sub": "Chemistry",
        "class": 11,
        "num": 6,
        "name": "Chemical Thermodynamics",
        "prio": "A",
        "qs": "3-5 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Physical Chemistry",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_11_07",
        "sub": "Chemistry",
        "class": 11,
        "num": 7,
        "name": "Equilibrium",
        "prio": "A",
        "qs": "4-6 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Physical Chemistry",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_11_08",
        "sub": "Chemistry",
        "class": 11,
        "num": 8,
        "name": "Redox Reactions",
        "prio": "B",
        "qs": "1-2 Q",
        "days": 1.5,
        "target": 200,
        "is_nmc": true,
        "unit": "Physical Chemistry",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_11_09",
        "sub": "Chemistry",
        "class": 11,
        "num": 9,
        "name": "Hydrogen",
        "prio": "C",
        "qs": "1-2 Q",
        "days": 1.0,
        "target": 200,
        "is_nmc": false,
        "unit": "Inorganic Chemistry",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_11_10",
        "sub": "Chemistry",
        "class": 11,
        "num": 10,
        "name": "s-Block Elements (Alkali & Alkaline)",
        "prio": "B",
        "qs": "3-4 Q",
        "days": 2.0,
        "target": 300,
        "is_nmc": false,
        "unit": "Inorganic Chemistry",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_11_11",
        "sub": "Chemistry",
        "class": 11,
        "num": 11,
        "name": "p-Block Elements (Groups 13 & 14)",
        "prio": "B",
        "qs": "3-4 Q",
        "days": 2.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Inorganic Chemistry",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_11_12",
        "sub": "Chemistry",
        "class": 11,
        "num": 12,
        "name": "Organic Chemistry: Principles & Techniques",
        "prio": "A",
        "qs": "6-8 Q",
        "days": 4.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Organic Chemistry",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_11_13",
        "sub": "Chemistry",
        "class": 11,
        "num": 13,
        "name": "Hydrocarbons",
        "prio": "A",
        "qs": "4-5 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Organic Chemistry",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_11_14",
        "sub": "Chemistry",
        "class": 11,
        "num": 14,
        "name": "Environmental Chemistry",
        "prio": "C",
        "qs": "0-1 Q",
        "days": 0.5,
        "target": 100,
        "is_nmc": false,
        "unit": "Applied Chemistry",
        "diff": 1,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_11_01",
        "sub": "Physics",
        "class": 11,
        "num": 1,
        "name": "Physical World",
        "prio": "C",
        "qs": "0-1 Q",
        "days": 0.5,
        "target": 50,
        "is_nmc": false,
        "unit": "Physical World & Measurement",
        "diff": 1,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_11_02",
        "sub": "Physics",
        "class": 11,
        "num": 2,
        "name": "Units and Measurements",
        "prio": "B",
        "qs": "2-3 Q",
        "days": 2.0,
        "target": 200,
        "is_nmc": true,
        "unit": "Physical World & Measurement",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_11_03",
        "sub": "Physics",
        "class": 11,
        "num": 3,
        "name": "Motion in a Straight Line",
        "prio": "A",
        "qs": "4-5 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Kinematics",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_11_04",
        "sub": "Physics",
        "class": 11,
        "num": 4,
        "name": "Motion in a Plane",
        "prio": "A",
        "qs": "4-5 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Kinematics",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_11_05",
        "sub": "Physics",
        "class": 11,
        "num": 5,
        "name": "Laws of Motion",
        "prio": "A",
        "qs": "6-8 Q",
        "days": 4.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Laws of Motion",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_11_06",
        "sub": "Physics",
        "class": 11,
        "num": 6,
        "name": "Work, Energy and Power",
        "prio": "A",
        "qs": "4-6 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Work, Energy & Power",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_11_07",
        "sub": "Physics",
        "class": 11,
        "num": 7,
        "name": "System of Particles & Rotational Motion",
        "prio": "A",
        "qs": "4-5 Q",
        "days": 4.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Rotational Motion",
        "diff": 5,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_11_08",
        "sub": "Physics",
        "class": 11,
        "num": 8,
        "name": "Gravitation",
        "prio": "B",
        "qs": "2-3 Q",
        "days": 2.0,
        "target": 300,
        "is_nmc": true,
        "unit": "Gravitation",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_11_09",
        "sub": "Physics",
        "class": 11,
        "num": 9,
        "name": "Mechanical Properties of Solids",
        "prio": "B",
        "qs": "1-2 Q",
        "days": 1.5,
        "target": 200,
        "is_nmc": true,
        "unit": "Properties of Bulk Matter",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_11_10",
        "sub": "Physics",
        "class": 11,
        "num": 10,
        "name": "Mechanical Properties of Fluids",
        "prio": "B",
        "qs": "2-3 Q",
        "days": 2.0,
        "target": 200,
        "is_nmc": true,
        "unit": "Properties of Bulk Matter",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_11_11",
        "sub": "Physics",
        "class": 11,
        "num": 11,
        "name": "Thermal Properties of Matter",
        "prio": "B",
        "qs": "2-3 Q",
        "days": 2.0,
        "target": 300,
        "is_nmc": true,
        "unit": "Thermodynamics & Heat",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_11_12",
        "sub": "Physics",
        "class": 11,
        "num": 12,
        "name": "Thermodynamics",
        "prio": "A",
        "qs": "3-4 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Thermodynamics & Heat",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_11_13",
        "sub": "Physics",
        "class": 11,
        "num": 13,
        "name": "Kinetic Theory of Gases",
        "prio": "B",
        "qs": "1-2 Q",
        "days": 1.5,
        "target": 200,
        "is_nmc": true,
        "unit": "Kinetic Theory",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_11_14",
        "sub": "Physics",
        "class": 11,
        "num": 14,
        "name": "Oscillations",
        "prio": "A",
        "qs": "3-4 Q",
        "days": 3.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Oscillations & Waves",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_11_15",
        "sub": "Physics",
        "class": 11,
        "num": 15,
        "name": "Waves",
        "prio": "A",
        "qs": "3-4 Q",
        "days": 3.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Oscillations & Waves",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_12_01",
        "sub": "Botany",
        "class": 12,
        "num": 1,
        "name": "Reproduction in Organisms",
        "prio": "C",
        "qs": "1-2 Q",
        "days": 1.0,
        "target": 150,
        "is_nmc": false,
        "unit": "Reproduction",
        "diff": 1,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_12_02",
        "sub": "Zoology",
        "class": 12,
        "num": 2,
        "name": "Sexual Reproduction in Flowering Plants",
        "prio": "A",
        "qs": "4-5 Q",
        "days": 2.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Reproduction",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_12_03",
        "sub": "Zoology",
        "class": 12,
        "num": 3,
        "name": "Human Reproduction",
        "prio": "A",
        "qs": "5-7 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Reproduction",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_12_04",
        "sub": "Zoology",
        "class": 12,
        "num": 4,
        "name": "Reproductive Health",
        "prio": "B",
        "qs": "2-3 Q",
        "days": 1.0,
        "target": 200,
        "is_nmc": true,
        "unit": "Reproduction",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_12_05",
        "sub": "Botany",
        "class": 12,
        "num": 5,
        "name": "Principles of Inheritance and Variation",
        "prio": "A",
        "qs": "6-8 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Genetics and Evolution",
        "diff": 5,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_12_06",
        "sub": "Botany",
        "class": 12,
        "num": 6,
        "name": "Molecular Basis of Inheritance",
        "prio": "A",
        "qs": "8-10 Q",
        "days": 4.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Genetics and Evolution",
        "diff": 5,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_12_07",
        "sub": "Zoology",
        "class": 12,
        "num": 7,
        "name": "Evolution",
        "prio": "A",
        "qs": "4-5 Q",
        "days": 2.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Genetics and Evolution",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_12_08",
        "sub": "Zoology",
        "class": 12,
        "num": 8,
        "name": "Human Health and Disease",
        "prio": "A",
        "qs": "4-6 Q",
        "days": 2.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Biology in Human Welfare",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_12_09",
        "sub": "Botany",
        "class": 12,
        "num": 9,
        "name": "Enhancement in Food Production",
        "prio": "B",
        "qs": "2-3 Q",
        "days": 1.5,
        "target": 200,
        "is_nmc": false,
        "unit": "Biology in Human Welfare",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_12_10",
        "sub": "Zoology",
        "class": 12,
        "num": 10,
        "name": "Microbes in Human Welfare",
        "prio": "B",
        "qs": "2-3 Q",
        "days": 1.5,
        "target": 200,
        "is_nmc": true,
        "unit": "Biology in Human Welfare",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_12_11",
        "sub": "Botany",
        "class": 12,
        "num": 11,
        "name": "Biotechnology: Principles and Processes",
        "prio": "A",
        "qs": "4-5 Q",
        "days": 3.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Biotechnology",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_12_12",
        "sub": "Botany",
        "class": 12,
        "num": 12,
        "name": "Biotechnology and its Applications",
        "prio": "A",
        "qs": "3-4 Q",
        "days": 2.0,
        "target": 300,
        "is_nmc": true,
        "unit": "Biotechnology",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_12_13",
        "sub": "Botany",
        "class": 12,
        "num": 13,
        "name": "Organisms and Populations",
        "prio": "A",
        "qs": "4-5 Q",
        "days": 2.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Ecology and Environment",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_12_14",
        "sub": "Botany",
        "class": 12,
        "num": 14,
        "name": "Ecosystem",
        "prio": "B",
        "qs": "2-3 Q",
        "days": 1.5,
        "target": 250,
        "is_nmc": true,
        "unit": "Ecology and Environment",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_12_15",
        "sub": "Botany",
        "class": 12,
        "num": 15,
        "name": "Biodiversity and Conservation",
        "prio": "B",
        "qs": "2-3 Q",
        "days": 1.5,
        "target": 250,
        "is_nmc": true,
        "unit": "Ecology and Environment",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "bio_12_16",
        "sub": "Botany",
        "class": 12,
        "num": 16,
        "name": "Environmental Issues",
        "prio": "B",
        "qs": "2-3 Q",
        "days": 1.5,
        "target": 250,
        "is_nmc": false,
        "unit": "Ecology and Environment",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_12_01",
        "sub": "Chemistry",
        "class": 12,
        "num": 1,
        "name": "The Solid State",
        "prio": "B",
        "qs": "2-3 Q",
        "days": 2.0,
        "target": 250,
        "is_nmc": false,
        "unit": "Physical Chemistry",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_12_02",
        "sub": "Chemistry",
        "class": 12,
        "num": 2,
        "name": "Solutions",
        "prio": "A",
        "qs": "3-4 Q",
        "days": 3.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Physical Chemistry",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_12_03",
        "sub": "Chemistry",
        "class": 12,
        "num": 3,
        "name": "Electrochemistry",
        "prio": "A",
        "qs": "4-5 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Physical Chemistry",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_12_04",
        "sub": "Chemistry",
        "class": 12,
        "num": 4,
        "name": "Chemical Kinetics",
        "prio": "A",
        "qs": "3-4 Q",
        "days": 3.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Physical Chemistry",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_12_05",
        "sub": "Chemistry",
        "class": 12,
        "num": 5,
        "name": "Surface Chemistry",
        "prio": "B",
        "qs": "2-3 Q",
        "days": 2.0,
        "target": 250,
        "is_nmc": false,
        "unit": "Physical Chemistry",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_12_06",
        "sub": "Chemistry",
        "class": 12,
        "num": 6,
        "name": "General Principles of Isolation of Elements",
        "prio": "C",
        "qs": "1 Q",
        "days": 1.0,
        "target": 100,
        "is_nmc": false,
        "unit": "Inorganic Chemistry",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_12_07",
        "sub": "Chemistry",
        "class": 12,
        "num": 7,
        "name": "p-Block Elements (Groups 15 to 18)",
        "prio": "A",
        "qs": "4-5 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Inorganic Chemistry",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_12_08",
        "sub": "Chemistry",
        "class": 12,
        "num": 8,
        "name": "d- and f-Block Elements",
        "prio": "A",
        "qs": "3-4 Q",
        "days": 3.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Inorganic Chemistry",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_12_09",
        "sub": "Chemistry",
        "class": 12,
        "num": 9,
        "name": "Coordination Compounds",
        "prio": "A",
        "qs": "4-5 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Inorganic Chemistry",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_12_10",
        "sub": "Chemistry",
        "class": 12,
        "num": 10,
        "name": "Haloalkanes and Haloarenes",
        "prio": "A",
        "qs": "3-4 Q",
        "days": 3.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Organic Chemistry",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_12_11",
        "sub": "Chemistry",
        "class": 12,
        "num": 11,
        "name": "Alcohols, Phenols and Ethers",
        "prio": "A",
        "qs": "3-4 Q",
        "days": 3.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Organic Chemistry",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_12_12",
        "sub": "Chemistry",
        "class": 12,
        "num": 12,
        "name": "Aldehydes, Ketones and Carboxylic Acids",
        "prio": "A",
        "qs": "4-5 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Organic Chemistry",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_12_13",
        "sub": "Chemistry",
        "class": 12,
        "num": 13,
        "name": "Amines (Nitrogen Containing Compounds)",
        "prio": "A",
        "qs": "3-4 Q",
        "days": 2.0,
        "target": 300,
        "is_nmc": true,
        "unit": "Organic Chemistry",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_12_14",
        "sub": "Chemistry",
        "class": 12,
        "num": 14,
        "name": "Biomolecules",
        "prio": "A",
        "qs": "3-4 Q",
        "days": 2.0,
        "target": 300,
        "is_nmc": true,
        "unit": "Bio-Organic Chemistry",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_12_15",
        "sub": "Chemistry",
        "class": 12,
        "num": 15,
        "name": "Polymers",
        "prio": "B",
        "qs": "1-2 Q",
        "days": 1.0,
        "target": 150,
        "is_nmc": false,
        "unit": "Applied Chemistry",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "chm_12_16",
        "sub": "Chemistry",
        "class": 12,
        "num": 16,
        "name": "Chemistry in Everyday Life",
        "prio": "C",
        "qs": "1 Q",
        "days": 1.0,
        "target": 100,
        "is_nmc": false,
        "unit": "Applied Chemistry",
        "diff": 1,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_12_01",
        "sub": "Physics",
        "class": 12,
        "num": 1,
        "name": "Electric Charges and Fields",
        "prio": "A",
        "qs": "4-5 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Electrostatics",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_12_02",
        "sub": "Physics",
        "class": 12,
        "num": 2,
        "name": "Electrostatic Potential & Capacitance",
        "prio": "A",
        "qs": "4-5 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Electrostatics",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_12_03",
        "sub": "Physics",
        "class": 12,
        "num": 3,
        "name": "Current Electricity",
        "prio": "A",
        "qs": "5-7 Q",
        "days": 4.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Current Electricity",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_12_04",
        "sub": "Physics",
        "class": 12,
        "num": 4,
        "name": "Moving Charges and Magnetism",
        "prio": "A",
        "qs": "4-5 Q",
        "days": 3.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Magnetic Effects of Current",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_12_05",
        "sub": "Physics",
        "class": 12,
        "num": 5,
        "name": "Magnetism and Matter",
        "prio": "B",
        "qs": "1-2 Q",
        "days": 1.5,
        "target": 200,
        "is_nmc": true,
        "unit": "Magnetic Effects of Current",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_12_06",
        "sub": "Physics",
        "class": 12,
        "num": 6,
        "name": "Electromagnetic Induction",
        "prio": "A",
        "qs": "3-4 Q",
        "days": 3.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Electromagnetic Induction",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_12_07",
        "sub": "Physics",
        "class": 12,
        "num": 7,
        "name": "Alternating Current",
        "prio": "A",
        "qs": "3-4 Q",
        "days": 3.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Alternating Current",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_12_08",
        "sub": "Physics",
        "class": 12,
        "num": 8,
        "name": "Electromagnetic Waves",
        "prio": "C",
        "qs": "1 Q",
        "days": 1.0,
        "target": 100,
        "is_nmc": true,
        "unit": "EM Waves",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_12_09",
        "sub": "Physics",
        "class": 12,
        "num": 9,
        "name": "Ray Optics & Optical Instruments",
        "prio": "A",
        "qs": "5-7 Q",
        "days": 4.0,
        "target": 400,
        "is_nmc": true,
        "unit": "Optics",
        "diff": 4,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_12_10",
        "sub": "Physics",
        "class": 12,
        "num": 10,
        "name": "Wave Optics",
        "prio": "A",
        "qs": "3-4 Q",
        "days": 3.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Optics",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_12_11",
        "sub": "Physics",
        "class": 12,
        "num": 11,
        "name": "Dual Nature of Radiation and Matter",
        "prio": "A",
        "qs": "3-4 Q",
        "days": 2.0,
        "target": 300,
        "is_nmc": true,
        "unit": "Modern Physics",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_12_12",
        "sub": "Physics",
        "class": 12,
        "num": 12,
        "name": "Atoms",
        "prio": "B",
        "qs": "2-3 Q",
        "days": 2.0,
        "target": 250,
        "is_nmc": true,
        "unit": "Modern Physics",
        "diff": 2,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_12_13",
        "sub": "Physics",
        "class": 12,
        "num": 13,
        "name": "Nuclei",
        "prio": "B",
        "qs": "2-3 Q",
        "days": 2.0,
        "target": 250,
        "is_nmc": true,
        "unit": "Modern Physics",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_12_14",
        "sub": "Physics",
        "class": 12,
        "num": 14,
        "name": "Semiconductor Electronics",
        "prio": "A",
        "qs": "3-4 Q",
        "days": 3.0,
        "target": 350,
        "is_nmc": true,
        "unit": "Electronic Devices",
        "diff": 3,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    },
    {
        "id": "phy_12_15",
        "sub": "Physics",
        "class": 12,
        "num": 15,
        "name": "Communication Systems",
        "prio": "C",
        "qs": "0-1 Q",
        "days": 0.5,
        "target": 50,
        "is_nmc": false,
        "unit": "Communication Systems",
        "diff": 1,
        "topics": [
            "Core Concept & NCERT Overview",
            "Formulae & Numerical Traps",
            "High-Yield Active Recall Lines",
            "Previous Year NEET Trends (2013-2024)"
        ]
    }
],
    flashcards: [
    {
        "id": "fc_bio_01",
        "subject": "Biology",
        "chapter": "Biological Classification",
        "front": "Which group of fungi is called 'Fungi Imperfecti' and why?",
        "back": "Deuteromycetes. Because only asexual or vegetative phases are known. When sexual stages are discovered, they are moved into Ascomycetes or Basidiomycetes.",
        "tag": "High-Yield NCERT",
        "ncertRef": "NCERT Class 11, p. 24"
    },
    {
        "id": "fc_bio_02",
        "subject": "Biology",
        "chapter": "Cell Cycle and Cell Division",
        "front": "In which specific sub-stage of Prophase I does 'crossing over' occur, and which enzyme mediates it?",
        "back": "Pachytene stage. Mediated by the enzyme 'Recombinase'. Recombination nodules appear at this stage between non-sister chromatids of homologous chromosomes.",
        "tag": "Frequent Trap",
        "ncertRef": "NCERT Class 11, p. 168"
    },
    {
        "id": "fc_bio_03",
        "subject": "Biology",
        "chapter": "Morphology of Flowering Plants",
        "front": "What type of placentation is seen in: (a) Pea, (b) Dianthus/Primrose, (c) Tomato/Lemon, (d) Mustard/Argemone?",
        "back": "(a) Marginal\n(b) Free central (ovules on central axis, septa absent)\n(c) Axile (multilocular ovary)\n(d) Parietal (ovules on inner wall or peripheral part; false septum replum present)",
        "tag": "Must-Remember",
        "ncertRef": "NCERT Class 11, p. 75"
    },
    {
        "id": "fc_bio_04",
        "subject": "Biology",
        "chapter": "Molecular Basis of Inheritance",
        "front": "In the Lac Operon, what is the role of: (1) lac z, (2) lac y, (3) lac a genes?",
        "back": "1. lac z: Beta-galactosidase (hydrolyzes lactose into glucose + galactose)\n2. lac y: Permease (increases cell permeability to beta-galactosides)\n3. lac a: Transacetylase",
        "tag": "Guaranteed Question",
        "ncertRef": "NCERT Class 12, p. 117"
    },
    {
        "id": "fc_bio_05",
        "subject": "Biology",
        "chapter": "Human Reproduction",
        "front": "What triggers the LH surge and what is its immediate biological effect in the female menstrual cycle?",
        "back": "High levels of Estrogen secreted by growing mature Graafian follicle exert positive feedback on the pituitary, causing rapid LH secretion (LH surge) mid-cycle (~14th day), inducing rupture of Graafian follicle and release of ovum (Ovulation).",
        "tag": "Endocrine Control",
        "ncertRef": "NCERT Class 12, p. 50"
    },
    {
        "id": "fc_bio_06",
        "subject": "Biology",
        "chapter": "Principles of Inheritance and Variation",
        "front": "State the genotypic and phenotypic ratios of Incomplete Dominance (e.g. Mirabilis jalapa / Snapdragon).",
        "back": "Both Phenotypic and Genotypic ratios are identical: 1 : 2 : 1\n(1 Red : 2 Pink : 1 White) and (1 RR : 2 Rr : 1 rr). Contrasts with normal Mendelian 3:1.",
        "tag": "Genetics Core",
        "ncertRef": "NCERT Class 12, p. 76"
    },
    {
        "id": "fc_bio_07",
        "subject": "Biology",
        "chapter": "Body Fluids and Circulation",
        "front": "What does each ECG wave represent: P wave, QRS complex, T wave?",
        "back": "\u2022 P Wave: Depolarisation of atria (leads to atrial contraction)\n\u2022 QRS Complex: Depolarisation of ventricles (marks start of ventricular systole)\n\u2022 T Wave: Repolarisation of ventricles (return from excited to normal state; end of T wave marks end of systole)",
        "tag": "Clinical NEET",
        "ncertRef": "NCERT Class 11, p. 286"
    },
    {
        "id": "fc_bio_08",
        "subject": "Biology",
        "chapter": "Photosynthesis in Higher Plants",
        "front": "What is the primary CO2 acceptor in C3 vs C4 plants, and which primary carboxylation enzymes are used?",
        "back": "\u2022 C3 Plants: RuBP (5-carbon ketose sugar); Enzyme: RuBisCO; First stable product: 3-PGA (3C).\n\u2022 C4 Plants: PEP (Phosphoenolpyruvate, 3C); Enzyme: PEP carboxylase (PEPcase) in mesophyll cells; First stable product: OAA (Oxaloacetic acid, 4C).",
        "tag": "Plant Physiology",
        "ncertRef": "NCERT Class 11, p. 218-220"
    },
    {
        "id": "fc_chm_01",
        "subject": "Chemistry",
        "chapter": "Chemical Bonding & Molecular Structure",
        "front": "Predict the hybridization and molecular geometry of: XeF2, XeF4, and SF4 using VSEPR.",
        "back": "\u2022 XeF2: sp3d (2 bond pairs + 3 lone pairs in equatorial) -> Linear shape\n\u2022 XeF4: sp3d2 (4 bond pairs + 2 lone pairs axial) -> Square Planar\n\u2022 SF4: sp3d (4 bond pairs + 1 lone pair equatorial) -> See-saw shape",
        "tag": "Hybridization Master",
        "ncertRef": "NCERT Class 11, p. 115"
    },
    {
        "id": "fc_chm_02",
        "subject": "Chemistry",
        "chapter": "Coordination Compounds",
        "front": "For [Co(NH3)6]3+ vs [CoF6]3-, state: hybridization, magnetic nature, and inner/outer orbital classification.",
        "back": "\u2022 [Co(NH3)6]3+: Co(III) d6, NH3 is strong field ligand -> pairing occurs (t2g6 eg0) -> d2sp3 (Inner orbital, Diamagnetic, Low spin).\n\u2022 [CoF6]3-: F- is weak field ligand -> no pairing (t2g4 eg2) -> sp3d2 (Outer orbital, Paramagnetic 4 unpaired e-, High spin).",
        "tag": "CFT & VBT Trap",
        "ncertRef": "NCERT Class 12, p. 250"
    },
    {
        "id": "fc_chm_03",
        "subject": "Chemistry",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "front": "What is the key structural requirement for: (1) Aldol Condensation, (2) Cannizzaro Reaction, (3) Iodoform Test?",
        "back": "1. Aldol: Aldehyde/ketone must contain at least ONE alpha-hydrogen.\n2. Cannizzaro: Aldehyde must have NO alpha-hydrogen (e.g. HCHO, PhCHO).\n3. Iodoform (Haloform): Compound must contain CH3-C=O or CH3-CH(OH)- group.",
        "tag": "Organic Reactions",
        "ncertRef": "NCERT Class 12, p. 367-372"
    },
    {
        "id": "fc_chm_04",
        "subject": "Chemistry",
        "chapter": "Solutions",
        "front": "What is the van 't Hoff factor (i) formula for: (a) Degree of dissociation (alpha), (b) Degree of association (beta)?",
        "back": "(a) Dissociation: i = 1 + (n - 1) * alpha  ==>  alpha = (i - 1) / (n - 1)\n(b) Association: i = 1 + (1/n - 1) * beta  ==>  beta = (1 - i) / (1 - 1/n)",
        "tag": "Physical Numericals",
        "ncertRef": "NCERT Class 12, p. 55"
    },
    {
        "id": "fc_phy_01",
        "subject": "Physics",
        "chapter": "Current Electricity",
        "front": "State Kirchhoff's Current Law (KCL) and Voltage Law (KVL) and the fundamental conservation laws they obey.",
        "back": "\u2022 KCL (Junction rule): Sum of currents entering a junction equals sum leaving. Based on CONSERVATION OF CHARGE.\n\u2022 KVL (Loop rule): Algebraic sum of changes in potential around any closed loop is zero. Based on CONSERVATION OF ENERGY.",
        "tag": "Physics Fundamentals",
        "ncertRef": "NCERT Class 12, p. 115"
    },
    {
        "id": "fc_phy_02",
        "subject": "Physics",
        "chapter": "Ray Optics & Optical Instruments",
        "front": "Write the Lens Maker's Formula and how does focal length change when a glass convex lens (n = 1.5) is immersed in water (n = 1.33)?",
        "back": "Lens Maker: 1/f = (n_lens/n_med - 1)*(1/R1 - 1/R2)\nIn air: (1.5 - 1) = 0.5\nIn water: (1.5/1.333 - 1) = 0.125 = 1/8\nRatio = 0.5 / 0.125 = 4 times. Focal length in water is 4x its focal length in air (f_water = 4 * f_air).",
        "tag": "Numerical Shortcut",
        "ncertRef": "NCERT Class 12, p. 326"
    },
    {
        "id": "fc_phy_03",
        "subject": "Physics",
        "chapter": "Dual Nature of Radiation & Matter",
        "front": "State Einstein's Photoelectric Equation and identify what the slope and y-intercept represent in a graph of stopping potential (V0) vs frequency (nu).",
        "back": "Equation: e * V0 = h * nu - phi_0  ==>  V0 = (h/e)*nu - (phi_0/e)\n\u2022 Slope = (h / e) [Universal constant for all metals]\n\u2022 x-intercept = Threshold frequency (nu_0)\n\u2022 y-intercept = - (phi_0 / e)",
        "tag": "Graph Mastery",
        "ncertRef": "NCERT Class 12, p. 394"
    },
    {
        "id": "fc_phy_04",
        "subject": "Physics",
        "chapter": "Semiconductor Electronics",
        "front": "What are majority and minority carriers in p-type and n-type semiconductors, and which dopant elements create each?",
        "back": "\u2022 n-type: Pentavalent dopants (P, As, Sb). Majority = Electrons, Minority = Holes.\n\u2022 p-type: Trivalent dopants (B, Al, In). Majority = Holes, Minority = Electrons.\nCrucial rule: Both p-type and n-type semiconductors are overall electrically NEUTRAL!",
        "tag": "Conceptual Trap",
        "ncertRef": "NCERT Class 12, p. 475"
    }
],
    questions: [
    {
        "id": "q_bio_01",
        "subject": "Botany",
        "section": "A",
        "chapter": "Molecular Basis of Inheritance",
        "text": "If a double stranded DNA molecule has 20% of cytosine, what will be the percentage of adenine in it?",
        "options": [
            "20%",
            "30%",
            "40%",
            "60%"
        ],
        "correct": 1,
        "explanation": "According to Chargaff's rules: G = C = 20%. Therefore G + C = 40%. The remaining A + T = 60%. Since A = T, Adenine = 60% / 2 = 30%."
    },
    {
        "id": "q_bio_02",
        "subject": "Botany",
        "section": "A",
        "chapter": "Biological Classification",
        "text": "Which of the following organisms are known as chief producers in the oceans and possess indestructible cell walls embedded with silica?",
        "options": [
            "Dinoflagellates",
            "Diatoms (Chrysophytes)",
            "Euglenoids",
            "Cyanobacteria"
        ],
        "correct": 1,
        "explanation": "NCERT Class 11 p. 20: Diatoms are the chief producers in the oceans with overlapping silica walls forming diatomaceous earth."
    },
    {
        "id": "q_bio_03",
        "subject": "Botany",
        "section": "A",
        "chapter": "Cell: The Unit of Life",
        "text": "The complex formed by a pair of synapsed homologous chromosomes during meiosis is called:",
        "options": [
            "Kinetochore",
            "Centrosome",
            "Bivalent or Tetrad",
            "Axoneme"
        ],
        "correct": 2,
        "explanation": "NCERT Class 11 p. 168: During zygotene, synapsed homologous chromosomes form a bivalent or tetrad."
    },
    {
        "id": "q_bio_04",
        "subject": "Botany",
        "section": "B",
        "chapter": "Photosynthesis in Higher Plants",
        "text": "In C4 pathway, the primary CO2 acceptor and the enzyme responsible for initial fixation in mesophyll cells are respectively:",
        "options": [
            "RuBP and RuBisCO",
            "PEP and PEP carboxylase",
            "PGA and Carbonic anhydrase",
            "OAA and Malate dehydrogenase"
        ],
        "correct": 1,
        "explanation": "NCERT Class 11 p. 218: Primary CO2 acceptor in mesophyll cells is Phosphoenolpyruvate (PEP, 3C) and enzyme is PEP carboxylase."
    },
    {
        "id": "q_bio_05",
        "subject": "Botany",
        "section": "B",
        "chapter": "Principles of Inheritance and Variation",
        "text": "A cross between a true-breeding red-flowered and a true-breeding white-flowered Snapdragon plant produces all pink offspring (F1). In F2, the phenotypic and genotypic ratios will be:",
        "options": [
            "3:1 and 1:2:1",
            "1:2:1 and 1:2:1",
            "9:3:3:1 and 1:2:1",
            "3:1 and 3:1"
        ],
        "correct": 1,
        "explanation": "NCERT Class 12 p. 76: Incomplete dominance yields identical 1:2:1 phenotypic and genotypic ratios."
    },
    {
        "id": "q_zoo_01",
        "subject": "Zoology",
        "section": "A",
        "chapter": "Human Reproduction",
        "text": "Which hormone acts on the Sertoli cells of male testes to stimulate the secretion of factors which help in the process of spermiogenesis?",
        "options": [
            "Luteinizing Hormone (LH)",
            "Follicle Stimulating Hormone (FSH)",
            "Adrenocorticotropic Hormone (ACTH)",
            "Prolactin"
        ],
        "correct": 1,
        "explanation": "NCERT Class 12 p. 47: LH acts at Leydig cells for androgens; FSH acts on Sertoli cells to support spermiogenesis."
    },
    {
        "id": "q_zoo_02",
        "subject": "Zoology",
        "section": "A",
        "chapter": "Body Fluids and Circulation",
        "text": "In a standard human Electrocardiogram (ECG), the end of the T-wave marks:",
        "options": [
            "Beginning of atrial systole",
            "End of ventricular systole",
            "Beginning of ventricular depolarization",
            "Atrial repolarization"
        ],
        "correct": 1,
        "explanation": "NCERT Class 11 p. 286: T-wave represents ventricular repolarisation; its end marks the end of ventricular systole."
    },
    {
        "id": "q_zoo_03",
        "subject": "Zoology",
        "section": "A",
        "chapter": "Breathing and Exchange of Gases",
        "text": "Which of the following factors causes a shift of the Oxygen-Haemoglobin dissociation curve to the RIGHT (Bohr effect)?",
        "options": [
            "High pO2 and Low pCO2",
            "Low H+ concentration and Low temperature",
            "High pCO2, High H+ (low pH), and High temperature",
            "High pH and Low 2,3-DPG"
        ],
        "correct": 2,
        "explanation": "NCERT Class 11 p. 274: High pCO2, high H+ (acidity), and elevated temperature favor O2 dissociation (shift right)."
    },
    {
        "id": "q_zoo_04",
        "subject": "Zoology",
        "section": "B",
        "chapter": "Animal Kingdom",
        "text": "Which one of the following phyla exhibits true metameric segmentation, bilateral symmetry, closed circulatory system, and possesses nephridia for excretion?",
        "options": [
            "Platyhelminthes",
            "Aschelminthes",
            "Annelida",
            "Arthropoda"
        ],
        "correct": 2,
        "explanation": "NCERT Class 11 p. 52: Annelids (Earthworm, Nereis) possess true metameric segmentation and nephridia."
    },
    {
        "id": "q_zoo_05",
        "subject": "Zoology",
        "section": "B",
        "chapter": "Human Health and Disease",
        "text": "The antibody present in colostrum (yellowish fluid secreted during initial days of lactation) that provides natural passive immunity to newborns is:",
        "options": [
            "IgG",
            "IgA",
            "IgM",
            "IgE"
        ],
        "correct": 1,
        "explanation": "NCERT Class 12 p. 152: Colostrum contains secretory IgA, conferring essential passive immunity to newborns."
    },
    {
        "id": "q_chm_01",
        "subject": "Chemistry",
        "section": "A",
        "chapter": "Chemical Bonding & Molecular Structure",
        "text": "According to Molecular Orbital Theory (MOT), which of the following diatomic species is diamagnetic and has a bond order equal to 3?",
        "options": [
            "O2",
            "B2",
            "N2",
            "C2"
        ],
        "correct": 2,
        "explanation": "N2 (14 e-): Bond order = (10 - 4)/2 = 3. All electrons are paired, making N2 diamagnetic."
    },
    {
        "id": "q_chm_02",
        "subject": "Chemistry",
        "section": "A",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "text": "When benzaldehyde is treated with 50% concentrated aqueous NaOH, benzyl alcohol and sodium benzoate are formed. This reaction is known as:",
        "options": [
            "Aldol condensation",
            "Cannizzaro reaction",
            "Clemmensen reduction",
            "Reimer-Tiemann reaction"
        ],
        "correct": 1,
        "explanation": "NCERT Class 12 p. 371: Benzaldehyde lacks alpha-hydrogens, undergoing disproportionation (Cannizzaro reaction)."
    },
    {
        "id": "q_chm_03",
        "subject": "Chemistry",
        "section": "A",
        "chapter": "Solutions",
        "text": "A 5% (w/v) solution of cane sugar (molar mass = 342 g/mol) is isotonic with a 1% (w/v) solution of an unknown solute X. What is the molar mass of solute X?",
        "options": [
            "34.2 g/mol",
            "68.4 g/mol",
            "171.0 g/mol",
            "136.8 g/mol"
        ],
        "correct": 1,
        "explanation": "Isotonic: C1 = C2  ==>  50/342 = 10/M  ==>  M = 342/5 = 68.4 g/mol."
    },
    {
        "id": "q_chm_04",
        "subject": "Chemistry",
        "section": "A",
        "chapter": "The d- and f-Block Elements",
        "text": "Which of the following 3d transition metal ions exhibits highest magnetic moment in spin-only formula?",
        "options": [
            "Ti3+ (3d1)",
            "Cr3+ (3d3)",
            "Fe3+ (3d5)",
            "Ni2+ (3d8)"
        ],
        "correct": 2,
        "explanation": "Fe3+ has 5 unpaired electrons (3d5). Spin-only magnetic moment = sqrt(5*7) = 5.92 BM, the maximum among 3d ions."
    },
    {
        "id": "q_chm_05",
        "subject": "Chemistry",
        "section": "B",
        "chapter": "Chemical Kinetics",
        "text": "For a first order reaction, the rate constant k is 2.303 x 10^-3 s^-1. The time required for 90% completion of this reaction is:",
        "options": [
            "100 s",
            "500 s",
            "1000 s",
            "2303 s"
        ],
        "correct": 2,
        "explanation": "t = (2.303/k)*log10(100/10) = (2.303 / 2.303e-3)*1 = 1000 seconds."
    },
    {
        "id": "q_phy_01",
        "subject": "Physics",
        "section": "A",
        "chapter": "Current Electricity",
        "text": "A wire of resistance 16 Ohm is melted and drawn into a wire of half its original length. What is the new resistance of the wire?",
        "options": [
            "64 Ohm",
            "32 Ohm",
            "8 Ohm",
            "4 Ohm"
        ],
        "correct": 3,
        "explanation": "Constant volume: L' = L/2 => A' = 2A. R' = rho*(L/2)/(2A) = R/4 = 16/4 = 4 Ohm."
    },
    {
        "id": "q_phy_02",
        "subject": "Physics",
        "section": "A",
        "chapter": "Motion in a Straight Line",
        "text": "A ball is dropped from a height h above the ground. If it takes t1 to fall the first half and t2 for the second half, then t1 / t2 is:",
        "options": [
            "1",
            "1 / (sqrt(2) - 1)",
            "sqrt(2) - 1",
            "1 / (sqrt(2) + 1)"
        ],
        "correct": 1,
        "explanation": "t1 = sqrt(h/g). Total time t1+t2 = sqrt(2h/g) = sqrt(2)*t1. t2 = (sqrt(2)-1)*t1. Thus t1/t2 = 1/(sqrt(2)-1) = sqrt(2)+1."
    },
    {
        "id": "q_phy_03",
        "subject": "Physics",
        "section": "A",
        "chapter": "Ray Optics & Optical Instruments",
        "text": "A convex lens of refractive index 1.5 has focal length 20 cm in air. When completely immersed in water (n = 4/3), its new focal length is:",
        "options": [
            "20 cm",
            "40 cm",
            "80 cm",
            "10 cm"
        ],
        "correct": 2,
        "explanation": "Lens maker: 1/f_air = (1.5-1)*K = 0.5*K => K = 1/10. In water: 1/f_water = (1.5/(4/3) - 1)*K = (1/8)*(1/10) = 1/80 => f = 80 cm."
    },
    {
        "id": "q_phy_04",
        "subject": "Physics",
        "section": "B",
        "chapter": "Semiconductor Electronics",
        "text": "In an unbiased p-n junction diode at equilibrium, the net current across the junction is zero because:",
        "options": [
            "Diffusion current and drift current are equal in magnitude and opposite in direction",
            "No charge carriers cross the depletion barrier",
            "Electric field in the depletion layer is zero",
            "Potential barrier prevents both drift and diffusion"
        ],
        "correct": 0,
        "explanation": "NCERT Class 12 p. 479: At equilibrium with zero bias, diffusion current and drift current are exactly equal and opposite."
    },
    {
        "id": "q_phy_05",
        "subject": "Physics",
        "section": "B",
        "chapter": "Dual Nature of Radiation & Matter",
        "text": "The de Broglie wavelength of an electron accelerated from rest through a potential difference of 100 Volts is approximately:",
        "options": [
            "1.227 nm",
            "0.1227 nm",
            "12.27 nm",
            "0.01227 nm"
        ],
        "correct": 1,
        "explanation": "lambda = 1.227 / sqrt(V) nm = 1.227 / 10 nm = 0.1227 nm (or 1.227 Angstrom)."
    }
],
    roadmap90: [
    {
        "week": 1,
        "phase": "Foundations",
        "physics": "Units & Measurements + Motion in 1D",
        "chem": "Basic Concepts (Mole Concept)",
        "bio": "Living World + Biological Classification",
        "targetQs": 1100
    },
    {
        "week": 2,
        "phase": "Kinematics & Structure",
        "physics": "Motion in a Plane (Vectors & Projectile)",
        "chem": "Structure of Atom",
        "bio": "Plant Kingdom",
        "targetQs": 1150
    },
    {
        "week": 3,
        "phase": "Mechanics I",
        "physics": "Laws of Motion (Friction & Pulleys)",
        "chem": "Classification & Periodic Trends",
        "bio": "Animal Kingdom (Non-Chordates)",
        "targetQs": 1200
    },
    {
        "week": 4,
        "phase": "Mechanics II & Bonding",
        "physics": "Work, Energy and Power",
        "chem": "Chemical Bonding & Molecular Structure",
        "bio": "Animal Kingdom (Chordates) + Revision",
        "targetQs": 1250
    },
    {
        "week": 5,
        "phase": "Rotational & Thermochem",
        "physics": "System of Particles & Rotational Motion",
        "chem": "Chemical Thermodynamics",
        "bio": "Morphology of Flowering Plants",
        "targetQs": 1250
    },
    {
        "week": 6,
        "phase": "Gravitation & Equilibrium",
        "physics": "Gravitation + Properties of Solids",
        "chem": "Equilibrium (Chemical & Ionic)",
        "bio": "Anatomy of Flowering Plants",
        "targetQs": 1300
    },
    {
        "week": 7,
        "phase": "Fluids & Redox",
        "physics": "Properties of Fluids",
        "chem": "Redox Reactions",
        "bio": "Cell: The Unit of Life",
        "targetQs": 1200
    },
    {
        "week": 8,
        "phase": "Thermal & GOC",
        "physics": "Thermal Properties + Thermodynamics",
        "chem": "Organic: Basic Principles (GOC)",
        "bio": "Biomolecules + Cell Cycle",
        "targetQs": 1350
    },
    {
        "week": 9,
        "phase": "KTG & Hydrocarbons",
        "physics": "Kinetic Theory of Gases",
        "chem": "Hydrocarbons (Alkanes, Alkenes, Alkynes)",
        "bio": "Structural Org in Animals (Frog)",
        "targetQs": 1250
    },
    {
        "week": 10,
        "phase": "Oscillations & Plant Phys I",
        "physics": "Oscillations (SHM)",
        "chem": "Organic Reaction Mechanisms Drill",
        "bio": "Photosynthesis in Higher Plants",
        "targetQs": 1200
    },
    {
        "week": 11,
        "phase": "Waves & Plant Phys II",
        "physics": "Waves (Sound & Standing waves)",
        "chem": "Class 11 Physical Chem Rapid Drill",
        "bio": "Respiration + Plant Growth",
        "targetQs": 1250
    },
    {
        "week": 12,
        "phase": "Human Phys I",
        "physics": "Class 11 High-Weight Mechanics Review",
        "chem": "GOC Isomerism & Acidity/Basicity",
        "bio": "Breathing + Body Fluids",
        "targetQs": 1300
    },
    {
        "week": 13,
        "phase": "Final Sprint & Full Mocks",
        "physics": "Full Class 11 Physics Formula Drill",
        "chem": "Class 11 Inorganic & Physical Formulae",
        "bio": "Excretory, Locomotion, Neural, Endocrine",
        "targetQs": 1400
    }
],
    roadmap15m: [
    {
        "phase": 1,
        "title": "Class 11 Mastery Sprint",
        "duration": "Months 1 - 3 (90 Days)",
        "goal": "Complete entire Class 11 rationalized syllabus with 15,000+ question drills and baseline mock tests."
    },
    {
        "phase": 2,
        "title": "Class 12 Core Build",
        "duration": "Months 4 - 8 (150 Days)",
        "goal": "Complete Class 12 boards + NEET syllabus in tandem. Dual focus on NCERT line-by-line active recall and high-weightage topics."
    },
    {
        "phase": 3,
        "title": "First Full Revision & Interleaving",
        "duration": "Months 9 - 10 (60 Days)",
        "goal": "Interleave Class 11 and Class 12 chapters. Identify conceptual error patterns in error notebook. 2 full mocks per week."
    },
    {
        "phase": 4,
        "title": "Targeted Score Booster (AIR < 1000 Drill)",
        "duration": "Months 11 - 12 (60 Days)",
        "goal": "Strict negative marking control (-1 penalty minimization). Daily 200-minute timed mock tests between 2:00 PM and 5:20 PM."
    },
    {
        "phase": 5,
        "title": "Exam Day Peak & AIIMS Delhi Sprint",
        "duration": "Months 13 - 15 (Final 90 Days)",
        "goal": "Daily NTA standard mocks, rapid Anki review (300+ cards/day), NCERT verbatim biology lines, final formula book memorization."
    }
],
    stats: {
        totalChapters: 98,
        totalTargetQs: 30850,
        physicsChapters: 30,
        chemistryChapters: 30,
        biologyChapters: 38,
        nmcRationalizedCore: 79,
        databaseFile: "neet_questions.db"
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = NEET_DATA;
}
