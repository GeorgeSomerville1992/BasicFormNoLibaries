const questions = require('./questions');

describe('questions', () => {
  test('markSubmittedQuestions', () => {
    const submittedChoices = [
      { id: "6", value: "Sweden" },
      { id: "7", value: "John Glenn" },
      { id: "8", value: "Alexandria" },
      { id: "9", value: "Egypt" },
      { id: "10", value: "Charles Dickens" }]
    
    expect(questions.markSubmittedQuestions(submittedChoices)).toEqual([
      {correct: true, id: "6"},
      {correct: false, id: "7"},
      {correct: true, id: "8"},
      {correct: false, id: "9"},
      {correct: false, id: "10"},
    ])
  });
});
