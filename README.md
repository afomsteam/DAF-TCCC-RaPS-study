# FieldReady Competency Study — GitHub Source

This repository is source-only. It does **not** include a prebuilt APK. GitHub Actions generates the Android APK from the files in this repository.

## What this build keeps from TCCC v2.21.0

The app retains the useful evaluator/program-manager framework from the uploaded baseline APK: offline/local storage, study-session creation, participant roster, installation/MAJCOM metadata, direct-observation grading, critical-task flags, timers, notes, root-cause capture, remediation attempt support, class closure, PDF/CSV/JSON export, management analytics, and Android file saving.

The old Tier 1, Tier 2, and Tier 4 curriculum content is removed. The old four-tier selector is replaced by study assessment modules.

## Study assessment modules

1. **TTA — 28-point study Tactical Trauma Assessment**
   - 28 total criteria
   - 19 critical criteria tracked separately
   - Study threshold: 80% (PASS / applicable PASS+FAIL)
   - Derived from the uploaded study checklist; the May 2026 CMC abbreviated checklist is used as a validation reference rather than silently replacing the study instrument.

2. **TQ — Two-Handed Windlass Tourniquet Application**
   - Uses only TQ PDF pages 1–2
   - 15 criteria / 11 critical
   - Includes 1-minute and 3-minute source timers

3. **NPA — Nasopharyngeal Airway Insertion**
   - Uses only Airway PDF page 4
   - 13 criteria / 7 critical

4. **NDC — Needle Decompression of the Chest**
   - Uses only Respiration PDF pages 3–4
   - 15 criteria / 12 critical
   - Includes the 5–10 second catheter-hold timer

5. **BLOOD — Administration of Blood Products**
   - Uses only Blood PDF pages 6–7
   - 26 criteria / 11 critical
   - Source wording is preserved from the uploaded 26 May 2021 checklist and clearly source-dated for protocol validation.

## Longitudinal-study fields

The build adds study-specific fields without requiring a backend:

- Baseline / 3-month pre / 3-month post / 6-month pre / 6-month post timepoint
- Control / Frequency-Based / Deliberate-Practice study arm
- Privacy-safe Participant ID
- Practice-session count
- Feedback/coaching count
- Trials-to-mastery count
- Evaluator identifier
- Attempt and remediation data

These fields are included in the detailed CSV exports for longitudinal analysis.

## Branding

The generated aeromedical-evacuation and CCATT artwork is included in the app:

- Aeromedical-evacuation image: welcome/safety background
- CCATT image: home hero background
- FieldReady aircraft/medical icon crop: app launcher icon

## Build the APK in GitHub

1. Create a new GitHub repository or use a clean branch.
2. Upload the entire contents of this folder to the repository root.
3. Commit to `main`.
4. Open **Actions** → **Build FieldReady Android APK**.
5. Choose **Run workflow** if it did not start automatically.
6. When the build finishes, open the workflow run and download the artifact named **FieldReady-Competency-Study-APK**.

The workflow uses Node 24 and Java 21, creates the Capacitor Android wrapper, syncs the web app, applies the FieldReady launcher icon, and builds a debug APK. It does not use GitHub Pages.

## Important source-control rule

The individual-skill assessment content is deliberately limited to the pages specified for the study. Do not replace these criteria with newer or broader checklists without study-protocol approval. Newer CMC material can be used to flag validation questions, but the validated study instrument should remain stable unless the protocol is formally amended.

## Local data warning

This build stores working records locally on the Android device. Uninstalling the app or clearing app data can remove records. Export study sessions promptly to an approved location. Do not enter PHI, CUI, SSNs, DoD ID numbers, patient identifiers, or unnecessary personally identifiable information.
