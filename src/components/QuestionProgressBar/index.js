import React from 'react';
import { Progress } from 'antd';

const QuestionProgressBar = ({ value }) => {
  return (
    <div className="progress-bar">
      <Progress percent={value} showInfo={false} />
    </div>
  );
};

export default QuestionProgressBar;
