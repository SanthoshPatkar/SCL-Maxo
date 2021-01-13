
let questions = [
  {
    id: 1,
    question: "Which of the following option leads to the portability and security of Java?",
    answer: "Bytecode is executed by JVM",
    options: [
      "Bytecode is executed by JVM.",
      "The applet makes the Java code secure and portable.",
     "Use of exception handling.",
     "Dynamic binding between objects."
    ]
  },
  {
    id: 2,
    question: "_____ is used to find and fix bugs in the Java programs.",
    answer: "JDB",
    options: [
      "JVM",
      "JRE",
      "JDK",
      "JDB"
    ]
  },
  {
    id: 3,
    question: " Which of the following creates a List of 3 visible items and multiple selections abled?",
    answer: "new List(3, true)",
    options: [
      "new List(false, 3)",
      "new List(3, true)",
      "new List(true, 3)",
      "new List(3, false)"
    ]
  },
  {
    id: 4,
    question: "Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?",
    answer: "Javadoc tool",
    options: [
      "javap tool",
      "javaw command",
      "Javadoc tool",
      "javah command"
    ]
  },
  {
    id: 5,
    question: "Which of the following for loop declaration is not valid?",
    answer: "for ( int i = 99; i >= 0; i / 9 )",
    options: [
      "for ( int i = 7; i <= 77; i += 7 )",
      "for ( int i = 20; i >= 2; - -i )",
      "for ( int i = 99; i >= 0; i / 9 )",
      "for ( int i = 2; i <= 20; i = 2* i )"
    ]
  },
  {
    id: 6,
    question: "In which process, a local variable has the same name as one of the instance variables?",
    answer: "Variable Shadowing",
    options: [
      "Abstraction",
      "Serialization",
      " ['h','e','l','l','o']",
      "Multi-threading"
    ]
  },
  {
    id: 7,
    question: "Which of the following is true about the anonymous inner class?",
    answer: "It has no class name",
    options: [
      "It has only methods",
      "It has no class name",
      "Objects can't be created",
      "It has a fixed class name"
    ]
  },
  {
    id: 8,
    question: "Which option is false about the final keyword?",
    answer: "A final class cannot be extended.",
    options: [
      "A final class cannot be extended.",
      "A final method cannot be overridden in its subclasses.",
      "A final class cannot be extended.",
      "A final method can be inherited."
    ]
  },
  {
    id: 9,
    question: "What is the use of the intern() method?",
    answer: "It returns the existing string from memory",
    options: [
      "It returns the existing string from memory",
      "It modifies the existing string in the database",
      "It creates a new string in the database",
      "None of the above"
    ]
  },
   {
    id: 10,
    question: "If three threads trying to share a single object at the same time, which condition will arise in this scenario?",
    answer: "Race condition",
    options: [
      "Race condition",
      "Time-Lapse",
      "Critical situation",
      "Recursion"
    ]
  },
];

let question_count = 0;
let points = 0;

window.onload = function () {
  show(question_count);

};

function next() {


  
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
 
  if (user_answer == questions[question_count].answer) {
    points += 1;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
