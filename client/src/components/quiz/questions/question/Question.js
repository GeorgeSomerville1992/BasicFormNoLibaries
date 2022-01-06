import React from 'react';

const Question = (props) => {
  const { question } = props;
  return <div key={question.id}>
    <h3>{question.text}</h3>
    {props.children}
  </div>;
}

export default Question;