$(document).ready(function() {

// Global Variables / Arrays ////
var countdown = 10;
var correct = 0;
var wrong = 0;
var questionsAsked = 0;
var currentAnswer;
var storedAnswer;
var usersChoice = "";

var randomNumberArr = [];

// Array of Objects containing Questions, Answers, and Correct Answers ////
const myQuestions = [
    { // Question 1 - index[0] ////
        question: "Color?",
        answers: {
            a: "Blue, obviously.",
            b: "Purple!",
            c: "Yes.",
            d: "Black..."
        },
        correctAnswer: "b"
    },
    { // Question 2 - index[1] ////
        question: "What did I eat for lunch on Sunday, September 23rd 2018?",
        answers: {
            a: "a burger.",
            b: "Thai Food!",
            c: "Not a single thing...",
            d: "Leftovers."
        },
        correctAnswer: "b"
    },
    { // Question 3 - index[2] ////
        question: "What is my favorite kind of fruit?",
        answers: {
            a: "Yes.",
            b: "Watermelon",
            c: "Pomegranate",
            d: "Kiwi"
        },
        correctAnswer: "b"
    },
    { // Question 4 - index[3] ////
        question: "What is YOUR favorite kind of fruit?",
        answers: {
            a: "Yes.",
            b: "Watermelon",
            c: "Pomegranate",
            d: "Kiwi"
        },
        correctAnswer: "b"
    },
    { // Question 5 - index[4] ////
        question: "If O'shea got home yesterday and 3 days before two weeks from today was his friend's birthday, what day was it when he got home?",
        answers: {
            a: "huh?",
            b: "I don't know, but it was a good day.",
            c: "Clearly it was Tuesday!",
            d: "Can you really consider this a fair question?"
        },
        correctAnswer: "b"
    },
    { // Question 6 - index[5] ////
        question: "What item/s are currently sitting on the headboard of my bed?",
        answers: {
            a: "Tsum Tsums",
            b: "The book, 'Harry Potter and the Chamber of Secrets.'",
            c: "a Google Home Mini.",
            d: "All of the above"
        },
        correctAnswer: "d"
    },
    { // Question 7 - index[6] ////
        question: "A food truck sells salads for $6.50 each and drinks for $2.00 each. The food truck's revenue from selling a total of 209 salads and drinks in one dday was $836.50. How many salads were sold that day?",
        answers: {
            a: "77",
            b: "93",
            c: "99",
            d: "105"
        },
        correctAnswer: "b"
    },
    { // Question 8 - index[7] ////
        question: "On Saturday afternoon, Armand sent m text messages each hour for 5 hours, and Tyrone sent p text messages each hour for 4 hours. Which of the following represents the total number of messages sent by Armand and Tyrone on Saturday afternoon?",
        answers: {
            a: "Why do you care so much about Armand and Tyrone?",
            b: "20mp",
            c: "5m + 4p",
            d: "4m + 5p"
        },
        correctAnswer: "c"
    },
    { // Question 9 - index[8] ////
        question: "Did you find this quiz to be entertaining and useful in some kind of random way?",
        answers: {
            a: "The answer is always, 'Yes.' (Except when it isn't)",
            b: "I haven't technically finished the quiz yet.",
            c: "I guess.",
            d: "Yes."
        },
        correctAnswer: "d"
    },
    { // Question 10 - index[9] ////
        question: "How much wood could a woodchuck chuck if a woodchuck could chuck wood?",
        answers: {
            a: "Sorry I don't work in hypotheticals.",
            b: "According to NY State wildlife expert Richard Thomas; if a woodchuck could chuck wood, it'd probably be around 700 pounds.",
            c: "Yes?",
            d: "January 20th 1992."
        },
        correctAnswer: "b"
    },
]; ///Array myQuestions

// Boolean Variables ////
var gameStatus = false;
var questionScreen = false;

// Target IDs ////
targetMainContent = $("#mainContent");
targetTimer = $("#timer");
targetSeconds = $("#seconds");

// Not currently in use.-------------------------
// targetTitlePanel = $("#titlePanel");
// targetTitle = $("#title");
// targetQuestion = $("#question");
// targetAnswer1 = $("#answer1");
// targetAnswer2 = $("#answer2");
// targetAnswer3 = $("#answer3");
// targetAnswer4 = $("#answer4");
// targetInfoPanel = $("#infoPanel");
// targetInfoTimerPanel = $("#infoTimerPanel");
// -----------------------------------------------


//-----------------------////
// Function Declarations ////
//-----------------------////

// Starts the countdown, updates the display every second, and calls clearInterval if countdown = 0.
function startCountdown() {
    targetTimer.css("color", "black");
    // console.log("startCountdown function called");
    countdown = 10; // Use this for normal game function.
    // countdown = 1; // Use this for debug.
    $("#seconds").html(countdown);

    // intervalId for 10 second countdown.
    var intervalId = setInterval(function() {
        countdown--; // decrements the variable countdown.

        if (countdown < 10) {
            $("#seconds").html("0" + countdown);
        } else {
            $("#seconds").html(countdown);
        } ///if-else statement
        
        if (countdown <= 0) {
            targetTimer.css("color", "red");
        } ///if statement

        if (countdown < 0 && questionsAsked < 10) {
            clearInterval(intervalId);
            if (gameStatus === false) {
                gameStatus = true;
                $("#game-start")[0].play();
                nextQuestion();
                // finalScore(); // Use this to debug ending screen
            } else {
                timesUp();
            }
            
        } else if (countdown < 0 && questionsAsked === 10) {
            clearInterval(intervalId);
            finalScore();
        }

        //if-else statement for correct and wrong choices
        if (usersChoice === currentAnswer && questionScreen === true && usersChoice != "") {
        clearInterval(intervalId);
        correctAnswer();
        } else if (usersChoice !== currentAnswer && questionScreen === true && usersChoice != "") {
        clearInterval(intervalId);
        wrongAnswer();
        } ///if-else statement

    }, 1000); ///var intervalId = setInterval(function() {});



} ///FINISHED - startCountdown();

// Starts a short 3 sec. countdown, calls clearInterval if countdown = 0, then calls the nextQuestion(); function.
function shortCountdown() {
    // console.log("shortCountdown function called");
    targetTimer.css("color", "black");
    countdown = 3; // Use this for normal game function.
    // countdown = 1; // Use this for debug.
    $("#seconds").html("0" + countdown);

    // intervalId for 10 second countdown.
    var intervalId = setInterval(function() {
        countdown--; // decrements the variable countdown.

        if (countdown < 10) {
            $("#seconds").html("0" + countdown);
        } else {
            $("#seconds").html(countdown);
        } ///if-else statement
        
        if (countdown <= 0) {
            targetTimer.css("color", "red");
        } ///if statement

        if (countdown < 0 && questionsAsked < 10) {
            clearInterval(intervalId);
            nextQuestion();
        } else if (countdown < 0 && questionsAsked === 10) {
            clearInterval(intervalId);
            finalScore();
        }

    }, 1000); ///var intervalId = setInterval(function() {});

} ///FINISHED - shortCountdown();

// Generates a random number to determine the question for each round.
function randomInt(max) {
    // console.log("randomInt function called");
    return Math.floor(Math.random() * Math.floor(max));
} ///FINISHED - var randomNumber = getRandomInt(max);

// Resets the game and all values back to the initial starting conditions.
function restartGame() {
    // console.log("resetGame function called");
    $("#restart").on("click", function() {
        // console.log("You clicked the reset button!");
        correct = 0;
        wrong = 0;
        questionsAsked = 0;
        gameStatus = false;
        randomNumberArr = [];
        gameRestart();
    });
} ///FINISHED - resetGame();

// Checks to determine if randomInt picked a number that's already been picked.
function randomIntCheck(num) {
    // console.log("randomIntCheck function called");
    var randomNumberArrCheck = randomNumberArr.includes(num);
    if (randomNumberArrCheck === true) {
        return true;
    } else {
        randomNumberArr.push(num);
        questionsAsked++;
        // console.log("questionsAsked has been incremented to: " + questionsAsked);
        return false;  
    }
} ///FINISHED - randomIntCheck();

// Enables click-functionality for answers and assigns a corresponding answer letter to usersChoice.
function questionEnable() {
    // console.log("questionEnable function called");

    $("#answer1, #answer2, #answer3, #answer4").css("cursor", "pointer");

    $("#answer1").on("click", function() {
        usersChoice = "a";
    });
    $("#answer2").on("click", function() {
        usersChoice = "b";
    });
    $("#answer3").on("click", function() {
        usersChoice = "c";
    });
    $("#answer4").on("click", function() {
        usersChoice = "d";
    });
} ///FINISHED - questionEnable();

// Switch statement that displays a random question from the myQuestion Array.
function questionPicker() {
    // console.log("questionPicker function called");
    do {
        var randomNumber = randomInt(myQuestions.length);
        var randomNumberValue = randomIntCheck(randomNumber);
    } while (randomNumberValue === true && questionsAsked < 10);     
    
    $("#question").html(myQuestions[randomNumber].question);
    $("#answer1").html(myQuestions[randomNumber].answers.a);
    $("#answer2").html(myQuestions[randomNumber].answers.b);
    $("#answer3").html(myQuestions[randomNumber].answers.c);
    $("#answer4").html(myQuestions[randomNumber].answers.d);
    currentAnswer = myQuestions[randomNumber].correctAnswer;
    storedAnswer = myQuestions[randomNumber].answers[currentAnswer];
        
    startCountdown();
} ///FINISHED - questionPicker();


//-------------////
// Page-States ////
//-------------////

// On event, changes the html of targetMainContent to timesUp screen.
function gameRestart() {
    // console.log("gameRestart function called");
    targetMainContent.html(
        '<div class="mb-4">' +
            '<h2>Welcome to the, "No Time to THINK!" trivia game!</h2>' +
        '</div>' +
        '<div class="text-left ml-5 mb-4">' +
            '<h3>The rules are simple:</h3>' +
        '</div>' +
        '<div>' +
            '<ul class="text-left ml-2">' +
                '<li><h4>You have 10 SECONDS to answer each question!</h4></li>' +
                '<li><h4>Click on any of the four possible answers to make your choice!</h4></li>' +
                '<li><h4>There are a total of 10 questions!</h4></li>' +
                '<li><h4>That\'s it! Have fun!!!</h4></li>' +
            '</ul>' +
        '</div>'
    );
    startCountdown();
} ///FINISHED - gameRestart();

// On event, changes the html of targetMainContent to timesUp screen.
function timesUp() {
    // console.log("timesUp function called");
    wrong++;
    questionScreen = false;
    targetMainContent.html(
        '<div class="p-5 border border-dark bg-danger"></div>' +
        '<div class="my-3 p-5 border border-dark bg-warning">' +
            '<h1 id="banner">YOU RAN OUTTA TIME!</h1>' +
        '</div>' +
        '<div class="px-5 py-2 border border-dark bg-danger">' + '<h4>The correct answer was: <br></h4><h3>' + storedAnswer + '</h3></div>'
    );
    shortCountdown();
} ///FINISHED - timesUp();

// On event, changes the html of targetMainContent to wrongAnswer screen.
function wrongAnswer() {
    // console.log("wrongAnswer function called");
    wrong++;
    usersChoice = "";
    questionScreen = false;
    targetMainContent.html(
        "<div class='p-5 border border-dark bg-danger'></div>" +
        "<div class='my-3 p-5 border border-dark bg-warning'>" +
            "<h1 id='banner'>Sorry! Wrong Answer!!!</h1>" +
        "</div>" +
        "<div class='p-5 border border-dark bg-danger'></div>"
    );
    shortCountdown();
} ///FINISHED - wrongAnswer();

// On event, changes the html of targetMainContent to correctAnswer screen.
function correctAnswer() {
    // console.log("correctAnswer function called");
    correct++;
    usersChoice = "";
    questionScreen = false;
    targetMainContent.html(
        "<div class='p-5 border border-dark bg-success'></div>" +
        "<div class='my-3 p-4 border border-dark bg-success'>" +
            "<h1 id='banner'>Congratulations!<br>You chose the correct answer!</h1>" +
        "</div>" +
        "<div class='p-5 border border-dark bg-success'></div>"
    );
    shortCountdown();
} ///FINISHED - correctAnswer();

// On event, changes the html of targetMainContent to nextQuestion screen.
function nextQuestion() {
    // console.log("nextQuestion function called");
    usersChoice = "";
    questionScreen = true;
    $("#mainContent").html(
        '<div class="row">' +
            '<h4 id="question" class="col-12 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</h4>' +
        '</div>' +
        
        '<div class="row">' +
            '<div id="answer1" class="col-sm-12 col-lg-5 border border-warning text-white bg-dark d-inline-block p-5 mx-auto m-2">Answer 1</div>' +
            '<div id="answer2" class="col-sm-12 col-lg-5 border border-warning text-white bg-dark d-inline-block p-5 mx-auto m-2">Answer 2</div>' +
        '</div>' +
        
        '<div class="row">' +
            '<div id="answer3" class="col-sm-12 col-lg-5 border border-warning text-white bg-dark d-inline-block p-5 mx-auto m-2">Answer 3</div>' +
            '<div id="answer4" class="col-sm-12 col-lg-5 border border-warning text-white bg-dark d-inline-block p-5 mx-auto m-2">Answer 4</div>' +
        '</div>'
    );
    questionEnable();
    questionPicker();
} ///FINISHED - nextQuestion();

// On event, changes the html of targetMainCotent to finalScore screen.
function finalScore() {
    // console.log("finalScore function called");
    questionScreen = false;
    targetTimer.html("[ 00:<span id='seconds'>00</span> ]");
    targetTimer.css("color", "black");

    targetMainContent.html(
        '<div class="mb-5"><h1>Final Score:</h1></div>' +
        '<div class="mb-4"><h2><span id="correctAnswers">__</span> Correct Answers.</h2></div>' +
        '<div class="mb-5"><h2><span id="wrongAnswers">__</span> Wrong Answers.</h2></div>' +
        '<div class="d-inline-block border border-dark bg-primary mt-3 pt-3 px-5 py-1"><h3><span id="restart">[ RESTART ]</span></h3></div>'
    );
    $("#correctAnswers").html(correct);
    $("#wrongAnswers").html(wrong);

    $("#restart").css("cursor", "pointer");

    restartGame();

} ///FINISHED - finalScore();

//------------------------------------------------------------------------//
//Diagnostic-tools                                                        //
function consoleClickCheck() {                                            //
    $(document).on("click", function() {
        console.log("Diagnostic-tool----------");
        // clickCount++;
        // console.log("clickCount: " + clickCount);
        // if (questionsAsked < 10) {
        //     questionPicker();
        // } else {
        //     console.log("All questions have been asked!");
        // }
        // console.log(randomNumberArr);
        // console.log("usersChoice: " + usersChoice);
        // console.log("currentAnswer: " + currentAnswer);
        // console.log("storedAnswer: " + storedAnswer);
        // console.log("questionScreen: " + questionScreen);
        // console.log("correct answers: " + correct);
        // console.log("wrong answers: " + wrong);
        // $("audio#standard-tick")[0].play();
        console.log("-------------------------");   
    });
} ///function to console.log on each click.                                //
// consoleClickCheck(); // Comment-in this line to use the above function.//
//------------------------------------------------------------------------//

////Diagnostic-tool////
// consoleClickCheck();
///////////////////////

// Main Code Starts Here. ////
startCountdown();

}); ///$(document).ready(function() {});
