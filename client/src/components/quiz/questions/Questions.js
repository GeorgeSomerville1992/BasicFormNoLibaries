import React from 'react'
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import Question from './question/Question';
import QuestionChoices from './question-choices/QuestionChoices';
import AnsweredQuestion from './answered-question/AnsweredQuestion';
import './questions.css';

const Questions = (props) => {
  const { questions, answers, selectedChoices, setSelectedChoices } = props;

  return questions.map((question) => {
    const answeredQuestion = answers && answers.find(answer => answer.id === question.id);
  
    return <Row key={question.id} className='questions-row'>
      <Col span={24}>
        <Question question={question}>
          <QuestionChoices choices={question.choices} questionId={question.id} selectedChoices={selectedChoices} setSelectedChoices={setSelectedChoices } />
          {answeredQuestion && <AnsweredQuestion answeredQuestion={answeredQuestion} />}
        </Question>
      </Col>
    </Row>
  });
}

Questions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })),
  answers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    correct: PropTypes.bool.isRequired
  })),
  selectedChoices: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string
  })),
  setSelectedChoices: PropTypes.func.isRequired
}

Questions.defaultProps = {
  selectedChoices: []
}

export default Questions;
