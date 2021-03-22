
  function createListItems( arr ) {
  let items = '';
  for ( let i = 0; i < arr.length; i++ ) {
    items += `<li>${ arr[i] }</li>`;
  }
  return items;
}
let html = `<h1> ${correctAnswers} answer(s) were correct. </h1>

<h2>These were answered correctly:</h2>
  <ol>
    ${createListItems(correct)} <br>
  </ol>
<h2>These were missed:</h2>
  <ol>
    ${createListItems(incorrect)} <br>
  </ol>

  <h2>The correct answers, in order of appearance, are:</h2>
  <ol>
  ${createListItems(answers)}<br>
  </ol>
`;
// 4. Display the number of correct answers to the user
const main = document.querySelector('main');
main.insertAdjacentHTML('beforeend', html);
