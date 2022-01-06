import React from 'react';
import { Radio } from 'antd';
import selectCurrentChoice from './selectQuestionChoice';

const QuestionChoices = (props) => {
  const { choices, questionId, selectedChoices, setSelectedChoices } = props

  const onChoiceChange = (id) => (e) => {
    const currentChoiceObj = {
      id,
      value: e.target.value
    }

    const selectedChoicesArray = selectCurrentChoice(selectedChoices, id);

    setSelectedChoices([...selectedChoicesArray, currentChoiceObj]);
  };

  return <Radio.Group onChange={onChoiceChange(questionId)}>
    {choices.map((choice, index) => {
      return <Radio key={index} value={choice}>{choice}</Radio>
    })}
  </Radio.Group>
}

export default QuestionChoices;
