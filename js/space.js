
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

  function createListItems( arr ) {
  let items = '';
  for ( let i = 0; i < arr.length; i++ ) {
    items += `<li>${ arr[i] }</li>`;
  }
  return items;
}
let html = `<h1>You got ${correctAnswers} answer(s) correct. </h1>

<h2>You got these correct:</h2>
  <ol>
    ${createListItems(correct)} <br>
  </ol>
<h2>You missed these:</h2>
  <ol>
    ${createListItems(incorrect)} <br>
  </ol>

  <h2>The correct answers, in order of appearance, are :</h2>
  <ol>
  ${createListItems(answers)}<br>
  </ol>
`;
// 4. Display the number of correct answers to the user
document.querySelector('main').innerHTML = html;
