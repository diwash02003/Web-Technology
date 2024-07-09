document.addEventListener("DOMContentLoaded", () => {
    loadSection("home");
  
    document.getElementById("submit")?.addEventListener("click", () => {
      const answer = getSelected();
      if (answer) {
        if (answer === quizData[currentQuiz].correct) {
          score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
          loadQuiz(); // Load the next question
        } else {
          // End of quiz, display final score
          document.getElementById("quiz").innerHTML = `
            <h2>You answered correctly ${score} out of ${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>
          `;
        }
      } else {
        alert("Please select an answer.");
      }
    });
  
    const menuToggle = document.getElementById("mobile-menu");
    const navList = document.getElementById("nav-list");
  
    menuToggle.addEventListener("click", () => {
      navList.classList.toggle("show");
      if (navList.classList.contains("show")) {
        document.querySelector("main").style.marginTop = `${navList.offsetHeight}px`;
      } else {
        document.querySelector("main").style.marginTop = "2rem";
      }
    });
  });
  
  function loadSection(section) {
    fetch(`${section}.html`)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("content").innerHTML = data;
        if (section === "quiz") {
          loadQuiz();
        }
      })
      .catch((error) => console.error("Error loading section:", error));
  }
  
  const quizData = [
    {
      question: "Which language is used for styling web pages?",
      options: { a: "HTML", b: "JQuery", c: "CSS", d: "XML" },
      correct: "c",
    },
    {
      question: "What does HTML stand for?",
      options: {
        a: "Hyper Trainer Marking Language",
        b: "Hyper Text Marketing Language",
        c: "Hyper Text Markup Language",
        d: "Hyper Text Markup Leveler",
      },
      correct: "c",
    },
    // Add more quiz questions as needed...
  ];
  
  let currentQuiz = 0;
  let score = 0;
  
  function loadQuiz() {
    deselectAnswers();
  
    const currentQuizData = quizData[currentQuiz];
    document.getElementById("question").innerText = currentQuizData.question;
    const answersList = document.getElementById("answers-list");
    answersList.innerHTML = "";
    for (const option in currentQuizData.options) {
      const li = document.createElement("li");
      li.innerHTML = `
        <input type="radio" name="answer" id="${option}" class="answer">
        <label for="${option}" id="${option}_text">${currentQuizData.options[option]}</label>
      `;
      answersList.appendChild(li);
    }
  }
  
  function deselectAnswers() {
    const answerEls = document.querySelectorAll(".answer");
    answerEls.forEach((answerEl) => (answerEl.checked = false));
  }
  
  function getSelected() {
    let answer;
    const answerEls = document.querySelectorAll(".answer");
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  