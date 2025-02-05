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
    let sum = 1;
    for(let i = 2; i <= number / 2; i++)
    {
        if(number % i === 0) sum += i;
    }
    return sum === number;
}

// Function to check if a number is an Armstrong number 

const armstrongNumber = (number) => {
    const values = number.toString().split("").map(Number);
    const power = values.length;
    const sum = values.reduce((acc, value) => acc + Math.pow(value, power), 0);
    return sum === number;
    
}

// Function to get sum of values 
const sum = (number) => {
    return number.toString().split("").reduce(( sum, value) => sum + Number(value), 0);

}

app.get("/api/classify-number", async (req, res) => {
    const { number } = req.query;

    //validate input 
    if(!number || isNaN(number)) {
        console.error("Invalid input:", number);
        return res.status(400).json({
            number: number,
            error: true
        });
    }

    const num = parseInt(number);

    //Determine properties 
    let properties = [];
  if (armstrongNumber(num)) properties.push("armstrong");
    properties.push(num % 2 === 0 ? "even" : "odd");



    try{
        const funFactresponse = await axios.get(`http://numbersapi.com/${number}/math`, {timeout: 5000});
        const funFact = funFactresponse.data;

        res.status(200).json({
            number: number,
            is_prime: prime(number),
            is_perfect: perfectNumber(number),
            properties: properties,
            digit_sum: sum(number),
            funFact: funFact,
        });
    }catch (error) {
        console.error(`Error fetching fun fact for ${num}: ${error.message}`);
        res.status(500).json({
            number: number,
            error: "Unable to fetch fun fact."
        });
    }

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

