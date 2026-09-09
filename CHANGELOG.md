# 0.1.2-study

- Restored the full **CMC Tier 3 Tactical Trauma Assessment** from the uploaded v2.21.0 baseline instead of the shortened 28-point study TTA module.
- Restored **PERFORMED CARE UNDER FIRE (CUF)** and **PERFORMED TACTICAL FIELD CARE (TFC)** at the beginning of CMC.
- Restored all CMC sections and evaluator criteria: CUF, TFC, Massive Hemorrhage, Airway, Respiration, Circulation, Hypothermia, Head Injury / MACE 2, Pain, Antibiotics, Additional Wounds, Splinting, CPR, Communication, Documentation, and Preparation for Evacuation.
- Restored the original CMC configuration of **124 criteria, 28 critical criteria, and 7 timers**, including the overall 30-minute TTA timer.
- Restored the baseline CMC scoring/instruction configuration and DAF supplemental MACE 2 handling carried in v2.21.0.
- Added an exact-content SHA-256 validation check so future accidental CMC trimming/rewording fails `npm run verify`.
- Kept the v0.1.1 participant demographics and TQ `<1:00` count-up timer unchanged.

# 0.1.1-study

- Added participant demographics to Add Participant: clinical years of experience, AFSC, and current work section / clinical area.
- Added the same fields to roster display/search, CSV roster import, class/individual/enterprise exports, backups, and individual summary PDF metadata.
- Added a prominent TQ count-up timer pinned to the top of the TQ assessment.
- TQ timer starts at 00:00 and is stopped with **STEP 7 COMPLETE**; the study-requested standard is **< 1:00** and automatically marks the linked TQ timing criterion not met at 60 seconds.
- Preserved the separate 3-minute TQ documentation timer.
- Bumped local data schema to v5 and analytics schema to TCCC_ANALYTICS_2.1.

# 0.1.0-study

- Rebuilt the v2.21.0 evaluator framework as a longitudinal nurse competency study app.
- Removed legacy Tier 1/2/4 curriculum content and the four-tier UI.
- Added five controlled assessment modules: TTA, TQ, NPA, NDC, BLOOD.
- TTA uses the uploaded 28-point / 19-critical study checklist and 80% study threshold.
- TQ uses TQ PDF pages 1–2 only.
- NPA uses Airway PDF page 4 only.
- NDC uses Respiration PDF pages 3–4 only.
- BLOOD uses Blood PDF pages 6–7 only.
- Added baseline/3-month/6-month timepoints, study-arm assignment, practice count, feedback count, and trials-to-mastery.
- Added aeromedical-evacuation welcome artwork, CCATT home artwork, and aircraft/medical launcher icon.
- Added GitHub Actions Android build using Node 24 and Java 21; no GitHub Pages dependency.
- Added source mapping and validation notes.
