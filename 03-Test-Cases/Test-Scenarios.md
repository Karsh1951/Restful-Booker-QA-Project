# Restful-Booker QA Project — Test Scenarios

## 1. Purpose

The purpose of these test scenarios is to identify the major integration flows that must be validated across the Restful-Booker application.

The scenarios focus on interactions between the frontend, APIs, backend services, authentication, and persistent application data where validation is possible.

---

# 2. Room Integration Scenarios

### INT-ROOM-001 — Retrieve room information

**Objective:** Verify that the application can retrieve room information from the backend and display it correctly to the user.

**Integration:** Frontend → Room API

**Priority:** High

---

### INT-ROOM-002 — Display room details

**Objective:** Verify that selecting a room retrieves and displays the corresponding room information.

**Integration:** Frontend → Room API

**Priority:** High

---

### INT-ROOM-003 — Handle unavailable/invalid room data

**Objective:** Verify that the application handles an invalid or unavailable room response correctly.

**Integration:** Frontend → Room API

**Priority:** Medium

---

# 3. Booking Integration Scenarios

### INT-BOOK-001 — Create a booking

**Objective:** Verify that booking information submitted through the frontend is successfully sent to the booking service and a booking is created.

**Integration:** Frontend → Booking API

**Priority:** Critical

---

### INT-BOOK-002 — Verify booking confirmation

**Objective:** Verify that a successful booking response is correctly processed and confirmation is displayed to the user.

**Integration:** Booking API → Frontend

**Priority:** High

---

### INT-BOOK-003 — Retrieve created booking

**Objective:** Verify that a booking created through the application can subsequently be retrieved through the appropriate backend functionality.

**Integration:** Booking → Booking API

**Priority:** High

---

### INT-BOOK-004 — Verify booking information consistency

**Objective:** Verify that booking information submitted by the user remains consistent between the request, response, and retrieved booking information.

**Integration:** Frontend → Booking API

**Priority:** High

---

### INT-BOOK-005 — Handle invalid booking information

**Objective:** Verify that invalid booking information is handled correctly by the application and backend.

**Integration:** Frontend → Booking API

**Priority:** High

---

# 4. Authentication Integration Scenarios

### INT-AUTH-001 — Successful authentication

**Objective:** Verify that valid administrative credentials are successfully processed and authenticated access is granted.

**Integration:** Frontend → Authentication Service

**Priority:** Critical

---

### INT-AUTH-002 — Failed authentication

**Objective:** Verify that invalid authentication credentials are rejected correctly.

**Integration:** Frontend → Authentication Service

**Priority:** High

---

### INT-AUTH-003 — Access protected functionality

**Objective:** Verify that successful authentication allows access to protected administrative functionality.

**Integration:** Authentication → Protected Services

**Priority:** Critical

---

### INT-AUTH-004 — Reject unauthorized access

**Objective:** Verify that unauthenticated or unauthorized requests cannot access protected functionality.

**Integration:** Authentication → Protected Services

**Priority:** Critical

---

# 5. Administration Integration Scenarios

### INT-ADMIN-001 — View customer bookings

**Objective:** Verify that bookings created through the customer-facing application are available to authorized administrative functionality.

**Integration:** Booking Service → Administration

**Priority:** Critical

---

### INT-ADMIN-002 — Manage room information

**Objective:** Verify that authorized administrative actions affecting room information are correctly processed by the backend.

**Integration:** Administration → Room Service

**Priority:** High

---

### INT-ADMIN-003 — Verify booking updates

**Objective:** Verify that administrative changes to booking information are correctly processed and reflected when booking information is subsequently retrieved.

**Integration:** Administration → Booking Service

**Priority:** High

---

# 6. Contact/Messaging Integration Scenarios

### INT-CONTACT-001 — Submit contact message

**Objective:** Verify that information submitted through the contact form is successfully sent to the backend messaging functionality.

**Integration:** Frontend → Contact/Messaging Service

**Priority:** Medium

---

### INT-CONTACT-002 — Handle invalid contact information

**Objective:** Verify that invalid or incomplete contact information is handled correctly.

**Integration:** Frontend → Contact/Messaging Service

**Priority:** Medium

---

### INT-CONTACT-003 — Verify submitted message availability

**Objective:** Verify that a successfully submitted contact message is available through the appropriate administrative functionality where supported.

**Integration:** Contact/Messaging Service → Administration

**Priority:** Medium

---

# 7. Negative and Error Integration Scenarios

### INT-ERR-001 — API unavailable

**Objective:** Verify that the frontend handles an unavailable backend service appropriately.

**Integration:** Frontend → Backend Service

**Priority:** High

---

### INT-ERR-002 — Invalid API response

**Objective:** Verify that the application handles an unexpected or invalid backend response without causing incorrect application behavior.

**Integration:** Backend Service → Frontend

**Priority:** High

---

### INT-ERR-003 — Unauthorized API request

**Objective:** Verify that protected API functionality rejects requests without valid authentication.

**Integration:** Client → Protected API

**Priority:** Critical

---

### INT-ERR-004 — Backend validation failure

**Objective:** Verify that validation errors returned by the backend are correctly handled and communicated to the user.

**Integration:** Frontend → Backend Service

**Priority:** High

---

# 8. End-to-End Integration Scenarios

### INT-E2E-001 — Complete room booking flow

**Objective:** Verify the complete customer booking journey.

**Flow:**

User → Rooms → Select Room → Booking Form → Booking API → Booking Confirmation

**Priority:** Critical

---

### INT-E2E-002 — Booking visibility in administration

**Objective:** Verify that a booking created by a customer becomes available to an authorized administrator.

**Flow:**

Customer → Booking → Backend → Booking Data → Admin

**Priority:** Critical

---

### INT-E2E-003 — Authentication and protected functionality

**Objective:** Verify the complete authentication flow and access to protected functionality.

**Flow:**

Admin → Login → Authentication → Authorized Session → Protected Functionality

**Priority:** Critical

---

### INT-E2E-004 — Contact submission and administration

**Objective:** Verify the complete contact-message flow where supported.

**Flow:**

Customer → Contact Form → Messaging Service → Backend → Administration

**Priority:** Medium

---

# 9. Scenario Priority Summary

| Priority | Area           | Scenario Count |
| -------- | -------------- | -------------: |
| Critical | Booking        |              1 |
| Critical | Authentication |              3 |
| Critical | Administration |              1 |
| Critical | Negative/Error |              1 |
| Critical | End-to-End     |              3 |
| High     | Room           |              2 |
| High     | Booking        |              3 |
| High     | Authentication |              1 |
| High     | Administration |              2 |
| High     | Negative/Error |              3 |
| Medium   | Room           |              1 |
| Medium   | Contact        |              3 |

---

# 10. Testing Approach

The scenarios will be executed progressively:

1. Manual validation of the application workflow.
2. API validation using Postman.
3. API response and request validation.
4. Database validation where access is available.
5. Integration validation across components.
6. Playwright automation of suitable end-to-end scenarios.
7. Regression testing of automated scenarios.
