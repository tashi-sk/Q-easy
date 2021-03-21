console.log("testing");

const words = [{
    question: "Which sea creature has three hearts??",
    ans: ["Whale", "Turtle", "Jelly Fish", "Octopus"],
    correct: "Octopus"
},
{
    question: "How many bones does an adult human have?",
    ans: ["206", "213", "203", "205"],
    correct: "206"
},
{
    question: "What is the Italian word for 'Pie'?",
    ans: ["Bread", "Muffin", "Apple pastry", "Pizza"],
    correct: "Pizza"
},
{
    question: "What is a baby cow called?",
    ans: ["Duckling", "Baby", "Calf", "Puppy"],
    correct: "Calf"
},
{
    question: "Which planet shares its name with a dog?",
    ans: ["Mickey", "Simpson", "Pink panther", "Pluto"],
    correct: "Pluto"
}
];

const startGameBtn = document.querySelector('#startGame');
const questionDiv = document.querySelector('.question');
const choiceBox = document.querySelector('.choices');
const nextBtn = document.querySelector('#nextBtn');
const usrScore = document.querySelector('#points');
const quesDisplay = document.querySelector('#quesCount');
let score = 0;
let quesCount = 0;

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array this method is used to shuffle the questions from array 
function fisherYates(array) {
    var count = array.length,
        randomnumber,
        temp;
    while (count) {
        randomnumber = Math.random() * count-- | 0;
        temp = array[count];
        array[count] = array[randomnumber];
        array[randomnumber] = temp
    }
}


// When start button pressed quiz starts
startGameBtn.onclick = () => {
    document.querySelector('.quiz-content').classList.add('d-none');
    document.querySelector('.quiz-start').classList.remove('d-none');
   
    fisherYates(words);
    quizStarted(quesCount);

}

// current question from array
function quizStarted(index) {
    questionDiv.innerHTML = `<h4>${words[index].question}</h4>`;
    choiceBox.innerHTML = `<p class="boxes">${words[index].ans[0]}</p>
                            <p class="boxes">${words[index].ans[1]}</p>
                            <p class="boxes">${words[index].ans[2]}</p>
                            <p class="boxes">${words[index].ans[3]}</p>
                                `;
     nextBtn.style.display = "hidden";
    usrScore.innerText = `Score: ${score}`;
    quesDisplay.innerText = `Question: ${quesCount + 1} / ${words.length}`; // Display question que 
    const choiceAns = choiceBox.querySelectorAll('.boxes');
    // getting all choices answers 
    for (i = 0; i < choiceAns.length; i++) {
        choiceAns[i].setAttribute("onclick", "optionSelected(this)");
    }
}


// checking user choice answer
function optionSelected(ans) {
    let correctSelection = words[quesCount].correct;
    let userChoice = ans.textContent; // getting user selected option
    if (userChoice === words[quesCount].correct) {
        score++;
        usrScore.innerText = `Score: ${score}`;
        // correctAns.innerText = `Score: ${score}`; // updating score
        console.log("correct answer")
        ans.classList.add('correct');    // adding class if answer is correct 
        nextBtn.classList.remove('d-none');

    } else {
        console.log("incorrect")
        ans.classList.add("incorrect"); // adding class if answer is incorrect  
        nextBtn.classList.remove('d-none');
    }
    // disable all choices after user selection 
    for (i = 0; i < choiceBox.children.length; i++) {
        choiceBox.children[i].classList.add('disabled');
        // if user selection is wrong then display correct answer 
        if (choiceBox.children[i].textContent == correctSelection) {
            choiceBox.children[i].classList.add('correct');
        }
    }
}


// display next question
// nextBtn.addEventListener('click', nextQuest);
nextBtn.onclick = () => {
    nextBtn.classList.add('d-none');
    // getting next question from questions array
    quesCount++; // next question 
    if (quesCount < words.length) {
        quizStarted(quesCount);
        for (i = 0; i < choiceBox.children.length; i++) {
            choiceBox.children[i].classList.remove('disabled'); // enable all choices
        }
    } else {
        questionDiv.innerHTML = "";
        console.log("quiz finished");
        showScore();
    }
}

function showScore() {
    document.querySelector('.quiz-start').innerHTML = `<h4 class="last-screen">You Scored ${score}</h4><br>
                            <button type="button" class="button-class" id="rstQuiz">Restart</button>
                            `;
        document.querySelector('#rstQuiz').onclick = function () {
            location.reload();
       }
}

