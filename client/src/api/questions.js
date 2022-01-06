import axios from 'axios';

const fetchQuestions = async () => {
  const res = await axios.get(`http://localhost:4000/questions`);
  return res.data;
};

const submitChoices = async (choices) => {
  const res = await axios.post(`http://localhost:4000/questions`, {choices});
  return res.data;
};

export { fetchQuestions, submitChoices };

