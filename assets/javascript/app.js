// Global Variables / Arrays ////
var countdown = 10;
var correct = 0;
var wrong = 0;

// Array of possible Questions and potential Answers ////
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
        question: "If Barry got home yesterday and 3 days before two weeks from today was his birthday, what day was it when Barry got home?",
        answers: {
            a: "huh?",
            b: "It was a good day.",
            c: "Clearly it was Tuesday!",
            d: "Can you really consider this a fair question?"
        },
        correctAnswer: "b"
    },
    { // Question 6 - index[5] ////
        question: "What item/s are currently sitting on my bed's headboard?",
        answers: {
            a: "Tsum Tsums",
            b: "The book, 'Harry Potter and the Chamber of Secrets.'",
            c: "a Google Home Mini.",
            d: "All of the above"
        },
        correctAnswer: "d"
    },
    { // Question 7 - index[6] ////
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        correctAnswer: ""
    },
    { // Question 8 - index[7] ////
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        correctAnswer: ""
    },
    { // Question 9 - index[8] ////
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        correctAnswer: ""
    },
    { // Question 10 - index[9] ////
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        correctAnswer: ""
    },
];

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

// Function Declarations ////
// Starts 30 second countdown for each new round.
function startCountdown() {
} // startCountdown();

// Generates a random number to determine the question for each round.
function randomInt() {
} // randomInt();

// When clicked resets the game and all values back to the initial starting conditions.
function resetGame() {
} // resetGame();

// Main Code Starts Here. ////
