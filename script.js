const questions = [ //array of questions
    {
        question: "What is the capital of France?",
        answers:[
            {text: "New York", correct:false},
            {text: "London", correct:false},
            {text: "Paris", correct:true},
            {text: "Dublin", correct:false},
        ]
    },
    {
        question: "What is the name of the biggest ocean?",
        answers:[
            {text: "Atlantic", correct:false},
            {text: "Indian", correct:false},
            {text: "Pacific", correct:true},
            {text: "Arctic", correct:false},
        ]
        
    },
    {
        question: "How many continents are there?",
        answers:[
            {text: "5", correct:false},
            {text: "6", correct:false},
            {text: "7", correct:true},
            {text: "8", correct:false},
        ]
        
    },
    {
        question: "Name the largest country in the world?",
        answers:[
            {text: "USA", correct:false},
            {text: "Canada", correct:false},
            {text: "China", correct:false},
            {text: "Russia", correct:true},
        ]
        
    },
    {
        question: "Who wrote Romeo and Juliet?",
        answers:[
            {text: "Shakespeare", correct:true},
            {text: "Dickens", correct:false},
            {text: "Twain", correct:false},
            {text: "Hemingway", correct:false},
        ]
        
    },
    
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;




function startQuiz(){
    currentQuestionIndex = 0;//reset the question index
   
    nextButton.innerHTML="Next";
    showQuestion();
}



function showQuestion(){
    resetState();
    
    let currentQuestion = questions[currentQuestionIndex]; //index of the current question
    let questionNo = currentQuestionIndex + 1; //question number
    questionElement.innerHTML = questionNo +". "+ currentQuestion.question; //display the question from the array


    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);    //append the button to the answer button div
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });

}

// for removing previous questions answer options
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}





function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct"); //css for correct
        score++;
        
    }
    else{
        selectedBtn.classList.add("incorrect");//css for incorrect

    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

 nextButton.style.display = "block";
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
        
    });



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showscore();
    }
}




function showscore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML="Play Again";
    nextButton.style.display = "block";
}




startQuiz(); //call the function to start the quiz  

// start quiz
//display question
//display buttons
//display next button
