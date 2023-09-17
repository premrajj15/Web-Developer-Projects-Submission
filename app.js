//Question bank
const questionBank= [
    {
        question : 'What does HTML stand for?',
        option : ['hyper test markup language','hyper links markup language','hyper text markup language','home text markup language'],
        answer : 'hyper text markup language'
    },
    {
        question : 'Choose the correct HTML element for the largest heading:    ',
        option : ['h4','Heading','h1','all of the above'],
        answer : 'h1'
    },
    {
        question : 'What is the correct HTML element for inserting a line break?',
        option : ['br','break','lb','All of the above'],
        answer : 'br'
    },
    {
        question : 'Which character is used to indicate an end tag?',
        option : ['<','>','/','*'],
        answer : '/'
    },
    {
        question : 'Inline elements are normally displayed without starting a new line. ',
        option : ['true','false','either A or B','none of the above'],
        answer : 'true'
    }
]

const question= document.getElementById('question');
const quizContainer= document.getElementById('quiz-container');
const scorecard= document.getElementById('scorecard');
const option0= document.getElementById('option0');
const option1= document.getElementById('option1');
const option2= document.getElementById('option2');
const option3= document.getElementById('option3');
const next= document.querySelector('.next');
const points= document.getElementById('score');
const span= document.querySelectorAll('span');
let i=0;
let score= 0;

//function to display questions
function displayQuestion(){
    for(let a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'green';
    }
    else{
        document.getElementById(e.id).style.background= 'red';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    const answerBank= document.getElementById('answerBank');
    const answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(let a=0;a<questionBank.length;a++)
    {
        const list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();