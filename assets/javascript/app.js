$(document).ready(function() {

// Global Variables / Arrays ////
var countdown = 10;
var correct = 0;
var wrong = 0;

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
        question: "What item/s are currently sitting on headboard of my bed",
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
targetAmswer4 = $("#answer4");
targetInfoPanel = $("#infoPanel");
targetInfoTimerPanel = $("#infoTimerPanel");
targetTimer = $("#timer");
targetSeconds = $("#seconds");

// Function Declarations ////
// Starts the countdown, calls displayCountdown(); to refresh timer till it reaches 0.
function startCountdown() {
    countdown = 10;
    // intervalId for 10 second countdown.
    var intervalId = setInterval(function() {
        displayCountdown();
        console.log(countdown);
        countdown--;
    }, 1000);
} ///startCountdown();

// Updates the div/span for the timer to reflect any changes to the counter.
function displayCountdown(interval) {
    targetSeconds.html(countdown);
    if (countdown <= 0) {
        clearInterval(interval);
        console.log("clearInterval has run, countdown should be stopped");
    }
} ///displayCountdown();

// Generates a random number to determine the question for each round.
function randomInt() {
} ///randomInt();

// When clicked resets the game and all values back to the initial starting conditions.
function resetGame() {
} ///resetGame();

//------------------------------------------------------------------------//
//Diagnostic-tools                                                        //
function consoleClickCheck() {                                            //
    $(document).on("click", function() {
        console.log("Diagnostic-tool----------");
        console.log(countdown);
        console.log("-------------------------");
    })
} ///function to console.log on each click.                                //
consoleClickCheck(); // Comment-in this line to use the above function.//
//------------------------------------------------------------------------//

////Diagnostic-tool////
// consoleClickCheck();
///////////////////////

// Main Code Starts Here. ////

startCountdown(intervalId); 



}); ///$(document).ready(function() {});
