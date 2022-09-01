const quiz = [
    {
        Question: "Q1.What is the capital of India?",
        a: "Bombay",
        b: "Delhi",
        c: "Nagpur",
        d: "Bhokar",
        ans: "ans1",
    },
    {
        Question: "Q2.What is the capital of India?",
        a: "Bombay",
        b: "Delhi",
        c: "Nagpur",
        d: "Bhokar",
        ans: "ans2",
    },
    {
        Question: "Q3.What is the capital of India?",
        a: "Bombay",
        b: "Delhi",
        c: "Nagpur",
        d: "Bhokar",
        ans: "ans3",
    },
    {
        Question: "Q4.What is the capital of India?",
        a: "Bombay",
        b: "Delhi",
        c: "Nagpur",
        d: "Bhokar",
        ans: "ans4",
    },
]

const question = document.querySelector('.question');
const qptionA = document.querySelector('#ansA');
const qptionB = document.querySelector('#ansB');
const qptionC = document.querySelector('#ansC');
const qptionD = document.querySelector('#ansD');
const button = document.querySelector('#btn');
const answer = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showScore')

let quizCount = 0;
let score = 0;
function loadQuestions  () {
    const quizList = quiz[quizCount];
    question.innerHTML = quizList.Question;
    qptionA.innerHTML = quizList.a;
    qptionB.innerHTML = quizList.b;
    qptionC.innerHTML = quizList.c;
    qptionD.innerHTML = quizList.d;
}

loadQuestions();


function getCheckedAns(){
    let answers;
    answer.forEach(function (ansCheck) {
        if (ansCheck.checked) {
            answers=ansCheck.id;
        }
     
    });
    return answers;
}


button.addEventListener('click',function () {
    const checkedAns = getCheckedAns();
    console.log(checkedAns); 

    if (checkedAns == quiz[quizCount].ans) {
        score++;
    }
    
    quizCount++;

    if (quizCount < quiz.length) {
        loadQuestions();
    }
    else{
        showscore.innerHTML = `
        <h3> You Scored ${score}/${quiz.length}</h3>
        <button id="btn0" onclick="location.reload()">Play Again</button>
        
        `;
        showscore.classList.remove('score');
    }
})

