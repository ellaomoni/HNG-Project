const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

const PORT = process.env.PORT || 3000;

app.use(cors());

// Function to check if number is prime
const prime = (number) => {
   if (number < 2) return false;
   for(let i =2; i <= Math.sqrt(number); i++) {
    if(number % i === 0) return false;
   }
   return true;
};

// Function to check if number is a perfect Number
const perfectNumber = (number) => {
  if(number <= 2) return false;
  let sum = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0 ) sum += i;
  }
  return sum === number;
}

// Function to check if a number is an Armstrong number 

const armstrongNumber = (number) => {
    const absNum = Math.abs(number);
    const values = absNum.toString().split("").map(Number);
    const power = values.length;
    const sum = values.reduce((acc, value) => acc + Math.pow(value, power), 0);
    return sum === absNum;
    
}

// Function to get sum of values 
const sum = (number) => {
    return Math.abs(number).toString().split("").reduce((sum, value) => sum + Number(value), 0);
};

app.get("/api/classify-number", async (req, res) => {

    const { number } = req.query;

    //validate input 
    if(!number || isNaN(number)) {
        console.error("Invalid input:", number);
        return res.status(400).json
        ({
            number: number || "",
            error: true
        });
    }

    const num = parseInt(number);

    //Determine properties 
    let properties = [];
  if (armstrongNumber(num)) properties.push("armstrong");
    properties.push(num % 2 === 0 ? "even" : "odd");


    let funFact = "Not available";
    try{
        const funFactResponse = await axios.get(`http://numbersapi.com/${num}/math`, {timeout: 5000});
        funFact = funFactResponse.data;

         res.status(200).json({
            number: num,
            is_prime: prime(num),
            is_perfect: perfectNumber(num),
            properties: properties,
            digit_sum: sum(num),
            fun_fact: funFact,
        });

    } catch (error) {
        console.error(`Error fetching fun fact for ${num}: ${error.message}`);
    }

       

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

