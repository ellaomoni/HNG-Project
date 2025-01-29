const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(cors());

// Route to get my basic information 
app.get('/my_info', (req, res) => {
    res.json({
        email: 'ellaomoni@gmail.com',
        current_datetime: new Date().toISOString(),
        github_url: 'https://github.com/ellaomoni/HNG-Project.git'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});