const answers = require('../utils/answers.json');

const markSubmittedQuestions = (submittedQuestions) => {
  const markedQuestions = [];
  submittedQuestions.forEach((choice) => {
    const matchedQuestion = answers.find((question) => question.id === choice.id);
    const result = {
      id: choice.id,
      correct: matchedQuestion.answer === choice.value
    }
    markedQuestions.push(result);
  });
  return markedQuestions;
};

module.exports = { markSubmittedQuestions };
