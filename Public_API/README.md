# Basic API

## Description
This is a basic API built with Node.js to retrieve my basic information in JSON format fro HNG task 0, a public API that returns my registered email address on HNG12 Slack workspace, the current data time and The GitHub URL of the repository.

## Features
- Returns basic information via `/my_info` endpoint.
- Handles Cross-Origin Resource Sharing (CORS).

## Technologies
- Node.js
- Express
- CORS
- dotenv

## Installation
 1. Clone the repository:
    ```bash
   git clone https://github.com/ellaomoni/HNG-Project.git

 2. Navigate to the project repository
     ```bash 
    cd Public_API 
    
 3. Install Dependencies
   npm install

## Environment Configuration
Create dotenv file in root directory 
PORT = 3000

## Start Server 
npm start 
The server runs on http://localhost:3000

## API Endpoint 

http://localhost:3000/my_info

## API Documentation
- Get information
URL: /my_info
Method: GET
Response: 
{
  "email": "ellaomoni@gmail.com",
  "current_datetime": "2025-01-28T23:12:45.856Z",
  "github_url": "https://github.com/ellaomoni/HNG-Project.git"

}

### Example usage
curl https://basic-api-wppe.onrender.com/my_info

### Backlinks
[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

### Deployment
https://basic-api-wppe.onrender.com/my_info



Author 
Emmanuella Omoni - Backend Developer 
Email: ellaomoni@gmail.com


