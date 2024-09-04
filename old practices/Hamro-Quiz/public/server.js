const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const correctAnswers = {
  "Which language is used for styling web pages?": "c",
  "What does HTML stand for?": "c",
  "Which built-in method combines the text of two strings and returns a new string?": "b",
};

app.use(bodyParser.json());

app.post('/validate', (req, res) => {
  const { question, answer } = req.body;
  const correctAnswer = correctAnswers[question];
  
  res.json({ correct: answer === correctAnswer });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
