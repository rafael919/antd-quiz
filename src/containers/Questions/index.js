import React from 'react';
import { Layout } from 'antd';

import { getQuestions } from '../../services/ApiService';
import QuestionCard from '../../components/QuestionCard';
import QuestionProgressBar from '../../components/QuestionProgressBar';
import Answers from '../../components/Answers';

const { Content } = Layout;

const Questions = () => {
  const [quizList, setQuizList] = React.useState([]);
  const [selectedQuiz, setQuiz] = React.useState(0);
  const [quizDone, setQuizDone] = React.useState(0);

  React.useEffect(() => {
    getQuestions().then(info => {
      if (info && info.length) {
        const quizList = info.filter(e => e.type === 'radio' && e.input_type === 'text').sort((a, b) => a.id - b.id);
        setQuizList(quizList);
      }
    });
  }, []);

  const setQuizIndex = type => () => {
    if (type === 'next') {
      setQuiz(selectedQuiz + 1);
      if (selectedQuiz > quizList.length - 2) {
        setQuizDone(1);
      }
    } else {
      setQuiz(selectedQuiz - 1);
    }
  };

  const selectQuiz = id => e => {
    const value = e.target.value;
    const foundIndex = quizList.findIndex(e => e.id === id);
    if (foundIndex >= 0) {
      quizList[foundIndex].answer = value;
      setQuizList([...quizList]);
    }
  };

  const sendEmail = () => {
    console.log(quizList);
  };

  return (
    <Layout className="container">
      <Content className="content">
        {quizDone === 0 ? (
          <>
            <QuestionProgressBar value={(100 * (selectedQuiz + 1)) / quizList.length} />
            {quizList[selectedQuiz] ? (
              <QuestionCard
                quiz={quizList[selectedQuiz]}
                setQuizIndex={setQuizIndex}
                prevBtnDisabled={selectedQuiz <= 0}
                nextBtnDisabled={
                  quizList[selectedQuiz].answer < 0 ||
                  quizList[selectedQuiz].answer > quizList[selectedQuiz].input.length - 1
                }
                nextBtnUpdate={selectedQuiz > quizList.length - 2}
                selectQuiz={selectQuiz}
                answer={quizList[selectedQuiz].answer}
              />
            ) : (
              <div>Loading...</div>
            )}
          </>
        ) : (
          <Answers questions={quizList} sendEmail={sendEmail} />
        )}
      </Content>
    </Layout>
  );
};

export default Questions;
