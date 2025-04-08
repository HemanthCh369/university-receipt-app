# University Receipt App

## Overview
The University Receipt App is a simple web application that allows university employees to submit receipts for reimbursement. The app includes a frontend form for users to upload receipts and a backend API to handle the receipt data. It demonstrates the ability to accept form data, validate it, handle file uploads, and persist data to a backend.

## Tech Stack
- **Frontend**: React.js (for building the user interface)
- **Backend**: Node.js with Express (for handling API requests)
- **File Upload Handling**: Multer (for handling receipt file uploads)
- **Database**: SQLite (or any preferred relational database for data persistence)
- **API**: RESTful API for receiving receipt data
- **Authentication (Optional)**: Not included in this exercise

## Features
- Users can fill in the date, amount, description, and upload a receipt (image file).
- The backend processes the form data and stores the receipt information.
- Simple validation checks ensure all fields are submitted.
- File uploads are processed and stored securely in the `uploads` directory.
- Error messages are shown to the user if any fields are missing or the file is invalid.

## How to Run the App

### 1. Clone the Repository
Clone the repository to your local machine using the following command:
```bash
git clone https://github.com/HemanthCh369/university-receipt-app.git
