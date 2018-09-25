$(document).ready(function() {

// Global Variables / Arrays ////
var countdown = 10;
var correct = 0;
var wrong = 0;
var questionsAsked = 0;
var clickCount = 0; // Temporary variable to check how many questions were asked (Using the diagnostic-tool)

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
        question: "What item/s are currently sitting on headboard of my bed?",
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
var answer1 = false;
var answer2 = false;
var answer3 = false;
var answer4 = false;

// Target IDs ////
targetTitlePanel = $("#titlePanel");
targetTitle = $("#title");
targetMainContent = $("#mainContent");
targetQuestion = $("#question");
targetAnswer1 = $("#answer1");
targetAnswer2 = $("#answer2");
targetAnswer3 = $("#answer3");
targetAnswer4 = $("#answer4");
targetInfoPanel = $("#infoPanel");
targetInfoTimerPanel = $("#infoTimerPanel");
targetTimer = $("#timer");
targetSeconds = $("#seconds");

// Function Declarations ////
// Starts the countdown, updates the display every second, and calls clearInterval if countdown = 0.
function startCountdown() {
    targetTimer.css("color", "black");
    console.log("startCountdown function called");
    countdown = 10; // Use this for normal game function.
    // countdown = 1; // Use this for debug.
    targetSeconds.html(countdown);

    // intervalId for 10 second countdown.
    var intervalId = setInterval(function() {
        countdown--; // decrements the variable countdown.

        if (countdown < 10) {
            targetSeconds.html("0" + countdown);
        } else {
            targetSeconds.html(countdown);
        } ///if-else statement
        
        if (countdown <= 0) {
            targetTimer.css("color", "red");
        } ///if statement

        if (countdown < 0 && questionsAsked < 10) {
            clearInterval(intervalId);
            if (gameStatus === false) {
                gameStatus = true;
                nextQuestion();
            } else {
                timesUp();
            }
            
        } else if (countdown < 0 && questionsAsked === 10) {
            clearInterval(intervalId);
            finalScore();
        }

    }, 1000); ///var intervalId = setInterval(function() {});

} ///FINISHED - startCountdown();

// Starts a short 3 sec. countdown, calls clearInterval if countdown = 0, then calls the nextQuestion(); function.
function shortCountdown() {
    console.log("shortCountdown function called");
    targetTimer.css("color", "black");
    countdown = 3; // Use this for normal game function.
    // countdown = 1; // Use this for debug.
    targetSeconds.html("0" + countdown);

    // intervalId for 10 second countdown.
    var intervalId = setInterval(function() {
        countdown--; // decrements the variable countdown.

        if (countdown < 10) {
            targetSeconds.html("0" + countdown);
        } else {
            targetSeconds.html(countdown);
        } ///if-else statement
        
        if (countdown <= 0) {
            targetTimer.css("color", "red");
        } ///if statement

        if (countdown < 0) {
            clearInterval(intervalId);
            nextQuestion();
        } ///if statement

    }, 1000); ///var intervalId = setInterval(function() {});

} ///FINISHED - shortCountdown();

// Generates a random number to determine the question for each round.
function randomInt(max) {
    console.log("randomInt function called");
    return Math.floor(Math.random() * Math.floor(max));
} ///FINISHED - var randomNumber = getRandomInt(max);

// Resets the game and all values back to the initial starting conditions.
function resetGame() {
    console.log("resetGame function called");
} ///resetGame();

// Checks to determine if randomInt picked a number that's already been picked.
function randomIntCheck(num) {
    console.log("randomIntCheck function called");
    var randomNumberArrCheck = randomNumberArr.includes(num);
    if (randomNumberArrCheck === true) {
        return true;
    } else {
        randomNumberArr.push(num);
        questionsAsked++;
        console.log("questionsAsked has been incremented to: " + questionsAsked);
        return false;  
    }
} ///FINISHED - randomIntCheck();

// Switch statement that displays a random question from the myQuestion Array.
function questionPicker() {
    console.log("questionPicker function called");
    do {
        var randomNumber = randomInt(10);
        var randomNumberValue = randomIntCheck(randomNumber);
    } while (randomNumberValue === true && questionsAsked < 10);     
    
    switch(randomNumber) {
        case 0:
            $("#question").html(myQuestions[0].question);
            $("#answer1").html(myQuestions[0].answers.a);
            $("#answer2").html(myQuestions[0].answers.b);
            $("#answer3").html(myQuestions[0].answers.c);
            $("#answer4").html(myQuestions[0].answers.d);
            break;
        case 1:
            $("#question").html(myQuestions[1].question);
            $("#answer1").html(myQuestions[1].answers.a);
            $("#answer2").html(myQuestions[1].answers.b);
            $("#answer3").html(myQuestions[1].answers.c);
            $("#answer4").html(myQuestions[1].answers.d);
            break;
        case 2:
            $("#question").html(myQuestions[2].question);
            $("#answer1").html(myQuestions[2].answers.a);
            $("#answer2").html(myQuestions[2].answers.b);
            $("#answer3").html(myQuestions[2].answers.c);
            $("#answer4").html(myQuestions[2].answers.d);
            break;
        case 3:
            $("#question").html(myQuestions[3].question);
            $("#answer1").html(myQuestions[3].answers.a);
            $("#answer2").html(myQuestions[3].answers.b);
            $("#answer3").html(myQuestions[3].answers.c);
            $("#answer4").html(myQuestions[3].answers.d);
            break;
        case 4:
            $("#question").html(myQuestions[4].question);
            $("#answer1").html(myQuestions[4].answers.a);
            $("#answer2").html(myQuestions[4].answers.b);
            $("#answer3").html(myQuestions[4].answers.c);
            $("#answer4").html(myQuestions[4].answers.d);            
            break;
        case 5:
            $("#question").html(myQuestions[5].question);
            $("#answer1").html(myQuestions[5].answers.a);
            $("#answer2").html(myQuestions[5].answers.b);
            $("#answer3").html(myQuestions[5].answers.c);
            $("#answer4").html(myQuestions[5].answers.d);
            break;
        case 6:
            $("#question").html(myQuestions[6].question);
            $("#answer1").html(myQuestions[6].answers.a);
            $("#answer2").html(myQuestions[6].answers.b);
            $("#answer3").html(myQuestions[6].answers.c);
            $("#answer4").html(myQuestions[6].answers.d);
            break;
        case 7:
            $("#question").html(myQuestions[7].question);
            $("#answer1").html(myQuestions[7].answers.a);
            $("#answer2").html(myQuestions[7].answers.b);
            $("#answer3").html(myQuestions[7].answers.c);
            $("#answer4").html(myQuestions[7].answers.d);
            break;
        case 8:
            $("#question").html(myQuestions[8].question);
            $("#answer1").html(myQuestions[8].answers.a);
            $("#answer2").html(myQuestions[8].answers.b);
            $("#answer3").html(myQuestions[8].answers.c);
            $("#answer4").html(myQuestions[8].answers.d);
            break;
        case 9:
            $("#question").html(myQuestions[9].question);
            $("#answer1").html(myQuestions[9].answers.a);
            $("#answer2").html(myQuestions[9].answers.b);
            $("#answer3").html(myQuestions[9].answers.c);
            $("#answer4").html(myQuestions[9].answers.d);
            break;
    }
    startCountdown();
} ///FINISHED - questionPicker();

// Page-States ////
// On event, changes the html of targetMainContent to timesUp screen.
function timesUp() {
    console.log("timesUp function called");
    targetMainContent.html(
        "<div class='p-5 border border-dark bg-danger'></div>" +
        "<div class='my-3 p-5 border border-dark bg-warning'>" +
            "<h1 id='banner'>YOU RAN OUTTA TIME!</h1>" +
        "</div>" +
        "<div class='p-5 border border-dark bg-danger'></div>"
    );
    shortCountdown();
} ///FINISHED - timesUp();

// On event, changes the html of targetMainContent to wrongAnswer screen.
function wrongAnswer() {
    console.log("wrongAnswer function called");
    targetMainContent.html(
        "<div class='p-5 border border-dark bg-danger'></div>" +
        "<div class='my-3 p-5 border border-dark bg-warning'>" +
            "<h1 id='banner'>Sorry! Wrong Answer!!!</h1>" +
        "</div>" +
        "<div class='p-5 border border-dark bg-danger'></div>"
    );
} ///FINISHED - wrongAnswer();

// On event, changes the html of targetMainContent to correctAnswer screen.
function correctAnswer() {
    console.log("correctAnswer function called");
    targetMainContent.html(
        "<div class='p-5 border border-dark bg-success'></div>" +
        "<div class='my-3 p-4 border border-dark bg-success'>" +
            "<h1 id='banner'>Congratulations!<br>You chose the correct answer!</h1>" +
        "</div>" +
        "<div class='p-5 border border-dark bg-success'></div>"
    );
} ///FINISHED - correctAnswer();

// On event, changes the html of targetMainContent to nextQuestion screen.
function nextQuestion() {
    console.log("nextQuestion function called");
    targetMainContent.html(
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
    questionPicker();
} ///FINISHED - nextQuestion();

// On event, changes the html of targetMainCotent to finalScore screen.
function finalScore() {
    console.log("finalScore function called");
    targetMainContent.html(
        '<div class="mb-5"><h1>Final Score:</h1></div>' +
        '<div class="mb-4"><h2><span id="correctAnswers">__</span> Correct Answers.</h2></div>' +
        '<div class="mb-5"><h2><span id="wrongAnswers">__</span> Wrong Answers.</h2></div>' +
        '<div class="d-inline-block border border-dark bg-primary mt-3 pt-3 px-5 py-1"><h3><span id="restart">[ RESTART ]</span></h3></div>'
    )
    $("#correctAnswers").html(correct);
    $("#wrongAnswers").html(wrong);

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
        console.log(randomNumber);
        console.log("-------------------------");   
    })
} ///function to console.log on each click.                                //
consoleClickCheck(); // Comment-in this line to use the above function.//
//------------------------------------------------------------------------//

////Diagnostic-tool////
// consoleClickCheck();
///////////////////////

// Main Code Starts Here. ////
startCountdown();




}); ///$(document).ready(function() {});
