const Kahoot = require("kahoot.js-updated"); 
const client = new Kahoot();

client.join('000000', "Henry21");

function verifyProperty(array, property) {
  let finalNo
  array.forEach(function(value, i) {
    if (value[property] === true) {finalNo = i}
  });
  return(finalNo)
}

client.on("QuizStart", () => {
  console.log("The quiz has started!");
});

client.on("QuizEnd", () => {
  console.log("The quiz has ended.");
});

client.on("QuestionStart", question => {
  console.log(question)
  setTimeout(function(){
    question.answer(0);
  }, 100);
  
});
