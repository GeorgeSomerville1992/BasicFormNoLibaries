import React from 'react';

const AnsweredQuestion = ({answeredQuestion}) => {
  return answeredQuestion.correct ? <span> Correct! </span> : <span>Incorrect!</span>
}

export default AnsweredQuestion;
