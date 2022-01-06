import { render, screen } from '@testing-library/react';
import { createServer } from "miragejs"
import Quiz from './Quiz';

const questions = {
    "subject": "Geography",
    "questions": [  {
      "id": "1",
      "text": "Which of these U.S. states does NOT border Canada?",
      "choices": ["Minnesota", "Indiana", "Alaska", "Maine"],
      "answer": "Indiana"
    }
  ]
}

const answers = [
  {"id": "1", "correct": false}
]

describe('Quiz', () => {

  let server

  beforeEach(() => {
    server = createServer();
  });

  afterEach(() => {
    server.shutdown()
  });

  test('User can see error screen from gracefully handled app', async () => {
    // Assemble
    const errorMessage = 'network​ ​unavailable'
    server.get("http://localhost:4000/questions", { errors: [errorMessage] }, 500);

    // Act
    render(<Quiz />);

    // Assert
    expect(await screen.findByText('Error')).toBeVisible();
    expect(screen.getByText('Submit').closest('button')).toBeDisabled();
  });

  test('User can see questions from mocked data', async () => {
    // Assemble
    server.get("http://localhost:4000/questions", () => questions);
    // Act
    const { queryAllByRole } = render(<Quiz />);

    // Assert
    expect(await screen.findByText(`Subject: ${questions.subject}`)).toBeVisible();
    expect(queryAllByRole('radio').length).toBe(4);
  });

  test('User can only submit questions when all are filled out', async () => {
    // Assemble
    server.get("http://localhost:4000/questions", () => questions);

    // Act
    render(<Quiz />);

    // Assert
    expect(await screen.findByText(`Subject: ${questions.subject}`)).toBeVisible();
    expect(screen.getByText('Submit').closest('button')).toBeDisabled();
  });

  test('User submits questions and is presented with each one correct/incorrect along with score', async () => {
    // Assemble
    server.get("http://localhost:4000/questions", () => questions);
    server.post("http://localhost:4000/questions", () => answers);

    // Act
    render(<Quiz />);
    await(await screen.findByText('Minnesota')).click();
    await(await (screen.findByText('Submit'))).click();

    // Assert
    expect(await screen.findByText('Incorrect!')).toBeVisible();
    expect(await screen.findByText('Score: 0')).toBeVisible();
  });
});
