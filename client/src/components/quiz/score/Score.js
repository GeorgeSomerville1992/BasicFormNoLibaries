import React, { useEffect, useState } from 'react';

const Score = ({answers}) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    let score = 0;

    if(answers) {
      answers.forEach((answer) => {
        if(answer.correct) {
          score +=1
        }
      });
    }
    setScore(score);
  }, [answers])
  
  return <span> Score: {score} </span>
}

export default Score;