# Content Validation Notes

## Purpose

The May 2026 CMC abbreviated Tactical Trauma Assessment was used as a **validation reference**, not as a replacement study instrument. The study's 28-point checklist and the four specifically selected individual-skill page ranges remain the controlled assessment content in this build.

## Study TTA

The study checklist contains 28 scored MARCH-PAWS tasks and 19 tasks marked critical. It records an overall threshold of at least 80% and separately reports critical-task completion. The app preserves those two measures separately.

The May 2026 CMC abbreviated TTA is substantially more granular than the 28-point study instrument. It adds explicit CUF/TFC tasks, expanded airway and respiration decision points, more detailed circulation/resuscitation content, updated pain/antibiotic wording, communication, documentation, and evacuation criteria. Those additional CMC criteria are **not automatically inserted** into the study TTA because doing so would change the longitudinal instrument.

## TQ — selected pages 1–2

The selected windlass-tourniquet checklist is retained exactly as the study source range. Its critical criteria include exposure/assessment, direct pressure, device placement 2–3 inches above the wound directly on skin, removal of slack, windlass tightening until bleeding stops, timing, locking, and documentation.

The May 2026 CMC TTA remains clinically consistent with the core deliberate-tourniquet concept but provides additional scenario context such as CUF high-and-tight placement, side-by-side second tourniquets when bleeding persists, and later reassessment/conversion. These broader scenario items are not added to the isolated TQ skill module.

## NPA — selected page 4

The NPA module uses only the selected page 4 technique checklist, including inspection of nasal passages, lubrication, bevel orientation, 90-degree insertion angle, advancement until the flange is flush, reassessment, positioning, and documentation.

The May 2026 abbreviated CMC TTA does not reproduce this full individual-skill checklist, so it is treated as a higher-level validation reference rather than a step-by-step replacement.

## NDC — selected pages 3–4

The selected NDC checklist and the May 2026 CMC TTA agree on the core needle/catheter size options, approved insertion sites, insertion over the top of the rib, and the 5–10 second decompression hold. The May 2026 CMC TTA adds broader reassessment and monitoring language. The app preserves the selected 2020 skill checklist and its source timer.

## Blood — selected pages 6–7

The selected blood module preserves the uploaded 26 May 2021 administration checklist, including prerequisite hemorrhage control/access/TXA, product precedence, filtered tubing, warmer use when applicable, transfusion-reaction assessment/treatment, calcium administration, reassessment, and documentation.

The May 2026 CMC abbreviated TTA uses more condensed wording: administer blood products under approved protocol, use a warming device when available, give calcium after the first transfused product, and reassess after each unit. Because the study selected the 2021 individual-skill pages, the software flags this source date and does not silently reconcile protocol wording. Any content update should be a PI/AI-approved protocol amendment.

## Software rule

Clinical source changes and software changes should be versioned separately. If the PI/AI approves a revised source instrument, update `www/tiers.js`, increment `www/version.js`, document the protocol/content version, and rerun `npm run verify` before building the APK.
