# ProofLayer – API Execution Report

## 1. Execution Overview

| Field | Details |
|---|---|
| Project | ProofLayer |
| Testing Type | REST API Testing |
| Tool | Postman |
| API Provider | JSONPlaceholder |
| Execution Method | Collection Runner |
| Environment | None |
| Iterations | 1 |
| Execution Date | 18 November 2026 |
| Execution Status | PASS |

## 2. Execution Summary

| Metric | Result |
|---|---:|
| Total Assertions | 21 |
| Passed | 21 |
| Failed | 0 |
| Skipped | 0 |
| Errors | 0 |
| Pass Rate | 100% |

## 3. Test Execution Details

| Test Case | Request | Expected Status | Actual Status | Result |
|---|---|---:|---:|---|
| TC-API-001 | GET Existing Post | 200 | 200 | PASS |
| TC-API-002 | GET Non-existing Post | 404 | 404 | PASS |
| TC-API-003 | POST Create Post | 201 | 201 | PASS |
| TC-API-004 | PUT Update Post | 200 | 200 | PASS |
| TC-API-005 | PATCH Update Post | 200 | 200 | PASS |
| TC-API-006 | DELETE Post | 200 | 200 | PASS |

## 4. Collection Runner Metrics

The recorded successful execution showed:

- Total execution duration: 3.014 seconds
- Average response time: 309 ms
- Iterations: 1
- Runner errors: 0

*Note: Response times may vary between executions.*

## 5. Defect Summary

No assertion failures were reported in the final successful execution.

During an earlier execution, the negative GET response-body assertion failed because the test expected an empty string while the API returned an empty JSON object (`{}`).

The assertion was corrected to validate an empty JSON object. The subsequent execution passed both negative GET assertions.

## 6. Final Conclusion

The ProofLayer API testing collection was executed successfully using Postman Collection Runner.

All 21 assertions passed with zero failures and zero runner errors.

The six requests covered GET, POST, PUT, PATCH and DELETE operations, including positive and negative testing.

**Final Execution Result: PASS**

## 7. Important Note

JSONPlaceholder is a simulated REST API intended for practice and testing. Successful POST, PUT, PATCH and DELETE responses do not represent permanent changes to a production database.
