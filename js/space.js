
// 1. Create a multidimensional array to hold quiz questions and answers
const quesAndAnswer = [
['How far is Earth from the Moon?' , '238,900 mi'],
['How far is Earth from the Sun?', '92.96 million mi'],
['How many galaxies are in the universe?', '100 billion']
];

const correct = [];
const incorrect = [];
const answers = [];

// 2. Store the number of questions answered correctly
let correctAnswers = 0;
//next challenge **enter a positive message for none missed
for ( let i = 0; i < quesAndAnswer.length; i++ ) {
  let question = quesAndAnswer[i][0];
  let answer = quesAndAnswer[i][1];
  let response = prompt(`${question}`);
  answers.push(answer);
  if (response.includes(answer)){
    correctAnswers++;
    correct.push(question);
  } else{
    incorrect.push(question);
  }
}
