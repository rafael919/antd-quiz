import React from 'react';
import { Typography, Card, Radio, Row, Col, Button } from 'antd';

const { Text } = Typography;

const QuestionCard = ({ quiz, setQuizIndex, prevBtnDisabled, nextBtnDisabled, nextBtnUpdate, selectQuiz, answer }) => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title={`Question ${quiz.id}`}>
        <div className="quiz-container">
          <div>
            <Typography>
              <Text>
                Q: <Text strong>{quiz.question}</Text>
              </Text>
              <br />
              <Text type="secondary">{quiz.explanation}</Text>
            </Typography>
            <Radio.Group onChange={selectQuiz(quiz.id)} value={answer}>
              {quiz.input.map((q, index) => (
                <Radio key={index} value={index} className="radio-content">
                  {q}
                </Radio>
              ))}
            </Radio.Group>
          </div>
          <Row justify="space-between">
            <Col span={6}>
              <Button type="primary" disabled={prevBtnDisabled} onClick={setQuizIndex('prev')}>
                Prev
              </Button>
            </Col>
            <Col span={6}>
              <Row justify="end">
                <Button type="primary" disabled={nextBtnDisabled} onClick={setQuizIndex('next')}>
                  {nextBtnUpdate ? 'Done' : 'Next'}
                </Button>
              </Row>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
};

export default QuestionCard;
