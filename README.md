# multi-step-form


TODO:
Phase 1: Finish Personal Info
- [ ] 1. Add validation logic
  Create typed errors for name, email, and phone. Validate required fields and email format when the form is submitted.
  Done when: invalid submissions remain on Personal Info and produce an error object.
- [ ] 2. Display desktop error states
  Show error messages beside labels, add red input borders, and clear errors when corrected.
  Done when: the desktop version matches the error-state design.
- [ ] 3. Polish mobile error states
  Check spacing, long messages, input widths, and error-label alignment below 768px.
  Done when: nothing overlaps or causes horizontal scrolling.
- [ ] 4. Add desktop “Next Step” behaviour
  Rename Submit to Next Step and move to the Plan placeholder after successful validation. Update the active sidebar step.
  Done when: valid details open Plan; invalid details do not.
- [ ] 5. Build the mobile bottom action bar
  Make Next Step fixed at the bottom on mobile, add safe-area padding, and prevent it from covering form fields. Keep desktop positioning flex-based.
  Done when: mobile navigation matches the design and still submits the form.
- [ ] 6. Preserve Personal Info values
  Go to Plan and back to Personal Info, checking that values remain populated.
  Done when: navigating between steps never resets entered details.
- [ ] 7. Remove duplicate step rendering
  Refactor SignUp so renderDetailSection() is rendered once, with CSS handling desktop/mobile layout differences.
  Done when: there are no duplicate inputs or duplicate HTML IDs in the DOM.
Phase 2: Select Plan
- [ ] 8. Define the plan data and types
  Add the three plans, monthly/yearly prices, selected plan, and billing interval to the parent form state.
- [ ] 9. Build the desktop plan cards
  Add icons, names, prices, and the basic selected-card appearance.
- [ ] 10. Add plan selection behaviour
  Make the cards accessible buttons or radio inputs and update the selected plan.
- [ ] 11. Add the monthly/yearly toggle
  Change displayed prices and show the yearly “2 months free” message.
- [ ] 12. Build the mobile plan layout
  Stack the cards and adjust icon, text, toggle, and spacing.
- [ ] 13. Add Plan navigation
  Implement Go Back and Next Step. Confirm selected plan and billing interval persist after navigating away.
Phase 3: Add-ons
- [ ] 14. Define add-on data and state
  Add names, descriptions, monthly/yearly prices, and selected add-on IDs.
- [ ] 15. Build desktop add-on cards
  Create the checkbox layout and selected appearance.
- [ ] 16. Add selection behaviour
  Allow multiple add-ons to be selected and deselected.
- [ ] 17. Connect billing interval prices
  Display monthly or yearly add-on pricing based on the Plan selection.
- [ ] 18. Build the mobile add-on layout
  Adjust card spacing and verify long descriptions fit.
- [ ] 19. Add Add-ons navigation
  Implement Go Back and Next Step, checking selections persist.
Phase 4: Summary
- [ ] 20. Create pricing helpers
  Write functions that calculate plan cost, add-on cost, and total without putting calculations directly in JSX.
- [ ] 21. Build the desktop summary
  Display the selected plan, billing interval, add-ons, individual prices, and total.
- [ ] 22. Implement the Change link
  Return to Select Plan without clearing any saved selections.
- [ ] 23. Build the mobile summary layout
  Match mobile spacing and ensure prices align correctly.
- [ ] 24. Add confirmation behaviour
  Change Next Step to Confirm and navigate to the completion screen.
Phase 5: Completion and Quality
- [ ] 25. Build the Thank You screen
  Add the illustration, heading, message, and responsive layout.
- [ ] 26. Add keyboard and focus support
  Check tab order, visible focus states, labels, radio/checkbox semantics, and Enter-key submission.
- [ ] 27. Test validation and calculations
  Add tests for required fields, invalid email addresses, billing changes, and totals.
- [ ] 28. Test the complete user journey
  Cover Personal Info → Plan → Add-ons → Summary → Thank You, including going backwards.
- [ ] 29. Do a responsive visual pass
  Test around 320px, 375px, 768px, and desktop widths. Fix overflow and awkward intermediate layouts.
- [ ] 30. Finish interaction states
  Compare hover, active, selected, error, and focus states against the supplied designs.
- [ ] 31. Final cleanup
  Run lint, tests, and build; remove placeholders and commented-out code; update the README.
