# ProofLayer – Bug Report Documentation

## Project Information

Project Name: ProofLayer  
Project Type: Website  
Tester: Saranya  
Browser: Chrome  
Operating System: Windows 11  
Document Version: 1.0  

---

# BUG-001: Missing Favicon Resource Returned 404 Error

**Bug ID:** KAN-1  
**Bug Title:** Missing Favicon Resource Returned 404 Error  
**Module:** Favicon  
**Severity:** Low  
**Priority:** Medium  
**Environment:** Chrome – Windows 11  
**Status:** Fixed and Retested  

### Description:
The website favicon resource was not loading successfully. The browser returned a 404 error when requesting the favicon file.

### Preconditions:
- ProofLayer website should be running.
- Browser should be opened.

### Steps to Reproduce:
1. Open the ProofLayer website.
2. Open Chrome DevTools.
3. Navigate to the Network or Console tab.
4. Reload the website.
5. Observe the favicon resource request.

### Expected Result:
- Favicon should load successfully.
- Correct favicon should appear in the browser tab.
- No 404 error should occur.

### Actual Result:
- Favicon resource returned a 404 error.
- Browser could not load the favicon successfully.

### Root Cause:
The favicon resource was missing or was not available at the referenced path.

### Fix Applied:
The favicon resource was added or corrected so that the website could load the favicon successfully.

### Retesting:
1. Reload the website.
2. Check the browser tab.
3. Inspect the favicon request in DevTools.
4. Verify the resource response.

### Retest Result:
- Favicon displayed correctly.
- Favicon resource returned HTTP 200.
- No favicon-related 404 error was observed.

**Final Status:** Fixed – Retest Passed

---

# BUG-002: Contact CTA Uses Incorrect Email Address

**Bug ID:** KAN-12 (verify Jira issue key)  
**Bug Title:** Contact CTA Uses Incorrect Email Address  
**Module:** Contact Section  
**Severity:** Medium  
**Priority:** medium
**Environment:** Chrome – Windows 11  
**Status:** Fixed and Retested  

### Description:
The Get in Touch call-to-action button was configured with an incorrect or placeholder email address. Clicking the button opened an email compose window with the wrong recipient.

### Preconditions:
- ProofLayer website should be running.
- An email application or mail handler should be configured.

### Steps to Reproduce:
1. Open the ProofLayer website.
2. Navigate to the Contact section.
3. Click the Get in Touch button.
4. Observe the recipient address in the email compose window.

### Expected Result:
The email compose window should open with the correct ProofLayer contact email address.

### Actual Result:
The email compose window opened with an incorrect or placeholder recipient address.

### Root Cause:
The `mailto:` link in the Contact CTA contained an incorrect email address.

### Fix Applied:
The email address in the `mailto:` link was updated to the intended contact address.

### Retesting:
1. Open the updated ProofLayer website.
2. Navigate to the Contact section.
3. Click Get in Touch.
4. Verify the recipient address.
5. Confirm that the correct address appears without sending the email.

### Retest Result:
- Email compose window opened successfully.
- Correct recipient address was displayed.
- Contact CTA behaved as expected.

**Final Status:** Fixed – Retest Passed

---

# Bug Summary

| Bug ID | Bug Description | Severity | Status |
|---|---|---|---|
| KAN-1 | Missing Favicon Resource – 404 Error | Low | Fixed |
| KAN-12 | Contact CTA Incorrect Email Address | Medium | Fixed |

**Total Bugs Identified:** 2  
**Total Bugs Fixed:** 2  
**Total Bugs Retested:** 2  

---

**Document End – ProofLayer Bug Report Documentation**