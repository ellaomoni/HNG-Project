# Number Classification API

## Description
The Number Classification API is a RESTful API for that allows users to classify a number based on its various mathematical properties such as prime number, perfect number,Armstrong number,even or odd,fun fact retrieval(using Numbers API).

## Features 
- Check if a number is prime.
- Check if a number is perfect.
- Determine if a number is an Armstrong number.
- Identify if a number is even or odd.
- Compute the sum of its digits.
- Fetch a fun fact about the number from an external API(Number API).

## Technologies Used
- Node.js 
- Express.js 
- Axios (HTTP Client for API requests)
- CORS (Cross-Origin Resource Sharing)
- Dotenv 

## Installation and set up 
- Clone the repository
git clone https://github.com/ellaomoni/HNG-Project.git
cd Number_API

- Install Dependencies


- Environment Configuration
Create dotenv file in root directory 
PORT = 3000

- Run server 
node app.js

Server will start on http://localhost:3000

## API Documentation
Method: GET
URL: /api/classify-number
Response: 
{
    "number":"370",
    "is_prime":false,
    "is_perfect":false,
    "properties":["armstrong","even"],
    "digit_sum":10,
    "funFact":"370 is a narcissistic number."
}

## Example  Usage
curl http://localhost:3000/api/classify-number?number=370

## Backlinks
[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

## Deployment 
https://classify-numbers.onrender.com/api/classify-number?number=371


Author 
Emmanuella Omoni - Backend Developer 
Email: ellaomoni@gmail.com








