const quizData = [
  {
    question: "Which language is used for styling web pages?",
    a: "HTML",
    b: "JQuery",
    c: "CSS",
    d: "XML",
    correct: "Yw==",
  },
  {
    question: "What does HTML stand for?",
    a: "Hyper Trainer Marking Language",
    b: "Hyper Text Marketing Language",
    c: "Hyper Text Markup Language",
    d: "Hyper Text Markup Leveler",
    correct: "Yw==",
  },
  //   {
  //     question: "What does CSS stand for?",
  //     a: "Common Style Sheet",
  //     b: "Colorful Style Sheet",
  //     c: "Computer Style Sheet",
  //     d: "Cascading Style Sheet",
  //     correct: "d",
  //   },
  //   {
  //     question: "What does PHP stand for?",
  //     a: "Hypertext Preprocessor",
  //     b: "Hypertext Programming",
  //     c: "Hypertext Preprogramming",
  //     d: "Hometext Preprocessor",
  //     correct: "a",
  //   },
  //   {
  //     question: "What year was JavaScript launched?",
  //     a: "1996",
  //     b: "1995",
  //     c: "1994",
  //     d: "None of the above",
  //     correct: "b",
  //   },
  //   {
  //     question: "Which one is a JavaScript framework?",
  //     a: "Python",
  //     b: "Django",
  //     c: "React",
  //     d: "Eclipse",
  //     correct: "c",
  //   },
  //   {
  //     question: "Which is not a programming language?",
  //     a: "TypeScript",
  //     b: "Python",
  //     c: "Anaconda",
  //     d: "Java",
  //     correct: "c",
  //   },
  //   {
  //     question: "Which language is used for web apps?",
  //     a: "PHP",
  //     b: "Python",
  //     c: "JavaScript",
  //     d: "All",
  //     correct: "d",
  //   },
  //   {
  //     question: "What does SQL stand for?",
  //     a: "Stylish Question Language",
  //     b: "Stylesheet Query Language",
  //     c: "Statement Question Language",
  //     d: "Structured Query Language",
  //     correct: "d",
  //   },
  //   {
  //     question: "What is the full form of API?",
  //     a: "Application Programming Interface",
  //     b: "Application Program Interact",
  //     c: "Application Program Interface",
  //     d: "Application Programming Interact",
  //     correct: "a",
  //   },
  //   {
  //     question: "Which of these is a NoSQL database?",
  //     a: "MySQL",
  //     b: "PostgreSQL",
  //     c: "MongoDB",
  //     d: "Oracle",
  //     correct: "c",
  //   },
  //   {
  //     question: "Which company developed JavaScript?",
  //     a: "Netscape",
  //     b: "Bell Labs",
  //     c: "Sun Microsystems",
  //     d: "IBM",
  //     correct: "a",
  //   },
  //   {
  //     question: "What does JSON stand for?",
  //     a: "JavaScript Object Notation",
  //     b: "JavaScript Online Notation",
  //     c: "JavaScript Object Normalization",
  //     d: "JavaScript Online Normalization",
  //     correct: "a",
  //   },
  //   {
  //     question: "Which HTML tag is used to define an internal style sheet?",
  //     a: "<css>",
  //     b: "<style>",
  //     c: "<script>",
  //     d: "<link>",
  //     correct: "b",
  //   },
  //   {
  //     question: "How do you write 'Hello World' in an alert box?",
  //     a: "alert('Hello World');",
  //     b: "msg('Hello World');",
  //     c: "msgBox('Hello World');",
  //     d: "alertBox('Hello World');",
  //     correct: "a",
  //   },
  //   {
  //     question: "How do you create a function in JavaScript?",
  //     a: "function = myFunction()",
  //     b: "function myFunction()",
  //     c: "function:myFunction()",
  //     d: "function => myFunction()",
  //     correct: "b",
  //   },
  //   {
  //     question: "How to write an IF statement in JavaScript?",
  //     a: "if i == 5 then",
  //     b: "if i = 5",
  //     c: "if i == 5",
  //     d: "if (i == 5)",
  //     correct: "d",
  //   },
  //   {
  //     question: "How does a FOR loop start?",
  //     a: "for i = 1 to 5",
  //     b: "for (i = 0; i <= 5; i++)",
  //     c: "for (i <= 5; i++)",
  //     d: "for (i = 0; i <= 5)",
  //     correct: "b",
  //   },
  //   {
  //     question: "How can you add a comment in JavaScript?",
  //     a: "//This is a comment",
  //     b: "'This is a comment",
  //     c: "<!--This is a comment-->",
  //     d: "/*This is a comment*/",
  //     correct: "a",
  //   },
  //   {
  //     question: "What is the correct way to write a JavaScript array?",
  //     a: "var colors = 'red', 'green', 'blue'",
  //     b: "var colors = ['red', 'green', 'blue']",
  //     c: "var colors = (1:'red', 2:'green', 3:'blue')",
  //     d: "var colors = {'red', 'green', 'blue'}",
  //     correct: "b",
  //   },
  //   {
  //     question: "How do you round the number 7.25 to the nearest integer?",
  //     a: "Math.round(7.25)",
  //     b: "round(7.25)",
  //     c: "Math.rnd(7.25)",
  //     d: "rnd(7.25)",
  //     correct: "a",
  //   },
  //   {
  //     question: "How do you find the number with the highest value of x and y?",
  //     a: "Math.max(x, y)",
  //     b: "Math.ceil(x, y)",
  //     c: "top(x, y)",
  //     d: "ceil(x, y)",
  //     correct: "a",
  //   },
  //   {
  //     question: "Which event occurs when the user clicks on an HTML element?",
  //     a: "onchange",
  //     b: "onclick",
  //     c: "onmouseover",
  //     d: "onmouseclick",
  //     correct: "b",
  //   },
  //   {
  //     question: "How do you declare a JavaScript variable?",
  //     a: "var carName;",
  //     b: "variable carName;",
  //     c: "v carName;",
  //     d: "var:carName;",
  //     correct: "a",
  //   },
  //   {
  //     question: "Which operator is used to assign a value to a variable?",
  //     a: "*",
  //     b: "x",
  //     c: "=",
  //     d: "-",
  //     correct: "c",
  //   },
  //   {
  //     question: "What will the following code return: Boolean(10 > 9)",
  //     a: "NaN",
  //     b: "false",
  //     c: "true",
  //     d: "undefined",
  //     correct: "c",
  //   },
  //   {
  //     question: "Is JavaScript case-sensitive?",
  //     a: "No",
  //     b: "Yes",
  //     c: "Only when comparing strings",
  //     d: "Only when using variables",
  //     correct: "b",
  //   },
  //   {
  //     question: "Which of the following is a server-side JavaScript object?",
  //     a: "File",
  //     b: "Function",
  //     c: "FileUpload",
  //     d: "Date",
  //     correct: "a",
  //   },
  //   {
  //     question:
  //       "Which of the following function of Number object returns a string value version of the current number?",
  //     a: "toString()",
  //     b: "toFixed()",
  //     c: "toLocaleString()",
  //     d: "toPrecision()",
  //     correct: "a",
  //   },
  //   {
  //     question:
  //       "Which of the following function of String object returns the calling string value converted to upper case while respecting the current locale?",
  //     a: "toLocaleUpperCase()",
  //     b: "toUpperCase()",
  //     c: "toString()",
  //     d: "substring()",
  //     correct: "a",
  //   },
  //   {
  //     question:
  //       "Which of the following function of Array object calls a function for each element in the array?",
  //     a: "concat()",
  //     b: "forEach()",
  //     c: "filter()",
  //     d: "split()",
  //     correct: "b",
  //   },
  //   {
  //     question:
  //       "Which of the following function of Array object extracts a section of an array and returns a new array?",
  //     a: "reverse()",
  //     b: "shift()",
  //     c: "slice()",
  //     d: "some()",
  //     correct: "c",
  //   },
  //   {
  //     question:
  //       "Which of the following is the correct syntax to display 'GeeksforGeeks' in an alert box using JavaScript?",
  //     a: "alertbox('GeeksforGeeks');",
  //     b: "msg('GeeksforGeeks');",
  //     c: "msgbox('GeeksforGeeks');",
  //     d: "alert('GeeksforGeeks');",
  //     correct: "d",
  //   },
  //   {
  //     question:
  //       "Which of the following is the correct syntax to print a page using JavaScript?",
  //     a: "window.print();",
  //     b: "browser.print();",
  //     c: "navigator.print();",
  //     d: "document.print();",
  //     correct: "a",
  //   },
  //   {
  //     question: "Which of the following is an advantage of using JavaScript?",
  //     a: "Increased interactivity",
  //     b: "Less server interaction",
  //     c: "Immediate feedback from the users",
  //     d: "All of the above",
  //     correct: "d",
  //   },
  //   {
  //     question:
  //       "Which built-in method returns the character at the specified index?",
  //     a: "characterAt()",
  //     b: "getCharAt()",
  //     c: "charAt()",
  //     d: "None of the above",
  //     correct: "c",
  //   },
  //   {
  //     question:
  //       "Which of the following function of String object returns the calling string value converted to lower case?",
  //     a: "toLocaleLowerCase()",
  //     b: "toLowerCase()",
  //     c: "toString()",
  //     d: "substring()",
  //     correct: "b",
  //   },
  //   {
  //     question:
  //       "Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?",
  //     a: "pop()",
  //     b: "push()",
  //     c: "join()",
  //     d: "map()",
  //     correct: "b",
  //   },
  //   {
  //     question: "Which of the following is a disadvantage of using JavaScript?",
  //     a: "Client-side JavaScript does not allow the reading or writing of files.",
  //     b: "JavaScript can be used for client-side validations",
  //     c: "JavaScript statements can be embedded directly in HTML pages.",
  //     d: "All of the above",
  //     correct: "a",
  //   },
  //   {
  //     question:
  //       "Which method returns the string starting at the specified position?",
  //     a: "slice()",
  //     b: "substr()",
  //     c: "substring()",
  //     d: "None of the above",
  //     correct: "c",
  //   },
  //   {
  //     question:
  //       "Which method returns the number of milliseconds in a Date object since midnight of January 1, 1970?",
  //     a: "getMilliseconds()",
  //     b: "getSeconds()",
  //     c: "getTime()",
  //     d: "None of the above",
  //     correct: "c",
  //   },
  //   {
  //     question:
  //       "Which of the following methods removes the last element from an array and returns that element?",
  //     a: "pop()",
  //     b: "last()",
  //     c: "get()",
  //     d: "None of the above",
  //     correct: "a",
  //   },
  //   {
  //     question:
  //       "Which of the following function of Array object represents the source code of an object?",
  //     a: "toSource()",
  //     b: "splice()",
  //     c: "toString()",
  //     d: "unshift()",
  //     correct: "a",
  //   },
  //   {
  //     question:
  //       "Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?",
  //     a: "anchor()",
  //     b: "big()",
  //     c: "bold()",
  //     d: "blink()",
  //     correct: "c",
  //   },
  //   {
  //     question: "Which of the following is the structure of an if statement?",
  //     a: "if (conditional expression is true) thenexecute this codeend if",
  //     b: "if (conditional expression is true)execute this codeend if",
  //     c: "if (conditional expression is true) {then execute this code>->}",
  //     d: "if (conditional expression is true) then {execute this code}",
  //     correct: "c",
  //   },
  //   {
  //     question: "Which of the following is the structure of a switch statement?",
  //     a: "switch(expression){case value :statement-break;case value :statement-break;default :statement}",
  //     b: "switch(expression){case value :statement;case value :statement;default :statement}",
  //     c: "switch(expression){case value :statement-break;case value :statement;default :statement-break;}",
  //     d: "switch(expression){case value :statement-break;case value :statement-break;default :statement;}",
  //     correct: "a",
  //   },
  //   {
  //     question: "How can you get the type of arguments passed to a function?",
  //     a: "using typeof operator",
  //     b: "using getType function",
  //     c: "Both of the above",
  //     d: "None of the above",
  //     correct: "a",
  //   },
  //   {
  //     question:
  //       "Which of the following is the correct syntax to redirect a url using JavaScript?",
  //     a: "document.location='http://www.newlocation.com';",
  //     b: "browser.location='http://www.newlocation.com';",
  //     c: "navigator.location='http://www.newlocation.com';",
  //     d: "window.location='http://www.newlocation.com';",
  //     correct: "d",
  //   },
  {
    question:
      "Which built-in method combines the text of two strings and returns a new string?",
    a: "append()",
    b: "concat()",
    c: "attach()",
    d: "None of the above",
    correct: "Yg==",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function showAnswers() {
  let output = `<h2>All Questions and Correct Answers</h2><ul>`;
  quizData.forEach((item, index) => {
    const correctAnswerKey = atob(item.correct);
    const correctAnswer = item[correctAnswerKey];
    output += `
        <li>
          <strong>Question ${index + 1}:</strong> ${item.question}<br>
          <strong>Correct Answer:</strong> ${correctAnswer}
        </li>
      `;
  });
  output += `</ul><button class="show-answers-button" onclick="location.reload()">Reload</button>`;
  quiz.innerHTML = output;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    // Decode the correct answer from Base64
    if (answer === atob(quizData[currentQuiz].correct)) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
          <h2>You answered correctly at ${score} out of ${quizData.length} questions.</h2>
          <button onclick="location.reload()">Reload</button>
          <button id="show-answers" onclick="showAnswers()">View All Questions and Correct Answers</button>
      `;
    }
  }
});
