# ProofLayer – API Test Cases

## 1. Project Information

| Field | Details |
|---|---|
| Project Name | ProofLayer |
| Testing Type | REST API Testing |
| Tool | Postman |
| API Provider | JSONPlaceholder |
| Base URL | https://jsonplaceholder.typicode.com |
| Execution Type | Manual and Automated Assertions |
| Total Test Assertions | 21 |
| Passed | 21 |
| Failed | 0 |
| Overall Status | PASS |

## 2. Objective

The objective of this testing is to verify the functionality and responses of REST API endpoints using Postman.

The following HTTP methods were tested:

- GET – Retrieve an existing post.
- GET – Verify a non-existing post.
- POST – Create a new post.
- PUT – Update an existing post.
- PATCH – Partially update a post.
- DELETE – Delete a post.

## 3. Test Environment

- Tool: Postman
- API: JSONPlaceholder
- Endpoint: `/posts`
- Test data: Sample post data
- Execution: Postman Collection Runner

**Note:** JSONPlaceholder is a fake REST API used for practice. POST, PUT, PATCH and DELETE responses simulate operations; they do not permanently modify a real database.

## 4. Detailed API Test Cases

### TC-API-001: Verify Existing Post (GET)

**Endpoint:** `GET /posts/1`

**Preconditions:**
- API endpoint is accessible.
- Post ID 1 is available.

**Test Steps:**
1. Open Postman.
2. Select GET method.
3. Enter `https://jsonplaceholder.typicode.com/posts/1`.
4. Click Send.
5. Verify the response status and JSON body.

**Expected Result:**
- Status code should be 200 OK.
- Response should contain an ID.
- Post ID should be 1.
- Response should contain a title.

**Actual Result:** API returned 200 OK with the expected post details.

**Assertions:** 4 passed.

**Status:** PASS

---

### TC-API-002: Verify Non-existing Post (GET)

**Endpoint:** `GET /posts/9999`

**Preconditions:**
- API endpoint is accessible.
- Requested post ID does not exist.

**Test Steps:**
1. Open Postman.
2. Select GET method.
3. Enter `https://jsonplaceholder.typicode.com/posts/9999`.
4. Click Send.
5. Verify the response status and body.

**Expected Result:**
- Status code should be 404 Not Found.
- Response body should be an empty JSON object.

**Actual Result:** API returned 404 Not Found with an empty JSON object.

**Assertions:** 2 passed.

**Status:** PASS

---

### TC-API-003: Create New Post (POST)

**Endpoint:** `POST /posts`

**Preconditions:**
- API endpoint is accessible.
- Request body is configured with valid JSON data.

**Test Data:**

```json
{
  "title": "ProofLayer API Testing",
  "body": "Testing POST request using Postman",
  "userId": 1
}
```

**Test Steps:**
1. Open Postman.
2. Select POST method.
3. Enter `https://jsonplaceholder.typicode.com/posts`.
4. Select Body → raw → JSON.
5. Enter the test data.
6. Click Send.
7. Verify the response.

**Expected Result:**
- Status code should be 201 Created.
- Response should contain a post ID.
- Response title should match the request title.
- Response userId should be 1.

**Actual Result:** API returned 201 Created with the expected response fields and generated ID.

**Assertions:** 4 passed.

**Status:** PASS

---

### TC-API-004: Update Existing Post (PUT)

**Endpoint:** `PUT /posts/1`

**Preconditions:**
- API endpoint is accessible.
- Existing post ID is 1.

**Test Data:**

```json
{
  "id": 1,
  "title": "Updated ProofLayer API Testing",
  "body": "Testing PUT request using Postman",
  "userId": 1
}
```

**Test Steps:**
1. Open Postman.
2. Select PUT method.
3. Enter `https://jsonplaceholder.typicode.com/posts/1`.
4. Select Body → raw → JSON.
5. Enter the updated post data.
6. Click Send.
7. Verify the response fields.

**Expected Result:**
- Status code should be 200 OK.
- Response ID should be 1.
- Title should be updated correctly.
- Body should be updated correctly.

**Actual Result:** API returned 200 OK with the expected updated title and body.

**Assertions:** 4 passed.

**Status:** PASS

---

### TC-API-005: Partially Update Post (PATCH)

**Endpoint:** `PATCH /posts/1`

**Preconditions:**
- API endpoint is accessible.
- Existing post ID is 1.

**Test Data:**

```json
{
  "title": "ProofLayer PATCH Testing"
}
```

**Test Steps:**
1. Open Postman.
2. Select PATCH method.
3. Enter `https://jsonplaceholder.typicode.com/posts/1`.
4. Select Body → raw → JSON.
5. Enter the updated title.
6. Click Send.
7. Verify the response.

**Expected Result:**
- Status code should be 200 OK.
- Response ID should be 1.
- Title should match the updated title.
- Response should contain userId.

**Actual Result:** API returned 200 OK with the expected updated title and userId.

**Assertions:** 4 passed.

**Status:** PASS

---

### TC-API-006: Delete Existing Post (DELETE)

**Endpoint:** `DELETE /posts/1`

**Preconditions:**
- API endpoint is accessible.
- Existing post ID is 1.

**Test Steps:**
1. Open Postman.
2. Select DELETE method.
3. Enter `https://jsonplaceholder.typicode.com/posts/1`.
4. Click Send.
5. Verify the response status and body.
6. Verify response time.

**Expected Result:**
- Status code should be 200 OK.
- Response body should be an empty JSON object.
- Response time should be below 1000 ms.

**Actual Result:** API returned 200 OK with an empty JSON object. The response-time assertion passed.

**Assertions:** 3 passed.

**Status:** PASS

---

## 5. Test Execution Summary

| Test Case | HTTP Method | Assertions | Result |
|---|---|---:|---|
| TC-API-001 | GET | 4 | PASS |
| TC-API-002 | GET | 2 | PASS |
| TC-API-003 | POST | 4 | PASS |
| TC-API-004 | PUT | 4 | PASS |
| TC-API-005 | PATCH | 4 | PASS |
| TC-API-006 | DELETE | 3 | PASS |
| **Total** | | **21** | **21 Passed** |

## 6. Final Result

All 21 automated assertions passed during the recorded Postman Collection Runner execution.

- Total assertions: 21
- Passed: 21
- Failed: 0
- Skipped: 0
- Runner errors: 0

**Overall Result: PASS**

## 7. Learning Outcomes

Through this API testing exercise, the following concepts were practised:

- Understanding REST API requests and responses.
- Working with GET, POST, PUT, PATCH and DELETE methods.
- Validating HTTP status codes.
- Sending JSON request bodies.
- Verifying response properties and values.
- Performing positive and negative API testing.
- Writing automated assertions in Postman.
- Executing a collection using Postman Collection Runner.