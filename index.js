const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// GET endpoint
app.get('/api/operation_code', (req, res) => {
    res.json({ operation_code: "1" });
});

// POST endpoint
app.post('/api/user_info', (req, res) => {
    const dataArray = req.body.data;

    // Filter out numbers and alphabets
    const numbers = dataArray.filter(item => !isNaN(item));
    const alphabets = dataArray.filter(item => isNaN(item));

    // Get the highest lowercase alphabet
    const lowerCaseAlphabets = alphabets.filter(char => char === char.toLowerCase());
    const highestLowerCaseAlphabet = lowerCaseAlphabets.sort().reverse()[0] || null;

    // Example User Data
    const userId = "sameer_17112003"; // You might want to set this based on logic
    const collegeEmailId = "sameer.2021@vitstudent.ac.in"; // This should come from user data
    const collegeRollNumber = "21BEC2328"; // This should also come from user data

    // Respond with the required data
    res.json({
        status: "true",
        user_id: userId,
        college_email_id: collegeEmailId,
        college_roll_number: collegeRollNumber,
        numbers: numbers,
        alphabets: alphabets,
        highest_lower_case_alphabet: highestLowerCaseAlphabet
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
