import React, { useState, useEffect } from 'react';
import { fetchQuestions, submitChoices } from '../../api/questions';
import { Button } from 'antd';
import Questions from './questions/Questions';
import Score from './score/Score';
import pushNotification  from '../../utils/pushNotification';
import './quiz.css';

const Quiz = () => {
  const [quiz, setQuiz] = useState([]);
  const [selectedChoices, setSelectedChoices] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);

  const onSubmit = async () => {
    try {
      const answers = await submitChoices(selectedChoices);
      setAnswers(answers);
    } catch(error) {
      pushNotification('error', `${error}`);
    }
  };

  const fetchData = async () => {
    setIsloading(true);
    try {
      const data = await fetchQuestions();
      setQuiz(data);
    } catch (error) {
      setHasErrors(true);
      pushNotification('error', `${error}`);
    }
  
    setIsloading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const hasScore = answers.length !== 0;
  const isSubmitButtonDisabled = selectedChoices.length !== quiz?.questions?.length

  return <div className='quiz-container'>
    <h2>
      {isLoading && 'Loading..'}
      {hasErrors ? 'Error' : `Subject: ${quiz.subject}`}
    </h2>
    <div className='questions-container'>
      {quiz?.questions && <Questions questions={quiz.questions} answers={answers} selectedChoices={selectedChoices} setSelectedChoices={setSelectedChoices} /> }
      {hasErrors && <div>Oops! something has gone wrong, please contact software Engineering </div>}
    </div>
    <Button className='quiz-submit-button' disabled={isSubmitButtonDisabled || hasErrors} onClick={onSubmit}>Submit</Button>
    {hasScore && <Score answers={answers} />}
  </div>
}

export default Quiz;
