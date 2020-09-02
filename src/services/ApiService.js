export const getQuestions = async () => {
  const res = await fetch(`https://gezondheidschecks.com/tests/iq`);
  const post = await res.json();
  return post.questions.splits.default;
};
