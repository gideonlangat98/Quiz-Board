const quizData = [
    {
        question : "What is Javascript?",
        A: "It is an inbuilt language that adds interactivity to the user",
        B: "It is a language used to structure web-pages",
        C: "It is a language used to in styling web pages",
        correct: "A",
    },
    {
        question : "Which one of the following is not correct on Javascript data types?",
        A: "Number",
        B: "String",
        C: "Css",
        correct : "C",
    },
    {
        question : "Which one of the following is not a looping structure in Javascript?",
        A: "For",
        B: "While",
        C: "Objects",
        correct : "C"
    },
    {
        question : "Select only the logical operator",
        A: "&&",
        B: "?",
        C: "[]",
        correct : "C",
    },
    {
        question : "Which one of the following is false about pop up boxes in JS?",
        A: "Alert",
        B: "Select",
        C: "Prompt",
        correct : "B",
    },
    {
        question : "Which one of the following displays only OK button?",
        A: "Alert box",
        B: "Confirmation box",
        C: "Prompt",
        correct : "A",
    },
    {
        question : "Which one of the following act as a container in JS for string values?",
        A: "Variables",
        B: "<Div>",
        C: "type",
        correct : "A",
    },
    {
        question : "What is the role of concatenation in JS?",
        A: "To multiply things together",
        B: "To join two or more things together",
        C: "To structure JS",
        correct : "B"
    },
    {
        question : "which of the following is used to get the length of a string?",
        A: ".length",
        B: ".concat",
        C: "indexOf",
        correct : "A",
    },
    {
        question : "The comparison operators return the output of the following, except?",
        A: "True",
        B: "false",
        C: "absolute",
        correct : "C";
    },

];

const quiz = document.getElementById(quiz)
const answerEls = document.querySelectorALL('.answer')
const questionEl = document.getElementById('question')
const A_text = document.getElementById('A_text')
const B_text = document.getElementById('B_text')
const c_text = document.getElementById('C_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0