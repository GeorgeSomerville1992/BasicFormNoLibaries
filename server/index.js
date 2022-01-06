const express = require('express');
const cors = require('cors');
const randomIntFromInterval = require('./utils/randomIntFromInterval');
const questions = require('./questions/questions');
const questionsJSON = require('./utils/questions.json');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/questions', (req, res) => {
  const chosenQuestionsNumber = randomIntFromInterval(0, 1);
  res.send(questionsJSON[chosenQuestionsNumber]);
});

app.post('/questions', (req, res) => {
  const { choices } = req.body;

  const results = questions.markSubmittedQuestions(choices);

  res.status(201).send(results);
});

app.listen(4000, () => {
  console.log('listening on 4000')
});
