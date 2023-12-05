// list of questions
let questions = [
  "Part 1 - In order to preserve our cultural identity, it's essential to maintain traditional values and practices, even if they limit adaptation to new circumstances.",
  "Adapting to changing circumstances is more important than strictly following traditional customs and values.",
  "I believe that society should prioritize stability and continuity over rapid innovation and change.",
  "Part 2- Private businesses and markets are crucial for driving economic growth and innovation.",
  "Public services, such as healthcare and education, should be collectively owned and provided by the community to ensure equal access for everyone.",
  "Individuals should have the freedom to pursue private business ventures without excessive government intervention.",
];
let answersList = [
  "Strongly Disagree",
  "Disagree",
  "neutral",
  "Agree",
  "Strongly Agree",
];
let answers = new Array();
answers[0] = null;
answers[1] = null;
answers[2] = null;
answers[3] = null;
answers[4] = null;
answers[5] = null;
// for printing the questions
for (let i = 0; i < questions.length; i++) {
  document.getElementById(`q-${i + 1}`).innerText = questions[i];
}
// up and down buttons functions
let counter = 1;
function down() {
  if (counter <= questions.length - 1 && answers[counter - 1] != null) {
    document.body.style.overflow = "normal";
    window.location.hash = `Question-${++counter}`;
  } else {
    console.log("al");
  }
}
function up() {
  if (counter >= 2) {
    document.body.style.overflow = "normal";
    window.location.hash = `Question-${--counter}`;
  }
}
// change style for chosen answer
function chosen(e, id, valId) {
  answers[id] = answersList[--valId];
  let c = document.querySelectorAll(".on-checked");
  c.forEach((tag) => {
    tag.classList.remove("on-checked");
  });
  //add class
  e.classList.add("on-checked");
  down();
}
document.body.style.overflow = "hidden";
