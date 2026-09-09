window.TCCC_TIERS = {
  "1": {
    "id": "1",
    "shortName": "TTA",
    "name": "Tactical Trauma Assessment — Study 28-Point",
    "subtitle": "Longitudinal Nurse Competency Study",
    "source": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation",
    "instructions": "Study scoring: grade all 28 MARCH-PAWS criteria using direct observation. Overall study score is PASS ÷ (PASS + FAIL), with NT excluded. Study threshold = 80%. Critical-task completion is tracked separately as 19/19 and does not silently override the study percentage; evaluators should review any critical failure during study adjudication. N/O remains unresolved until adjudicated.",
    "ratings": [
      {
        "key": "pass",
        "label": "PASS"
      },
      {
        "key": "fail",
        "label": "FAIL"
      },
      {
        "key": "nt",
        "label": "NT"
      },
      {
        "key": "no",
        "label": "N/O"
      }
    ],
    "passRule": "study_80_percent_track_critical_separately",
    "minimumScore": 0.8,
    "requireAllCritical": false,
    "proficiencyLabel": "Study TTA Threshold Met",
    "attempts": [
      "1st",
      "2nd"
    ],
    "sections": [
      {
        "code": "M",
        "title": "M — Assessed and Treated Massive Hemorrhage",
        "items": [
          {
            "id": "TTA-01",
            "text": "Performed blood sweep of: Neck, Axillary, Inguinal, and Extremities",
            "critical": true,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          },
          {
            "id": "TTA-02",
            "text": "Assessed effectiveness of TQs placed in CUF; if ineffective, applied deliberate TQ",
            "critical": true,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          },
          {
            "id": "TTA-03",
            "text": "Applied TQ directly to skin, 2–3 inches above bleed site",
            "critical": true,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          },
          {
            "id": "TTA-04",
            "text": "Packed any wounds not amenable to TQs with hemostatic agent (held pressure for 3 minutes) and applied pressure bandages",
            "critical": false,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          }
        ]
      },
      {
        "code": "A",
        "title": "A — Assessed and Secured the Airway",
        "items": [
          {
            "id": "TTA-05",
            "text": "Used head-tilt/chin-lift or jaw-thrust maneuver to open airway, if needed",
            "critical": true,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          },
          {
            "id": "TTA-06",
            "text": "Inserted nasopharyngeal airway (NPA) in an unconscious or semiconscious casualty",
            "critical": false,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          },
          {
            "id": "TTA-07",
            "text": "Cleared excess secretions using manual or mechanical suctioning, if indicated",
            "critical": false,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          }
        ]
      },
      {
        "code": "R",
        "title": "R — Assessed Respirations",
        "items": [
          {
            "id": "TTA-08",
            "text": "Inspected for torso wounds (front and back)",
            "critical": true,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          },
          {
            "id": "TTA-09",
            "text": "Assessed breathing and initiated pulse oximetry, if available",
            "critical": true,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          },
          {
            "id": "TTA-10",
            "text": "Assessed for signs of tension pneumothorax (PTX). If present, burped and/or removed and reapplied any chest seal previously placed. If present without chest seal, or if chest-seal burp did not resolve tension PTX signs, performed needle decompression of the chest (NDC). Reassessed to confirm NDC was successful.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          },
          {
            "id": "TTA-11",
            "text": "Applied a vented chest seal to all open chest wound(s)",
            "critical": false,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          }
        ]
      },
      {
        "code": "C",
        "title": "C — Assessed Circulation",
        "items": [
          {
            "id": "TTA-12",
            "text": "Assessed for signs of pelvic fracture",
            "critical": true,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          },
          {
            "id": "TTA-13",
            "text": "Exposed wounds/reassessed prior hemorrhage control and determined if TQs were still needed. Replaced high-and-tight TQ with deliberate TQ 2–3 inches above wound directly on skin if still indicated; if not required, converted to wound packing and pressure bandage; exposed and clearly marked all TQs with application time.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          },
          {
            "id": "TTA-14",
            "text": "Assessed for hemorrhagic shock (checked radial pulses; carotid, if absent)",
            "critical": true,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          },
          {
            "id": "TTA-15",
            "text": "Inserted saline lock for shock or significant injuries with radial pulses",
            "critical": false,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          },
          {
            "id": "TTA-16",
            "text": "Administered Blood Products (see separate checklist for steps)",
            "critical": true,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          }
        ]
      },
      {
        "code": "H",
        "title": "H — Hypothermia Treatment and Prevention / Head Injury",
        "items": [
          {
            "id": "TTA-17",
            "text": "Minimized casualty exposure to the environment",
            "critical": true,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          },
          {
            "id": "TTA-18",
            "text": "Employed active warming measures, if available",
            "critical": true,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          },
          {
            "id": "TTA-19",
            "text": "Assessed for head injury (altered mental status, wounds, visual changes)",
            "critical": true,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          },
          {
            "id": "TTA-20",
            "text": "Prevented secondary head injury by treating hypoxia and hypotension",
            "critical": false,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          },
          {
            "id": "TTA-21",
            "text": "Assessed for eye trauma; if present, performed a visual acuity test and covered eye injury(ies) with rigid eye shield(s)",
            "critical": true,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          }
        ]
      },
      {
        "code": "P",
        "title": "P — Controlled Pain",
        "items": [
          {
            "id": "TTA-22",
            "text": "Checked for drug allergies",
            "critical": true,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          },
          {
            "id": "TTA-23",
            "text": "Disarmed casualty before administering medication(s) that alter mental status",
            "critical": true,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          },
          {
            "id": "TTA-24",
            "text": "Administered pain medication: medications from CWMP for casualty who can swallow; for mild-to-moderate pain without shock/respiratory distress, oral transmucosal fentanyl citrate; for moderate-to-severe pain or shock/respiratory distress, ketamine",
            "critical": false,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          }
        ]
      },
      {
        "code": "ABX",
        "title": "A — Administered Antibiotics",
        "items": [
          {
            "id": "TTA-25",
            "text": "Checked for drug allergies",
            "critical": true,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          },
          {
            "id": "TTA-26",
            "text": "Administered antibiotics: from the CWMP for casualty who can swallow; administered ertapenem if casualty was unable to take oral medications",
            "critical": false,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          }
        ]
      },
      {
        "code": "W",
        "title": "W — Treated Additional Wounds",
        "items": [
          {
            "id": "TTA-27",
            "text": "Inspected and dressed known wounds: abdominal evisceration, amputation stumps, burns with dry sterile dressings, and impaled objects secured in place as indicated",
            "critical": true,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          }
        ]
      },
      {
        "code": "S",
        "title": "S — Splinted Fractures",
        "items": [
          {
            "id": "TTA-28",
            "text": "Splinted any fractures without disrupting any impaled objects",
            "critical": true,
            "provenance": "source",
            "sourceReference": "Study 28-point TCCC Trauma Assessment (MARCH-PAWS) checklist · adapted from CoTCCC Module 5 (2023); CMC 30 MAY 26 used for validation"
          }
        ]
      }
    ],
    "timers": [
      {
        "id": "tta_wound_pressure",
        "section": "M",
        "label": "Wound Packing Pressure",
        "mode": "min",
        "seconds": 180,
        "standard": "≥ 3:00",
        "startLabel": "START PRESSURE",
        "stopLabel": "RELEASE PRESSURE",
        "provenance": "source",
        "linkedItemId": "TTA-04",
        "requiredForPass": true,
        "repeatable": true,
        "timerKind": "clinical",
        "pausePolicy": "tactical-and-admin",
        "resetPolicy": "new-instance",
        "continuousRequired": true,
        "gradingClock": "continuous"
      }
    ],
    "instantEvents": [],
    "sourceItemCount": 28,
    "dafItemCount": 0
  },
  "2": {
    "id": "2",
    "shortName": "TQ",
    "name": "Two-Handed Windlass Tourniquet Application",
    "subtitle": "Individual Skill — Massive Hemorrhage Control",
    "source": "TCCC-CMC-12-01 · Module 6 Massive Hemorrhage Control in TFC · 16 NOV 20 · pp. 1–2",
    "instructions": "Use only the selected TQ source pages (pp. 1–2). Grade each observable performance step. Source proficiency requires PASS on all critical tasks marked C. N/O remains unresolved. NT should be used only when a noncritical step is genuinely not triggered by the standardized lane.",
    "ratings": [
      {
        "key": "pass",
        "label": "PASS"
      },
      {
        "key": "fail",
        "label": "FAIL"
      },
      {
        "key": "nt",
        "label": "NT"
      },
      {
        "key": "no",
        "label": "N/O"
      }
    ],
    "passRule": "all_critical",
    "minimumScore": 0.0,
    "requireAllCritical": true,
    "proficiencyLabel": "Demonstrated TQ Proficiency",
    "attempts": [
      "1st",
      "2nd"
    ],
    "sections": [
      {
        "code": "TQ",
        "title": "TWO-HANDED (WINDLASS) TOURNIQUET APPLICATION IN TFC",
        "items": [
          {
            "id": "TQ-01",
            "text": "Considered body substance isolation.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 6 Massive Hemorrhage Control in TFC · 16 NOV 20 · pp. 1–2"
          },
          {
            "id": "TQ-02",
            "text": "Exposed the injury and assessed the bleeding site.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 6 Massive Hemorrhage Control in TFC · 16 NOV 20 · pp. 1–2"
          },
          {
            "id": "TQ-03",
            "text": "Applied direct pressure to control bleeding while preparing to apply tourniquet.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 6 Massive Hemorrhage Control in TFC · 16 NOV 20 · pp. 1–2"
          },
          {
            "id": "TQ-04",
            "text": "Removed the tourniquet from the casualty’s Joint First Aid Kit (JFAK) and/or carrying pouch.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 6 Massive Hemorrhage Control in TFC · 16 NOV 20 · pp. 1–2"
          },
          {
            "id": "TQ-05",
            "text": "Inserted the wounded extremity in the loop of the self-adhering band (looped) or routed the band around the limb and passed the band tip through the slit of the buckle.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 6 Massive Hemorrhage Control in TFC · 16 NOV 20 · pp. 1–2"
          },
          {
            "id": "TQ-06",
            "text": "Positioned the tourniquet about 2–3 inches above the wound and directly on the skin.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 6 Massive Hemorrhage Control in TFC · 16 NOV 20 · pp. 1–2"
          },
          {
            "id": "TQ-07",
            "text": "Pulled self-adhering band until all slack was removed and it was tight around the extremity.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 6 Massive Hemorrhage Control in TFC · 16 NOV 20 · pp. 1–2"
          },
          {
            "id": "TQ-08",
            "text": "Fastened the band back on itself all the way around the limb (but not over the windlass rod clips).",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 6 Massive Hemorrhage Control in TFC · 16 NOV 20 · pp. 1–2"
          },
          {
            "id": "TQ-09",
            "text": "Twisted the windlass rod until bleeding stopped.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 6 Massive Hemorrhage Control in TFC · 16 NOV 20 · pp. 1–2"
          },
          {
            "id": "TQ-10",
            "text": "Completed steps 1–7 within 1 minute.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 6 Massive Hemorrhage Control in TFC · 16 NOV 20 · pp. 1–2"
          },
          {
            "id": "TQ-11",
            "text": "Locked the windlass rod in place with the windlass clip.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 6 Massive Hemorrhage Control in TFC · 16 NOV 20 · pp. 1–2"
          },
          {
            "id": "TQ-12",
            "text": "Routed the self-adhering band around the rod and between the clips.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 6 Massive Hemorrhage Control in TFC · 16 NOV 20 · pp. 1–2"
          },
          {
            "id": "TQ-13",
            "text": "Secured with the windlass safety strap.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 6 Massive Hemorrhage Control in TFC · 16 NOV 20 · pp. 1–2"
          },
          {
            "id": "TQ-14",
            "text": "Documented the time of tourniquet application on the windlass safety strap (or the casualty’s forehead), completing the process within 3 minutes.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 6 Massive Hemorrhage Control in TFC · 16 NOV 20 · pp. 1–2"
          },
          {
            "id": "TQ-15",
            "text": "Documented all findings and treatments on a DD Form 1380 TCCC Casualty Card and attached it to the casualty.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 6 Massive Hemorrhage Control in TFC · 16 NOV 20 · pp. 1–2"
          }
        ]
      }
    ],
    "timers": [
      {
        "id": "tq_one_min",
        "section": "TQ",
        "label": "Tourniquet Application — 1 Minute Standard",
        "mode": "max",
        "seconds": 60,
        "standard": "≤ 1:00",
        "startLabel": "START",
        "stopLabel": "STEP 7 COMPLETE",
        "provenance": "source",
        "linkedItemId": "TQ-10",
        "requiredForPass": true,
        "repeatable": true,
        "timerKind": "clinical",
        "pausePolicy": "tactical-and-admin",
        "resetPolicy": "new-instance",
        "continuousRequired": false,
        "gradingClock": "wall"
      },
      {
        "id": "tq_three_min",
        "section": "TQ",
        "label": "Complete / Document Application",
        "mode": "max",
        "seconds": 180,
        "standard": "≤ 3:00",
        "startLabel": "START",
        "stopLabel": "DOCUMENTED",
        "provenance": "source",
        "linkedItemId": "TQ-14",
        "requiredForPass": true,
        "repeatable": true,
        "timerKind": "clinical",
        "pausePolicy": "tactical-and-admin",
        "resetPolicy": "new-instance",
        "continuousRequired": false,
        "gradingClock": "wall"
      }
    ],
    "instantEvents": [],
    "sourceItemCount": 15,
    "dafItemCount": 0
  },
  "3": {
    "id": "3",
    "shortName": "NPA",
    "name": "Nasopharyngeal Airway Insertion",
    "subtitle": "Individual Skill — Airway",
    "source": "TCCC-CMC-12-01 · Module 7 Airway Management in TFC · 23 SEP 21 · p. 4",
    "instructions": "Use only Airway Module 7 page 4. Grade the NPA insertion performance steps as written. Source proficiency requires PASS on every critical task marked C.",
    "ratings": [
      {
        "key": "pass",
        "label": "PASS"
      },
      {
        "key": "fail",
        "label": "FAIL"
      },
      {
        "key": "nt",
        "label": "NT"
      },
      {
        "key": "no",
        "label": "N/O"
      }
    ],
    "passRule": "all_critical",
    "minimumScore": 0.0,
    "requireAllCritical": true,
    "proficiencyLabel": "Demonstrated NPA Proficiency",
    "attempts": [
      "1st",
      "2nd"
    ],
    "sections": [
      {
        "code": "NPA",
        "title": "NASOPHARYNGEAL AIRWAY (NPA) INSERTION",
        "items": [
          {
            "id": "NPA-01",
            "text": "Considered body substance isolation.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 7 Airway Management in TFC · 23 SEP 21 · p. 4"
          },
          {
            "id": "NPA-02",
            "text": "Placed the casualty supine with their head in a neutral position.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 7 Airway Management in TFC · 23 SEP 21 · p. 4"
          },
          {
            "id": "NPA-03",
            "text": "Inspected the nose and nasal passages for any obstructions that would prevent insertion of an NPA.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 7 Airway Management in TFC · 23 SEP 21 · p. 4"
          },
          {
            "id": "NPA-04",
            "text": "Opened the NPA package provided in the casualty’s Joint First Aid Kit (JFAK).",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 7 Airway Management in TFC · 23 SEP 21 · p. 4"
          },
          {
            "id": "NPA-05",
            "text": "Lubricated the end of the NPA device with sterile water-based lubricating jelly found in the JFAK, with water, or with the casualty’s saliva.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 7 Airway Management in TFC · 23 SEP 21 · p. 4"
          },
          {
            "id": "NPA-06",
            "text": "Exposed the opening of the casualty’s right nostril by gently pushing the tip of the nose upward.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 7 Airway Management in TFC · 23 SEP 21 · p. 4"
          },
          {
            "id": "NPA-07",
            "text": "Positioned the tube so that the bevel of the device faced toward the septum.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 7 Airway Management in TFC · 23 SEP 21 · p. 4"
          },
          {
            "id": "NPA-08",
            "text": "Inserted the NPA device into the right nostril at a 90-degree angle to the casualty’s face with the beveled tip pointed toward the middle of the nose.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 7 Airway Management in TFC · 23 SEP 21 · p. 4"
          },
          {
            "id": "NPA-09",
            "text": "Advanced the NPA until the flange was flush with the nostril using a fluid movement pushing toward the ground and not toward the top of the head.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 7 Airway Management in TFC · 23 SEP 21 · p. 4"
          },
          {
            "id": "NPA-10",
            "text": "If insertion was unsuccessful, pulled the NPA completely out and inserted it in the left nostril, rotating the NPA after it was approximately 2 inches into the casualty’s nose to maintain the downward orientation of the NPA curve.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 7 Airway Management in TFC · 23 SEP 21 · p. 4"
          },
          {
            "id": "NPA-11",
            "text": "Reassessed breathing and respiration using the look, listen, and feel technique to assess for air movement after the NPA was inserted.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 7 Airway Management in TFC · 23 SEP 21 · p. 4"
          },
          {
            "id": "NPA-12",
            "text": "Positioned the casualty: awake casualty in a sitting or recovery position (whichever is more comfortable); unconscious casualty in the recovery position to prevent aspiration of blood, mucus, or vomit.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 7 Airway Management in TFC · 23 SEP 21 · p. 4"
          },
          {
            "id": "NPA-13",
            "text": "Documented all findings and treatments on a DD Form 1380 TCCC Casualty Card and attached it to the casualty.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 7 Airway Management in TFC · 23 SEP 21 · p. 4"
          }
        ]
      }
    ],
    "timers": [],
    "instantEvents": [],
    "sourceItemCount": 13,
    "dafItemCount": 0
  },
  "4": {
    "id": "4",
    "shortName": "NDC",
    "name": "Needle Decompression of the Chest",
    "subtitle": "Individual Skill — Respiration",
    "source": "TCCC-CMC-12-01 · Module 8 Respiration Assessment and Management in TFC · 16 NOV 20 · pp. 3–4",
    "instructions": "Use only Respiration Module 8 pages 3–4. Grade each NDC performance step. Source proficiency requires PASS on every critical task marked C. The 5–10 second decompression hold is captured with the linked timer.",
    "ratings": [
      {
        "key": "pass",
        "label": "PASS"
      },
      {
        "key": "fail",
        "label": "FAIL"
      },
      {
        "key": "nt",
        "label": "NT"
      },
      {
        "key": "no",
        "label": "N/O"
      }
    ],
    "passRule": "all_critical",
    "minimumScore": 0.0,
    "requireAllCritical": true,
    "proficiencyLabel": "Demonstrated NDC Proficiency",
    "attempts": [
      "1st",
      "2nd"
    ],
    "sections": [
      {
        "code": "NDC",
        "title": "NEEDLE DECOMPRESSION OF THE CHEST (NDC)",
        "items": [
          {
            "id": "NDC-01",
            "text": "Considered body substance isolation.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 8 Respiration Assessment and Management in TFC · 16 NOV 20 · pp. 3–4"
          },
          {
            "id": "NDC-02",
            "text": "Assessed the casualty for signs of suspected tension pneumothorax.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 8 Respiration Assessment and Management in TFC · 16 NOV 20 · pp. 3–4"
          },
          {
            "id": "NDC-03",
            "text": "Burped or removed a previously applied vented chest seal (if improperly applied, replaced the vented chest seal) and reassessed the casualty.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 8 Respiration Assessment and Management in TFC · 16 NOV 20 · pp. 3–4"
          },
          {
            "id": "NDC-04",
            "text": "Identified site placement for needle insertion on the side of the injury: fifth intercostal space (ICS) in the anterior axillary line OR second ICS at the midclavicular line.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 8 Respiration Assessment and Management in TFC · 16 NOV 20 · pp. 3–4"
          },
          {
            "id": "NDC-05",
            "text": "Secured a 14-gauge or 10-gauge, 3.25-inch needle/catheter unit.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 8 Respiration Assessment and Management in TFC · 16 NOV 20 · pp. 3–4"
          },
          {
            "id": "NDC-06",
            "text": "If available, used an antiseptic solution or pad to clean the site.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 8 Respiration Assessment and Management in TFC · 16 NOV 20 · pp. 3–4"
          },
          {
            "id": "NDC-07",
            "text": "Inserted the needle/catheter just over the top of the lower rib at the insertion site, at a 90-degree angle (perpendicular) to the chest wall, advancing it to the hub.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 8 Respiration Assessment and Management in TFC · 16 NOV 20 · pp. 3–4"
          },
          {
            "id": "NDC-08",
            "text": "Held the needle/catheter unit in place for 5–10 seconds to allow decompression; then removed the needle, leaving the catheter in place.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 8 Respiration Assessment and Management in TFC · 16 NOV 20 · pp. 3–4"
          },
          {
            "id": "NDC-09",
            "text": "Assessed for successful NDC by looking for respiratory distress improvement, an obvious hissing sound as air escaped, and hemoglobin oxygen saturation increased to 90% or greater.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 8 Respiration Assessment and Management in TFC · 16 NOV 20 · pp. 3–4"
          },
          {
            "id": "NDC-10",
            "text": "Performed a second NDC on the same side of the chest at the alternate recommended site if the first NDC failed to improve signs/symptoms.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 8 Respiration Assessment and Management in TFC · 16 NOV 20 · pp. 3–4"
          },
          {
            "id": "NDC-11",
            "text": "Placed the casualty in a position of comfort or recovery position with the injured side down.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 8 Respiration Assessment and Management in TFC · 16 NOV 20 · pp. 3–4"
          },
          {
            "id": "NDC-12",
            "text": "Continued reassessing the casualty for recurrence of progressive respiratory distress.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 8 Respiration Assessment and Management in TFC · 16 NOV 20 · pp. 3–4"
          },
          {
            "id": "NDC-13",
            "text": "If the initial NDC was successful but symptoms recurred, performed another NDC at the same previously used site with a new 14-gauge or 10-gauge, 3.25-inch needle/catheter unit.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 8 Respiration Assessment and Management in TFC · 16 NOV 20 · pp. 3–4"
          },
          {
            "id": "NDC-14",
            "text": "If the second NDC was also not successful, continued onto the Circulation section of the MARCH sequence.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 8 Respiration Assessment and Management in TFC · 16 NOV 20 · pp. 3–4"
          },
          {
            "id": "NDC-15",
            "text": "Documented all findings and treatments on a DD Form 1380 TCCC Casualty Card and attached it to the casualty.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 8 Respiration Assessment and Management in TFC · 16 NOV 20 · pp. 3–4"
          }
        ]
      }
    ],
    "timers": [
      {
        "id": "ndc_hold",
        "section": "NDC",
        "label": "NDC Catheter Hold",
        "mode": "range",
        "minSeconds": 5,
        "maxSeconds": 10,
        "standard": "5–10 sec",
        "startLabel": "START HOLD",
        "stopLabel": "REMOVE NEEDLE",
        "provenance": "source",
        "linkedItemId": "NDC-08",
        "requiredForPass": true,
        "conditional": false,
        "repeatable": true,
        "timerKind": "clinical",
        "pausePolicy": "tactical-and-admin",
        "resetPolicy": "new-instance",
        "continuousRequired": true,
        "gradingClock": "continuous"
      }
    ],
    "instantEvents": [],
    "sourceItemCount": 15,
    "dafItemCount": 0
  },
  "5": {
    "id": "5",
    "shortName": "BLOOD",
    "name": "Administration of Blood Products",
    "subtitle": "Individual Skill — Circulation / Hemorrhagic Shock",
    "source": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7",
    "instructions": "Use only Blood Module 11 pages 6–7. Grade the administration-of-blood-products steps as written. Source proficiency requires PASS on every critical task marked C. This source is dated 26 MAY 21; the app preserves the uploaded source wording and flags the content for protocol validation rather than silently replacing it.",
    "ratings": [
      {
        "key": "pass",
        "label": "PASS"
      },
      {
        "key": "fail",
        "label": "FAIL"
      },
      {
        "key": "nt",
        "label": "NT"
      },
      {
        "key": "no",
        "label": "N/O"
      }
    ],
    "passRule": "all_critical",
    "minimumScore": 0.0,
    "requireAllCritical": true,
    "proficiencyLabel": "Demonstrated Blood Administration Proficiency",
    "attempts": [
      "1st",
      "2nd"
    ],
    "sections": [
      {
        "code": "BLOOD",
        "title": "ADMINISTRATION OF BLOOD PRODUCTS",
        "items": [
          {
            "id": "BLD-01",
            "text": "Considered body substance isolation.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-02",
            "text": "Ensured the following were previously completed before blood products were administered: external hemorrhage controlled; IV or IO line in place and functioning properly; tranexamic acid administered.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-03",
            "text": "Began hypothermia prevention and treatment measures if not already initiated.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-04",
            "text": "Selected blood products to be administered in the preferred order of precedence based on availability: cold-stored low-titer type O whole blood; prescreened low-titer type O fresh whole blood; plasma/RBCs/platelets 1:1:1; plasma/RBCs 1:1; reconstituted dried plasma, liquid plasma, or thawed plasma and/or RBCs alone.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-05",
            "text": "Secured blood products and blood administration set (ensured blood tubing had a filter). If cold-stored whole blood was used, secured and used an IV fluid warmer at 38°C (100.4°F).",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-06",
            "text": "Closed off tubing with all clamps.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-07",
            "text": "Peeled back port opening on the blood product bag and exposed the port.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-08",
            "text": "Removed the cap from the spike of IV tubing and inserted it into the blood product bag; pushed the spike into the hub.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-09",
            "text": "Turned the blood product bag right side up, released clamp(s), and observed blood flow through the line.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-10",
            "text": "Squeezed drip chamber/filter and ensured it was filled halfway.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-11",
            "text": "Hung blood bag above the casualty. If Y tubing was used, ensured the line not attached to blood remained clamped off.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-12",
            "text": "Released the distal clamp, allowed blood flow to the end of the IV line, and clamped the line shut.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-13",
            "text": "If a blood product warmer was used, connected the IV tubing in accordance with manufacturer’s guidelines.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-14",
            "text": "Cleaned the IV or IO port with alcohol or povidone-iodine pad.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-15",
            "text": "Secured the Luer adapter of the IV blood line into the IV or IO port if a Luer-lock set was used, or placed a 16-gauge needle on the end of the IV tubing and inserted into the saline lock if a standard saline-lock set was used.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-16",
            "text": "Released all clamps on the blood-products line and began transfusion.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-17",
            "text": "Secured IV tubing to the casualty.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-18",
            "text": "Assessed for and treated blood transfusion reactions (anaphylactic or acute hemolytic reaction).",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-19",
            "text": "Stopped the blood infusion and treated according to symptoms and suspected type of reaction if the casualty appeared to be having a blood-transfusion-associated reaction.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-20",
            "text": "Administered 30 mL of 10% calcium gluconate or 10 mL of 10% calcium chloride IV/IO after the first unit of blood product.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-21",
            "text": "Continuously monitored the patient throughout administration of blood products.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-22",
            "text": "Administered another unit of blood product if post-transfusion systolic blood pressure was less than 100 mmHg and heart rate was greater than 100 bpm.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-23",
            "text": "Continued to monitor the casualty for blood transfusion reactions if another unit of blood product was given.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-24",
            "text": "If infusing through a saline lock, flushed with 10 mL of an appropriate fluid.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-25",
            "text": "Discontinued blood product(s) and properly disposed of used equipment.",
            "critical": false,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          },
          {
            "id": "BLD-26",
            "text": "Documented all findings and treatments on a DD Form 1380 TCCC Casualty Card and attached it to the casualty.",
            "critical": true,
            "provenance": "source",
            "sourceReference": "TCCC-CMC-12-01 · Module 11 Hemorrhagic Shock Fluid Resuscitation (TFC) · 26 MAY 21 · pp. 6–7"
          }
        ]
      }
    ],
    "timers": [],
    "instantEvents": [],
    "sourceItemCount": 26,
    "dafItemCount": 0
  }
};
