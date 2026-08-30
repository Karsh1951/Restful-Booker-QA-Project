# Restful-Booker QA Project — Test Plan

## 1. Document Information

| Item             | Details                   |
| ---------------- | ------------------------- |
| Project          | Restful-Booker QA Project |
| Document         | Test Plan                 |
| Testing Type     | Integration Testing       |
| Test Automation  | Playwright                |
| API Testing      | Postman / Newman          |
| Database Testing | SQL                       |
| Version          | 1.0                       |

---

## 2. Test Plan Objective

The objective of this test plan is to define the approach, scope, resources, and activities required to test the Restful-Booker application.

The primary focus of this project is to verify that the different components of the application communicate correctly and that information is transferred and processed accurately between the frontend, APIs, backend services, and database.

---

## 3. Testing Objectives

The testing objectives are to:

1. Verify that application components integrate correctly.
2. Verify that data is correctly transferred between system components.
3. Verify that booking information is processed correctly.
4. Verify that room information displayed on the frontend corresponds with backend data.
5. Verify that submitted customer information is processed correctly.
6. Verify authentication and access to protected functionality.
7. Identify integration defects.
8. Validate API responses and error handling.
9. Validate data stored in the database where database access is available.
10. Automate suitable regression and end-to-end test scenarios.

---

## 4. Test Scope

### 4.1 In Scope

The following areas are included in testing:

* Home page functionality
* Room browsing
* Room selection
* Booking functionality
* Contact functionality
* Authentication
* Administrative functionality
* REST API functionality
* API-to-API interactions
* Frontend-to-API interactions
* API-to-database interactions where accessible
* Authentication and authorization
* Positive test scenarios
* Negative test scenarios
* Regression testing
* End-to-end testing

### 4.2 Out of Scope

The following are outside the initial scope:

* Performance testing
* Load testing
* Stress testing
* Penetration testing
* Production infrastructure testing
* Security penetration testing

---

## 5. Test Levels

The project will include the following testing levels:

### 5.1 Component Testing

Individual components or services will be tested independently where applicable.

Examples:

* Room API
* Booking API
* Authentication API

### 5.2 Integration Testing

Integration testing will verify communication between two or more components.

Examples:

* Frontend → Room API
* Frontend → Booking API
* Booking API → Database
* Authentication → Protected API
* Booking → Administration

### 5.3 End-to-End Testing

End-to-end testing will validate complete business flows through the application.

Example:

User selects a room → enters booking details → submits booking → booking is processed → confirmation is displayed.

---

## 6. Integration Testing Approach

Integration testing will follow a risk-based approach.

Priority will be given to integrations that directly affect core business functionality.

### High Priority Integrations

* Authentication
* Room retrieval
* Booking creation
* Booking retrieval
* Booking management

### Medium Priority Integrations

* Contact form
* Room information updates
* Administrative functionality

### Integration Validation

For each integration, testing will verify:

* Request data
* Response data
* HTTP status codes
* Response structure
* Data consistency
* Error handling
* Authentication requirements
* Authorization requirements
* Data persistence where applicable

---

## 7. Test Types

The following test types will be performed:

### Functional Testing

Verify that features perform their expected functions.

### Integration Testing

Verify that multiple application components communicate correctly.

### API Testing

Verify REST API endpoints, requests, responses, status codes, authentication, and error handling.

### Database Testing

Verify that application data is correctly stored and retrieved from the database where database access is available.

### UI Testing

Verify that the frontend correctly displays and processes user interactions.

### End-to-End Testing

Verify complete business workflows.

### Negative Testing

Verify that the application handles invalid input, invalid requests, and unauthorized access correctly.

### Regression Testing

Verify that changes do not negatively affect existing functionality.

---

## 8. Test Environment

Testing will initially be performed against the publicly available Restful-Booker test environment.

### Tools

* Web browser
* Postman
* Newman
* Playwright
* TypeScript
* SQL
* Git
* GitHub
* GitHub Actions

---

## 9. Test Data

Test data will include:

* Valid user information
* Invalid user information
* Valid booking information
* Invalid booking information
* Valid room information
* Invalid room information
* Valid authentication credentials
* Invalid authentication credentials
* Boundary and negative test data

Test data will be documented and maintained separately from test cases where practical.

---

## 10. Entry Criteria

Testing can begin when:

* The test environment is accessible.
* Required application functionality is available.
* Test requirements have been identified.
* Test data is available.
* Required testing tools are installed.
* API endpoints required for testing are accessible.

---

## 11. Exit Criteria

Testing may be considered complete when:

* Planned test cases have been executed.
* Critical integration scenarios have been tested.
* Critical and high-severity defects have been addressed or formally accepted.
* Regression testing has been completed.
* Test results have been documented.
* Remaining risks have been identified.
* A final test summary has been prepared.

---

## 12. Defect Management

Defects identified during testing will be documented with:

* Defect ID
* Title
* Description
* Environment
* Preconditions
* Steps to reproduce
* Expected result
* Actual result
* Severity
* Priority
* Evidence
* Status

Defects will be tracked through their lifecycle:

**New → Assigned → In Progress → Fixed → Retest → Closed**

If a defect remains unresolved:

**Retest → Reopened**

---

## 13. Severity Classification

| Severity | Description                                       |
| -------- | ------------------------------------------------- |
| Critical | Prevents a major business function from operating |
| High     | Major functionality is significantly affected     |
| Medium   | Functionality is affected but a workaround exists |
| Low      | Minor issue with limited functional impact        |

---

## 14. Risks

| Risk                              | Impact                                  | Mitigation                                       |
| --------------------------------- | --------------------------------------- | ------------------------------------------------ |
| Test environment unavailable      | Testing cannot continue                 | Verify environment availability before execution |
| API changes                       | Existing tests may fail                 | Review API behavior before regression            |
| Test data changes                 | Results may become inconsistent         | Maintain controlled test data                    |
| External dependencies unavailable | Integration tests may fail              | Document dependency failures separately          |
| Limited database access           | Database validation may not be possible | Validate through API responses where appropriate |
| Application state changes         | Tests may produce inconsistent results  | Reset or control test data where possible        |

---

## 15. Test Deliverables

The project will produce:

1. System Requirements
2. Test Plan
3. Test Scenarios
4. Test Cases
5. Postman API Collection
6. API Test Results
7. SQL Validation Queries
8. Integration Test Results
9. Playwright Automation Tests
10. Defect Reports
11. Regression Test Results
12. Test Execution Report
13. Final Test Summary Report
14. GitHub Repository Documentation

---

## 16. Test Execution Strategy

Testing will be performed progressively.

### Phase 1 — Requirement Analysis

Understand the application and identify integration points.

### Phase 2 — Test Design

Create test scenarios and detailed test cases.

### Phase 3 — Manual Testing

Execute important workflows manually to understand system behavior.

### Phase 4 — API Testing

Test API endpoints using Postman.

### Phase 5 — Database Validation

Validate persisted data using SQL where database access is available.

### Phase 6 — Integration Testing

Verify communication between system components.

### Phase 7 — Automation

Automate suitable UI and end-to-end scenarios using Playwright.

### Phase 8 — Regression Testing

Execute automated and manual regression tests after changes.

### Phase 9 — Reporting

Document results, defects, coverage, risks, and recommendations.

---

## 17. Overall Test Flow

The overall testing process will follow:

**Requirements → Test Planning → Test Scenarios → Test Cases → Manual Testing → API Testing → Database Validation → Integration Testing → Automation → Regression Testing → Test Reporting**

---

## 18. Approval

| Role          | Name         | Status  |
| ------------- | ------------ | ------- |
| QA Engineer   | Gifton Karsh | Draft   |
| Reviewer      | TBD          | Pending |
| Project Owner | TBD          | Pending |
