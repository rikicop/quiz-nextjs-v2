export const shuffleAnswers = (question) => {
  if (!question) {
    return [];
  }
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];
  return (
    unshuffledAnswers
      //Asigno un index aleatorio a cada uno para poderlos desordenar
      .map((answer) => ({ sort: Math.random(), value: answer }))
      .sort((a, b) => a.sort - b.sort) //Nuevo orden con respecto a los nuevos index
      .map((a) => a.value) //map y obtengo las answers siiin los index
  );
};
