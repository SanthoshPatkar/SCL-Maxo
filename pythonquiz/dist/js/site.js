
let questions = [
  {
    id: 1,
    question: "Is Python case sensitive when dealing with identifiers?",
    answer: "Yes",
    options: [
      "Yes",
      "No",
     "Machine dependent",
     "None of the mentioned"
    ]
  },
  {
    id: 2,
    question: "Select the correct option to draw a rectangle centred at 50,50 with width and height as 50, 70 respectively.",
    answer: "Canvas.create_rectangle(50,50,50,70)",
    options: [
      "Canvas.create_rect(50,50,50,70)",
      "Canvas.create_rect(50,70,50,50)",
      "Canvas.create_rectangle(50,50,50,70)",
      "Tkinter.create_rect(50,50,50,70)"
    ]
  },
  {
    id: 3,
    question: "What will be the value of the following Python expression?"+"<br>"+"<br>"+"4 + 3 % 5",
    answer: "7",
    options: [
      "4",
      "7",
      "2",
      "0"
    ]
  },
  {
    id: 4,
    question: " What will be the output of the following Python code?"+"<br>"+"<br>"+"x = ['ab', 'cd']"+"<br>"+"for i in x:"+"<br>"+"</t>"+"i.upper()"+"<br>"+"print(x)",
    answer: "[‘ab’, ‘cd’]",
    options: [
      "[‘ab’, ‘cd’]",
      "[‘AB’, ‘CD’]",
      " [None, None]",
      "none of the mentioned"
    ]
  }, 
  {
    id: 5,
    question: " What happens when '2' == 2 is executed?",
    answer: "False",
    options: [
      "True",
      "False",
      " ValueError occurs",
      "Type Error occurs"
    ]
  },
  {
    id: 6,
    question: " What is the output of the following?"+"<br>"+"<br>"+"print([i.lower() for i in 'HELLO'])",
    answer: "['h','e','l','l','o']",
    options: [
      "'hello'",
      "['hello']",
      " ['h','e','l','l','o']",
      "hello"
    ]
  },
  {
    id: 7,
    question: "Select the correct code to create a check button under parent frame1 and it should be bind to v1?",
    answer: "Checkbutton(frame1 , text=''Bold’’ ,variable=v1 ,command=processCheckbutton)",
    options: [
      "CheckButton(frame1, text=''Bold'' , command=CheckButton)",
      "Checkbutton(frame.set(f1) ,text.set(''bold'') ,command=v1.set(processCheckbutton)",
      " Checkbutton(frame1,text=''Bold'',variable=v1.set(),command=v1.set(processCheckbut ton)",
      "Checkbutton(frame1 , text=''Bold’’ ,variable=v1 ,command=processCheckbutton)"
    ]
  },
  {
    id: 8,
    question: " What Python built-in function returns the unique number assigned to an object",
    answer: "id()",
    options: [
      "identity()",
      "refnum()",
      " ref()",
      "id()"
    ]
  },
  {
    id: 9,
    question: "Which code can be used as an input dialog named ''Is this a character? ''",
    answer: "Tkinter.messagebox.askyesno(''askyesno'' , ''Is this a character? '')",
    options: [
      "Tkinter.messagebox.showerror(''showerror'' , ''Is this a character? '')",
      "Tkinter.messagebox.askyesno(''askyesno'' , ''Is this a character? '')",
      "Tkinter.messagebox.showinfo(''showinfo'' , ''Is this a character? '')",
      "Tkinter.messagebox.showwarning(''showwarning'' , ' 'Is this a character? '')"
    ]
  },
   {
    id: 10,
    question: " Choose the correct function from the following list to get the random integer between 99 to 200, which is divisible by 3.",
    answer: "random.randrange(99, 200, 3)",
    options: [
      "random.randrange(99, 200, 3)",
      "random.randint(99, 200, 3)",
      "random.random(99, 200, 3)",
      "random.randdint(99, 201, 3)"
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
