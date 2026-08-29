# Restful-Booker System Requirements

## 1. Project Overview

Restful-Booker is a hotel booking application that allows users to view available rooms and make hotel reservations. The system also provides an administration interface for managing hotel rooms, bookings, and customer messages.

## 2. Project Objective

The objective of this QA project is to verify that the different components of the Restful-Booker application integrate correctly and that data is transferred accurately between the user interface, APIs, backend services, and database.

## 3. Main System Components

The system consists of the following major components:

- Web Frontend
- Authentication Service
- Room Service
- Booking Service
- Contact/Messaging Service
- Database

## 4. Main Functional Areas

### 4.1 Home

Users can access the main hotel website and navigate to the available sections of the application.

### 4.2 Rooms

Users can:

- View available rooms
- View room information
- Select a room
- Proceed to booking

### 4.3 Booking

Users can:

- Enter booking information
- Select booking dates
- Submit a booking
- Receive booking confirmation

### 4.4 Contact

Users can submit contact information and messages through the contact form.

### 4.5 Authentication

Authorized users can authenticate and access protected administrative functionality.

### 4.6 Administration

Administrators can access protected functionality for managing hotel information and bookings.

## 5. Integration Points

The following integration points will be investigated during testing:

### IP-01: Frontend → Room Service

The frontend retrieves room information from the backend and displays the information to the user.

### IP-02: Frontend → Booking Service

The frontend sends booking information to the backend when a user submits a reservation.

### IP-03: Booking Service → Database

Booking information submitted through the application is processed and stored by the backend.

### IP-04: Booking → Administration

A booking created by a customer should be available to authorized administrative functionality.

### IP-05: Frontend → Contact/Messaging Service

Contact information and messages submitted through the frontend are sent to the backend for processing.

### IP-06: Authentication → Protected Services

Authentication is required before authorized users can access protected administrative functionality.

## 6. Testing Scope

The testing project will focus on:

- Functional testing
- Integration testing
- API testing
- Database validation
- UI testing
- End-to-end testing
- Negative testing
- Regression testing
- Authentication and authorization testing

## 7. Testing Tools

The project will use:

- Playwright
- TypeScript
- Postman
- Newman
- SQL
- Git
- GitHub
- GitHub Actions

## 8. Out of Scope

The initial project will not focus on:

- Performance testing
- Load testing
- Penetration testing
- Production infrastructure testing

These may be considered separately if required.

## 9. Test Environment

Testing will initially be performed against the publicly available Restful-Booker test application.

Test execution will be performed using:

- Web browser
- Postman
- SQL/database tools where applicable
- Playwright
- GitHub/GitHub Actions

## 10. Expected QA Outcome

The objective is to determine whether the system components communicate correctly, whether data remains consistent between components, and whether the application behaves according to its expected functionality.

Testing results, defects, evidence, and recommendations will be documented throughout the project.