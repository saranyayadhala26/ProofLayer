ProofLayer – Test Case Documentation
Project Information
Project Name: ProofLayer
Project Type: Website
Tester: Saranya
Browser: Chrome
Operating System: Windows 11
Document Version: 2.0
Total Test Cases: 45  
Execution note: The Pass results below are based on the tester's report that all 45 checks were performed and no faults were found. Keep screenshots or other test evidence where available. A Pass result documents the observed execution; it does not guarantee that the website is completely defect-free.

TC-001: Verify Website Logo
Test Scenario:
Verify that the ProofLayer logo is displayed and clickable.

Preconditions:
Website should be opened.

Test Steps:
1. Open the ProofLayer website.
2. Observe the navigation bar.
3. Verify the ProofLayer logo.
4. Click the logo and observe the destination.
Expected Result:
ProofLayer logo should be visible and clicking it should navigate to the intended Home destination.

Actual Result:
- ProofLayer logo displayed correctly.
- Logo was clickable.
- Clicking the logo navigated to the Home section.
Status: Pass
TC-002: Verify Home Navigation
Test Scenario:
Verify Home navigation functionality.

Preconditions:
Website should be opened.

Test Steps:
1. Open the website.
2. Click the Home navigation link.
3. Observe the displayed section.
Expected Result:
User should navigate to the Home section.

Actual Result:
Home section opened successfully.

Status: Pass
TC-003: Verify About Navigation
Test Scenario:
Verify About navigation functionality.

Preconditions:
Website should be opened.

Test Steps:
1. Open the website.
2. Click About.
3. Observe the displayed section.
Expected Result:
User should navigate to the About section.

Actual Result:
About section opened successfully.

Status: Pass
TC-004: Verify Services Navigation
Test Scenario:
Verify Services navigation functionality.

Preconditions:
Website should be opened.

Test Steps:
1. Open the website.
2. Click Services.
3. Observe the displayed section.
Expected Result:
User should navigate to the Services section.

Actual Result:
Services section opened successfully.

Status: Pass
TC-005: Verify Our Approach Navigation
Test Scenario:
Verify Our Approach navigation functionality.

Preconditions:
Website should be opened.

Test Steps:
1. Open the website.
2. Click Our Approach.
3. Observe the displayed section.
Expected Result:
User should navigate to the Our Approach section.

Actual Result:
Our Approach section opened successfully.

Status: Pass
TC-006: Verify Contact Navigation
Test Scenario:
Verify Let's Talk navigation functionality.

Preconditions:
Website should be opened.

Test Steps:
1. Open the website.
2. Click Let's Talk.
3. Observe the displayed section.
Expected Result:
User should navigate to the Contact section.

Actual Result:
Contact section opened successfully.

Status: Pass
TC-007: Verify Favicon
Test Scenario:
Verify website favicon loading.

Preconditions:
Website should be opened.

Test Steps:
1. Open the ProofLayer website.
2. Observe the browser tab.
3. Open Chrome DevTools and select Console or Network.
4. Reload the website.
5. Check the favicon resource and any loading errors.
Expected Result:
- Website favicon should load successfully.
- Correct favicon should be displayed.
- Favicon should remain visible after reload.
- Favicon request should succeed and no favicon-related 404 should appear.
Actual Result:
- Favicon was visible in the browser tab.
- Correct blue tick icon was displayed.
- Favicon remained visible after reload.
- Favicon resource returned HTTP status 200.
Status: Pass
TC-008: Verify Desktop and Tablet Responsiveness
Test Scenario:
Verify website layout on desktop and tablet screens.

Preconditions:
Website should be opened in Chrome DevTools.

Test Steps:
1. Open the website.
2. Set viewport to 1366 × 768.
3. Inspect navigation, hero and all sections.
4. Set viewport to 768 × 1024.
5. Inspect card alignment and section layout.
6. Check for horizontal overflow.
Expected Result:
Website content should display properly at both viewport sizes without unwanted horizontal scrolling or overlapping.

Actual Result:
- Desktop navigation, hero, service cards, About, Approach and Contact sections displayed correctly.
- Tablet layout displayed correctly.
- No unwanted horizontal overflow or overlapping was observed.
Status: Pass
TC-009: Verify Mobile Responsiveness
Test Scenario:
Verify website layout on mobile screens.

Preconditions:
Website should be opened in Chrome DevTools device toolbar.

Test Steps:
1. Open Chrome DevTools.
2. Enable the device toolbar.
3. Set viewport width to 375px.
4. Inspect navigation, hero and service cards.
5. Repeat the check at 412px.
6. Check for horizontal overflow and overlapping.
Expected Result:
Website should adapt to mobile screen sizes. Content should remain visible, usable and free from unwanted overflow.

Actual Result:
- Navigation links were visible and clickable.
- Hero heading and illustration displayed correctly.
- Service cards displayed without overlapping.
- No horizontal overflow was observed at 375px and 412px.
Status: Pass
TC-010: Verify Browser Console
Test Scenario:
Verify website JavaScript execution and console errors.

Preconditions:
Website should be opened in Chrome.

Test Steps:
1. Open the ProofLayer website.
2. Open Chrome DevTools.
3. Select Console.
4. Clear existing messages.
5. Reload the website.
6. Observe console output.
Expected Result:
Website JavaScript should execute successfully without unexpected errors.

Actual Result:
- No JavaScript errors were found.
- No console warnings were reported.
- Welcome to ProofLayer message displayed.
- Website loaded successfully message displayed.
- Navigation links found: 5.
Status: Pass
TC-011: Verify Keyboard Navigation
Test Scenario:
Verify keyboard navigation through interactive elements.

Preconditions:
ProofLayer website should be open.

Test Steps:
1. Navigate using the Tab key without using the mouse.
2. Verify focus moves through interactive elements.
3. Check whether the focused element has a visible focus indicator.
4. Use Shift + Tab to navigate backwards.
5. Press Enter on the Home and Contact navigation links.
Expected Result:
- Interactive elements should receive keyboard focus.
- Focus should move in a logical order.
- Focus indicator should be visible.
- Enter should activate the focused link.
Actual Result:
- Tab key navigated through interactive elements.
- Focus indicators were visible.
- Navigation order was logical.
- Shift + Tab navigated backwards.
- Enter activated the Home and Contact links successfully.
Status: Pass
TC-012: Verify Website at 200% Browser Zoom
Test Scenario:
Verify website usability at 200% browser zoom.

Preconditions:
Website should be opened in Chrome.

Test Steps:
1. Open the ProofLayer website.
2. Increase browser zoom to 200% using Ctrl + +.
3. Inspect all sections and text.
4. Check buttons and navigation for overlap.
5. Check for unwanted horizontal scrolling.
Expected Result:
Content should remain readable and usable without clipping, overlap or unwanted horizontal scrolling.

Actual Result:
- Text remained readable.
- Buttons did not overlap.
- Content was not cut off.
- No unwanted horizontal scrolling was observed.
Status: Pass
TC-013: Verify ProofLayer Logo Navigation
Test Scenario:
Verify that clicking the ProofLayer logo navigates to its intended destination.

Preconditions:
Website should be opened and the logo should be visible.

Test Steps:
1. Scroll to a section below Home.
2. Click the ProofLayer logo in the navigation bar.
3. Observe the page destination.
Expected Result:
Clicking the logo should navigate to the intended Home destination.

Actual Result:
ProofLayer logo navigation behaved as expected and returned to the Home destination.

Status: Pass
TC-014: Verify Explore Services Button
Test Scenario:
Verify the Explore Services call-to-action button.

Preconditions:
Website should be opened at the Home section.

Test Steps:
1. Locate the Explore Services button in the hero section.
2. Click the button.
3. Observe the page destination.
Expected Result:
The Services section should be displayed.

Actual Result:
Explore Services button navigated to the Services section successfully.

Status: Pass
TC-015: Verify Discover ProofLayer Button
Test Scenario:
Verify the Discover ProofLayer call-to-action button.

Preconditions:
Website should be opened at the Home section.

Test Steps:
1. Locate the Discover ProofLayer button in the hero section.
2. Click the button.
3. Observe the page destination.
Expected Result:
The About section should be displayed.

Actual Result:
Discover ProofLayer button navigated to the About section successfully.

Status: Pass
TC-016: Verify Let's Talk Navigation
Test Scenario:
Verify the Let's Talk navigation call-to-action.

Preconditions:
Website should be opened.

Test Steps:
1. Locate Let's Talk in the navigation bar.
2. Click the link.
3. Observe the page destination.
Expected Result:
The Contact section should be displayed.

Actual Result:
Let's Talk navigated to the Contact section successfully.

Status: Pass
TC-017: Verify Get in Touch CTA
Test Scenario:
Verify the Get in Touch email call-to-action.

Preconditions:
Website should be opened and an email application or mail handler should be available.

Test Steps:
1. Scroll to the Contact section.
2. Click Get in touch.
3. Observe the email compose window.
4. Verify the recipient address.
5. Do not send the email as part of this test.
Expected Result:
Email compose window should open with the configured contact email address in the recipient field.

Actual Result:
Email compose window opened and the tested recipient address was displayed correctly.

Status: Pass
TC-018: Verify Back to Top Link
Test Scenario:
Verify the Back to Top footer link.

Preconditions:
Website should be opened and user should be able to scroll to the footer.

Test Steps:
1. Scroll to the bottom of the website.
2. Locate Back to top.
3. Click the link.
4. Observe the page destination.
Expected Result:
The page should return to the Home section.

Actual Result:
Back to Top link returned to the Home section successfully.

Status: Pass
TC-019: Verify Internal Anchor Links
Test Scenario:
Verify that internal navigation links point to the correct page sections.

Preconditions:
Website should be opened.

Test Steps:
1. Click each navigation link: Home, About, Services, Our Approach and Let's Talk.
2. Click the hero call-to-action links.
3. Observe the destination after each click.
4. Confirm that each destination section is displayed.
Expected Result:
Each internal link should navigate to its intended section without a broken anchor.

Actual Result:
All tested internal links navigated to their intended sections.

Status: Pass
TC-020: Verify Hero Section Layout
Test Scenario:
Verify the layout of the hero section.

Preconditions:
Website should be opened at the Home section.

Test Steps:
1. Open the Home section.
2. Inspect the hero heading and description.
3. Inspect the hero buttons.
4. Inspect the quality card, orbit graphics and floating tags.
5. Check alignment and spacing.
Expected Result:
Hero text, buttons and visual elements should be displayed with proper alignment and spacing.

Actual Result:
Hero heading, description, buttons and illustration displayed correctly.

Status: Pass
TC-021: Verify About Section Content
Test Scenario:
Verify the About section content and layout.

Preconditions:
Website should be opened.

Test Steps:
1. Navigate to the About section.
2. Read the section heading and paragraphs.
3. Inspect text alignment and spacing.
4. Check that content is not clipped.
Expected Result:
About heading and paragraphs should be readable, aligned and displayed completely.

Actual Result:
About section content displayed correctly with proper alignment and spacing.

Status: Pass
TC-022: Verify Service Cards
Test Scenario:
Verify all service cards in the Services section.

Preconditions:
Website should be opened.

Test Steps:
1. Navigate to the Services section.
2. Count the service cards.
3. Inspect each card title, icon and description.
4. Check spacing between cards.
Expected Result:
All four service cards should be displayed with their respective content.

Actual Result:
Four service cards displayed correctly with their titles, icons and descriptions.

Status: Pass
TC-023: Verify Service Card Hover Effect
Test Scenario:
Verify the hover effect on service cards.

Preconditions:
Website should be opened on a device with pointer or mouse support.

Test Steps:
1. Navigate to the Services section.
2. Move the pointer over each service card.
3. Observe the card position and border appearance.
4. Move the pointer away.
Expected Result:
Hovering over a service card should apply the intended visual effect and return to its normal state when the pointer leaves.

Actual Result:
Service card hover effect behaved as expected.

Status: Pass
TC-024: Verify Approach Section
Test Scenario:
Verify the four steps in the Our Approach section.

Preconditions:
Website should be opened.

Test Steps:
1. Navigate to the Our Approach section.
2. Inspect all four steps.
3. Verify step numbering and titles.
4. Check the descriptions and order.
Expected Result:
The four steps should be displayed in the intended order with readable descriptions.

Actual Result:
All four approach steps displayed in the intended order.

Status: Pass
TC-025: Verify Contact Section
Test Scenario:
Verify the Contact section content and CTA layout.

Preconditions:
Website should be opened.

Test Steps:
1. Navigate to the Contact section.
2. Inspect the heading.
3. Inspect the description.
4. Inspect the Get in touch button.
5. Check alignment and spacing.
Expected Result:
Contact heading, description and CTA should be visible and properly aligned.

Actual Result:
Contact section displayed correctly.

Status: Pass
TC-026: Verify Footer Layout
Test Scenario:
Verify footer elements and layout.

Preconditions:
Website should be opened.

Test Steps:
1. Scroll to the bottom of the website.
2. Inspect the ProofLayer logo.
3. Inspect copyright text.
4. Inspect the Back to Top link.
5. Check alignment and spacing.
Expected Result:
Footer logo, copyright text and Back to Top link should be visible and properly arranged.

Actual Result:
Footer elements displayed correctly.

Status: Pass
TC-027: Verify Font Loading
Test Scenario:
Verify configured website fonts.

Preconditions:
Internet connection should be available for external font loading.

Test Steps:
1. Open the website.
2. Wait for the page and external fonts to load.
3. Inspect headings and body text.
4. Check that the intended typography is rendered.
Expected Result:
Configured fonts should load and render as intended. If external fonts are unavailable, a fallback font should be used without breaking the layout.

Actual Result:
Fonts appeared as expected during the check.

Status: Pass
TC-028: Verify Text Readability and Contrast
Test Scenario:
Verify readability of text against section backgrounds.

Preconditions:
Website should be opened.

Test Steps:
1. Inspect text in the Hero section.
2. Inspect About and Services text.
3. Inspect Approach and Contact text.
4. Check text readability against each background.
Expected Result:
Text should be readable against its background and should not be obscured by visual elements.

Actual Result:
No readability or contrast issue was reported during the check.

Status: Pass
TC-029: Verify 375px Mobile Viewport
Test Scenario:
Verify layout at 375px viewport width.

Preconditions:
Website should be opened in Chrome DevTools device toolbar.

Test Steps:
1. Enable the device toolbar.
2. Set viewport width to 375px.
3. Inspect navigation and hero section.
4. Inspect service cards, approach steps and footer.
5. Check horizontal overflow.
Expected Result:
All website sections should fit and remain usable at 375px width.

Actual Result:
Website layout displayed correctly at 375px with no reported horizontal overflow.

Status: Pass
TC-030: Verify 412px Mobile Viewport
Test Scenario:
Verify layout at 412px viewport width.

Preconditions:
Website should be opened in Chrome DevTools device toolbar.

Test Steps:
1. Enable the device toolbar.
2. Set viewport width to 412px.
3. Inspect navigation and hero section.
4. Inspect service cards, approach steps and footer.
5. Check horizontal overflow.
Expected Result:
All website sections should fit and remain usable at 412px width.

Actual Result:
Website layout displayed correctly at 412px with no reported horizontal overflow.

Status: Pass
TC-031: Verify 768px Tablet Viewport
Test Scenario:
Verify layout at 768px viewport width.

Preconditions:
Website should be opened in Chrome DevTools device toolbar.

Test Steps:
1. Set viewport to 768 × 1024.
2. Inspect navigation and hero section.
3. Inspect service card arrangement.
4. Inspect About, Approach and Contact sections.
5. Check horizontal overflow.
Expected Result:
Website should use a suitable tablet layout without overlapping or unwanted horizontal scrolling.

Actual Result:
Website layout displayed correctly at the 768px tablet viewport.

Status: Pass
TC-032: Verify 1366px Desktop Viewport
Test Scenario:
Verify layout at 1366px viewport width.

Preconditions:
Website should be opened in Chrome DevTools device toolbar.

Test Steps:
1. Set viewport to 1366 × 768.
2. Inspect navigation bar.
3. Inspect hero content and illustration.
4. Inspect all page sections and footer.
5. Check horizontal overflow.
Expected Result:
Website should display its desktop layout correctly without clipping or unwanted horizontal scrolling.

Actual Result:
Website layout displayed correctly at the 1366px desktop viewport.

Status: Pass
TC-033: Verify Browser Compatibility
Test Scenario:
Verify website behaviour in the browsers selected for testing.

Preconditions:
Website should be accessible in each browser selected for the test.

Test Steps:
1. Open the website in each selected browser.
2. Inspect page layout and fonts.
3. Test navigation links and CTA links.
4. Inspect service cards and footer.
5. Compare the results across tested browsers.
Expected Result:
Website layout and links should behave consistently in the browsers included in the test.

Actual Result:
No compatibility issue was reported in the browsers tested.

Status: Pass
TC-034: Verify Orientation Change
Test Scenario:
Verify website layout after changing device orientation.

Preconditions:
Website should be opened in a mobile or tablet device emulator that supports orientation changes.

Test Steps:
1. Open the website in portrait orientation.
2. Inspect navigation and page sections.
3. Change to landscape orientation.
4. Inspect the same sections again.
5. Check for clipping and horizontal overflow.
Expected Result:
Content should remain visible and usable in both portrait and landscape orientations.

Actual Result:
No orientation-related issue was reported during the check.

Status: Pass
TC-035: Verify Heading Hierarchy
Test Scenario:
Verify the logical heading structure of the webpage.

Preconditions:
Website should be opened.

Test Steps:
1. Open Chrome DevTools.
2. Inspect the page heading elements.
3. Review the main heading and section headings.
4. Check that heading levels form a meaningful structure.
Expected Result:
Headings should follow a meaningful hierarchy and represent the page content clearly.

Actual Result:
No heading-structure issue was reported during the check.

Status: Pass
TC-036: Verify Keyboard Focus Visibility
Test Scenario:
Verify visible focus indicators for keyboard users.

Preconditions:
Website should be opened.

Test Steps:
1. Reload the website.
2. Press Tab to move through interactive elements.
3. Observe the focused element each time.
4. Press Shift + Tab to move backwards.
5. Confirm that focus remains visible.
Expected Result:
A visible focus indicator should identify the currently focused interactive element.

Actual Result:
Focus indicators were visible during keyboard navigation.

Status: Pass
TC-037: Verify Image and Icon Accessibility
Test Scenario:
Verify accessible treatment of meaningful non-text content.

Preconditions:
Website should be opened.

Test Steps:
1. Inspect the website for images and meaningful icons.
2. Use browser DevTools to inspect relevant markup.
3. Check for suitable alternative text or accessible names where required.
4. Confirm decorative visuals do not create confusing screen-reader output.
Expected Result:
Meaningful non-text content should have an accessible text alternative or equivalent treatment. Decorative visuals should be appropriately hidden from assistive technology when necessary.

Actual Result:
No issue was reported during the accessibility check.

Status: Pass
TC-038: Verify Color Contrast
Test Scenario:
Verify contrast between text and its background.

Preconditions:
Website should be opened.

Test Steps:
1. Inspect text in each major section.
2. Use a contrast-checking method or browser accessibility tool.
3. Check normal text and larger headings against their backgrounds.
4. Record any contrast failures.
Expected Result:
Text should meet the applicable WCAG contrast criteria for its text size and type.

Actual Result:
No contrast issue was reported during the check.

Status: Pass
TC-039: Verify Page Language Declaration
Test Scenario:
Verify the HTML page language declaration.

Preconditions:
Website source should be accessible.

Test Steps:
1. Open index.html in VS Code or browser DevTools.
2. Inspect the opening html element.
3. Verify the lang attribute and its value.
Expected Result:
The HTML document should declare the correct primary language.

Actual Result:
The page language declaration check passed.

Status: Pass
TC-040: Verify Page Loading
Test Scenario:
Verify that the website loads successfully.

Preconditions:
Website should be accessible through its local or hosted URL.

Test Steps:
1. Open the ProofLayer website URL.
2. Wait for the page to load.
3. Inspect the visible page content.
4. Check that the browser does not display a failed navigation page.
Expected Result:
The website should load successfully and display its page content.

Actual Result:
Page loaded successfully during the check.

Status: Pass
TC-041: Verify CSS Resource Loading
Test Scenario:
Verify that the stylesheet loads successfully.

Preconditions:
Website should be opened.

Test Steps:
1. Open Chrome DevTools.
2. Select the Network tab.
3. Reload the website.
4. Locate style.css.
5. Inspect its request status and the applied page styling.
Expected Result:
The CSS file should load successfully and the website styling should be applied.

Actual Result:
CSS loaded successfully and page styling appeared correctly.

Status: Pass
TC-042: Verify JavaScript Resource Loading
Test Scenario:
Verify that the JavaScript file loads and executes.

Preconditions:
Website should be opened.

Test Steps:
1. Open Chrome DevTools.
2. Select the Network tab.
3. Reload the website.
4. Locate script.js.
5. Inspect its request status.
6. Check the Console for unexpected JavaScript errors.
Expected Result:
The JavaScript file should load successfully and execute without unexpected errors.

Actual Result:
JavaScript loaded successfully and no unexpected error was reported.

Status: Pass
TC-043: Verify Favicon Resource Loading
Test Scenario:
Verify the favicon resource request.

Preconditions:
Website should be opened.

Test Steps:
1. Open Chrome DevTools.
2. Select the Network tab.
3. Reload the website.
4. Locate favicon.svg.
5. Inspect the request status.
Expected Result:
The favicon resource should load successfully without a missing-resource error.

Actual Result:
Favicon resource loaded successfully during the check.

Status: Pass
TC-044: Verify External Font Loading
Test Scenario:
Verify external Google Fonts loading.

Preconditions:
Internet connection should be available.

Test Steps:
1. Open Chrome DevTools.
2. Select the Network tab.
3. Reload the website.
4. Locate Google Fonts stylesheet and font requests.
5. Inspect their loading status.
6. Verify the rendered typography.
Expected Result:
Configured external fonts should load successfully when the network is available. The page should remain usable if fallback fonts are used.

Actual Result:
Fonts appeared as expected during the check.

Status: Pass
TC-045: Verify Page Reload
Test Scenario:
Verify that the website works after a browser refresh.

Preconditions:
Website should be opened.

Test Steps:
1. Open the ProofLayer website.
2. Navigate to a page section.
3. Refresh the browser using Ctrl + R.
4. Wait for the page to reload.
5. Inspect the layout, navigation and browser console.
Expected Result:
The website should reload successfully without breaking its layout or navigation.

Actual Result:
Website reloaded successfully and remained usable.

Status: Pass
Test Execution Summary
Metric	Result
Total Test Cases	45
Passed	45
Failed	0
Blocked	0
Pass Percentage	100%


Overall Result: All 45 test cases are reported as passed by the tester.
Scope and Limitations
- This test suite covers the current ProofLayer informational website and the elements present in its implementation.
- The current website includes navigation links, hero call-to-action links, service cards, an approach section, a contact email link and footer links.
- Login, registration, contact form submission, shopping cart, payment and user account workflows are not included because those features are not present in the reviewed website.
- API and backend testing are outside the scope of this website test suite.
- Browser compatibility results apply only to the browsers actually tested. Record browser names and versions when adding formal evidence.
- Accessibility and contrast checks should ideally be supported by an accessibility audit or contrast-checking evidence.
- Verify the contact email address in the final saved index.html before release.
Document End – ProofLayer Test Case Documentation