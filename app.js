// Goals:

// 1. Create the data structure for the questions and answers and choices (Array of objects)

// 2. make it so when the user clicks the "Start play" button it should call the start function and shows the first question

// create variables for the states: correct answers, time, user clicked choice

//cached elements
const startPlayE=document.querySelector('#play')
const questionElm = document.getElementById('question')
const nextBtnE=document.getElementById('nextQBtn')
const choice1E=document.getElementById('choice1')
const choice2E=document.getElementById('choice2')
const choice3E=document.getElementById('choice3')
const choice4E=document.getElementById('choice4')
const answerClickedE=document.querySelectorAll('.answer')
const feedbackEl=document.querySelector('#feedback')
const QABox=document.querySelector('#questions-answers')
const submitE=document.querySelector('#submit')
const messageFBElement=document.querySelector('#messageFB')
const playAgainE=document.querySelector('#playAgain')
const timerE=document.querySelector('#timer')
const instructionsE=document.querySelector('#instructions')


console.log(nextBtnE)
console.log(questionElm)
console.log(startPlayE)


    let currentQuestionIndex=0;
    let userChoice
    let timer
    let wrongAnswer = 0


const questionsArr = [{
    question: 'What the <head> used to?',
    choice1: 'Holds behind-the-scenes info like the page title or links to CSS and JavaScript.',
    choice2: 'Tells the browser this is an HTML5 page.',
    choice3: 'The main container for everything else.',
    choice4: 'Where all the visible stuff goes, like text, images, or links',
    correctA: 'Holds behind-the-scenes info like the page title or links to CSS and JavaScript.'
},
{
    question: 'What’s the <img> tag for?',
    choice1: 'puts pictures on your web page',
    choice2: 'Tells the browser where to find the image file',
    choice3: 'Gives a description of the image for accessibility (like for people using screen readers) or if the image doesn’t load.',
    choice4: 'for links',
    correctA: 'puts pictures on your web page'
},
{
    question: 'What does the <br> tag do',
    choice1: 'adding a horizantel line',
    choice2: 'add applies bold font weight to entire row',
    choice3: 'adds a line break, moving content to the next line',
    choice4: 'it forces the browser to re-render and clear the CSS cache for the current paragraph',
    correctA: 'adds a line break, moving content to the next line'
},
{
    question: 'How do you make an email link?',
    choice1: 'by <email href="gmail.com">',
    choice2: '<a href="gmail.com"> ',
    choice3: '<link target="gmail.com"',
    choice4: '<a mailto="gmail.com"',
    correctA: '<a href="gmail.com"> '
},
{
    question: 'How do you add a JavaScript file?',
    choice1: '<link src="app.js"> ',
    choice2: '<script href="app.js"</script>',
    choice3: '<script src="app.js"></script>',
    choice4: '<javaScript file="app.js"',
    correctA: '<script src="app.js"></script>'
}
]

    function showCustomAlert(message) {
        const alertBox = document.getElementById('customAlert');
        const alertMessage = document.getElementById('alertMessage');
        const alertClose = document.getElementById('alertClose');

        alertMessage.textContent = message;
        alertBox.style.display = 'block';

        alertClose.onclick = () => {
            alertBox.style.display = 'none';
        };
    }


function start(){
    console.log('game started')
   // the play button triggr to show the first question
   instructionsE.style.display='none'
   QABox.style.display='block'

    let count = 40

    timer = setInterval(() => {
        count--;
        console.log(count);
        timerE.textContent = `Time left: ${count} s`;

        if (count <= 10) {
            timerE.style.color = 'red';
        }

        if (count === 0) {
            clearInterval(timer);
            showCustomAlert('⏰ Time is up! Play again for another chance!');
            
            answerClickedE.forEach((button) => {
                button.disabled = true;

            });
            


            playAgainE.style.display = 'block';
            submitE.style.display = 'none';
            nextBtnE.style.display = 'none';
        }
    }, 1000);



    const ReadyGoEl=document.querySelector('#ReadyGo')
    startPlayE.style.display='none'
    ReadyGoEl.style.display='block'
    nextBtnE.style.display='none'
    QABox.style.display='none'

    setTimeout(() => {
        ReadyGoEl.style.display = 'none'
        nextBtnE.style.display = 'block'
    QABox.style.display='block'

        const currentQ = questionsArr[currentQuestionIndex] //show the first question
        console.log(currentQ)
        questionElm.textContent = currentQ.question
        choice1E.textContent = currentQ.choice1
        choice2E.textContent = currentQ.choice2
        choice3E.textContent = currentQ.choice3
        choice4E.textContent = currentQ.choice4

    }, 1000)

    
   
    /*setTimeout(() => {
        const hasSelectedAnswer = document.querySelector('.answer.selected') //if not selecting an answer in 5 seconds so will trigger
        if (!hasSelectedAnswer) {
            alert('please select an answer!')
        }
    }, 5000)*/
    
}

function nextQuestion(){
const hasSelectedAnswer = document.querySelector('.answer.selected') //necessory this cache inside the func to work without errors
    if (!hasSelectedAnswer) {
        alert('please Select answer before moving to next question!')
        return
    }

    //the next buttton trigger the rest of questions
        currentQuestionIndex++

         const currentQ= questionsArr[currentQuestionIndex]
    questionElm.textContent= currentQ.question
    choice1E.textContent= currentQ.choice1
    choice2E.textContent=currentQ.choice2
    choice3E.textContent=currentQ.choice3
    choice4E.textContent=currentQ.choice4 
    feedbackEl.style.display = 'none'
    if(currentQuestionIndex===4){
        submitE.style.display='block'
        nextBtnE.style.display='none'
        messageFBElement.style.display='none'
        
    }

    answerClickedE.forEach((b) => { //re activate the clickable choices after deactive them
    b.addEventListener('click', compareAnswers)
    b.classList.remove('selected')
})

}

function changeQuestion(){
    // 1. increase the currentQuestionIndex by 1
    // 2. change textContent for questionEl and all choiceEl
}

function compareAnswers(a) {
    //get the user choice from the button clicked
     userChoice = a.target.textContent
     console.log(userChoice)
     a.target.classList.add('selected')
    //get the correct answer from the array object
    const correctAnswer = questionsArr[currentQuestionIndex].correctA

    if (userChoice === correctAnswer) {
        console.log('Correct answer')
    }
    else {
        console.log('wrong answer')
        wrongAnswer += 1
    }
    setTimeout(() => { //wait a second till the feedback apear
         feedbackEl.style.display = 'block'
    }, 500);
   

    
    answerClickedE.forEach((add)=>{ //this let the user click only one answer, disable the other answers.
        add.removeEventListener('click',compareAnswers)
    })
}
function submit(){
    console.log(wrongAnswer)
    
    messageFBElement.style.display='block' //show the score when submit button pressed
    
    const correctAnswers= 5 - wrongAnswer;
    
    console.log(wrongAnswer +" out of 5 wrong answers")
    if(correctAnswers>=3){
        messageFBElement.style.color='green'
        const audio = new Audio('./audio.mp3.mpeg');
        audio.play();
    messageFBElement.textContent=`You got score: ${correctAnswers}/5 `
    messageFBElement.textContent+=`congratulations! you passed the quiz😎👌🔥`
    }else{
        const audio=new Audio('./lose.mp4')
        audio.play();
        messageFBElement.style.color='red'
    messageFBElement.textContent=`You got score: ${correctAnswers}/5 `
    messageFBElement.textContent+=`better luck next time!!☹`
    }
    feedbackEl.style.display='none'
    playAgainE.style.display='block'
    
    
}
//event listener
startPlayE.addEventListener('click',start)
nextBtnE.addEventListener('click',nextQuestion)
answerClickedE.forEach((b) => {
    b.addEventListener('click', compareAnswers)
})
submitE.addEventListener('click',submit)
submitE.addEventListener('click',()=>{
    clearInterval(timer)
    console.log('timer stopped because user submitted the answers')
})
playAgainE.addEventListener('click',()=>{
    location.reload()
})

/*let count = 30

setInterval(() => {
    count--;
    console.log(count);
    timerE.textContent = `Time left: ${count} s`;
    if (count === 0) {
        clearInterval(timer);
        alert('Time is up! Please submit your answers.');
    }else if (count <= 10) {
        timerE.style.color = 'red';
    }
},1000)*/