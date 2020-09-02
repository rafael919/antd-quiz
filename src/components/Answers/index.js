import React from 'react';
import { Typography, Card, Row, Button } from 'antd';

const { Text } = Typography;

const Answers = ({ questions, sendEmail }) => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title={`Answers`}>
        <div className="quiz-container">
          {questions.map(quiz => (
            <Typography key={quiz.id}>
              <Text>
                Q{quiz.id}: <Text strong>{quiz.question}</Text>
              </Text>
              <br />
              <Text type="secondary"> - {quiz.input[quiz.answer]}</Text>
            </Typography>
          ))}
          <Row justify="center">
            <Button type="primary" onClick={sendEmail}>
              Send
            </Button>
          </Row>
        </div>
      </Card>
    </div>
  );
};

export default Answers;
