const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Madrid", "Berlin", "Paris", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale"
  }
];

let currentquestionindex = 0;
let score = 0;

//taking references of elements

const questionelement = document.getElementById('question');
const optionselement = document.getElementById('options');
const nextbtn = document.getElementById('nextbtn');
const resultelement = document.getElementById('result');


function loadquestion() {
  const currentquestion = quizData[currentquestionindex];
  questionelement.textContent = currentquestion.question;
  console.log(questionelement)
  //to clear the previous options data
  optionselement.innerHTML = '';
  //making a loop of options
  currentquestion.options.forEach((option) => {
    const radioinput = document.createElement('input')
    radioinput.type = "radio";
    radioinput.name = "answer";
    radioinput.value = option;
    const label = document.createElement('label');
    label.textContent = option;
    console.log()
    console.log(label)
    optionselement.appendChild(radioinput);
    optionselement.appendChild(label)
  });
}
function checkanswer() {
  const selectedoption = document.querySelector('input[name="answer"]:checked');
  console.log(selectedoption)
  if (!selectedoption) {
    return; // No option selected, do nothing.
  }
  selectedanswer = selectedoption.value;
  console.log(selectedanswer)
  const currentquestion = quizData[currentquestionindex];
  if(selectedanswer === currentquestion.correctAnswer){
    score++;
    console.log(score)
  }
}
nextbtn.addEventListener('click', () => {
  checkanswer();
  currentquestionindex++;

  if(currentquestionindex < quizData.length){
    loadquestion();
  }
  else{
    showresult();
  }
})
function showresult(){
  questionelement.textContent = "Quiz Completed!";
  optionselement.innerHTML = "";
  resultelement.textContent = `your score is ${score}`
}

loadquestion();