# User Story 1: Data Storage and Retrieval
Implement store and retrieve data about Facilities, Agents, and Shifts, so that I can maintain an accurate record of the organization's operations.

## Acceptance Criteria:

1. The database should have tables for Facilities, Agents, and Shifts
2. The database should have functionality for storing, retrieving, updating, and deleting data in each table
3. The system should have unit tests to ensure correct functionality of the data storage and retrieval functions

# User Story 2: Shift Retrieval by Facility
Implement retrieve all Shifts worked in a quarter, including metadata about the assigned Agents, for a given Facility

## Acceptance Criteria:

1. Create the `getShiftsByFacility` function should take a Facility ID as input and return a list of Shifts worked in the quarter for that Facility, along with metadata about the assigned Agents
2. The function should be unit tested to ensure correct functionality

# User Story 3: Report Generation
Implement generate a PDF report from a list of Shifts

## Acceptance Criteria:

1. The `generateReport` function should take a list of Shifts as input and generate a PDF report
2. The report should include all relevant information about each Shift, such as the Facility, the Agent assigned, and the time worked
3. The report should be unit tested to ensure correct functionality