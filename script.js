const welcomeMessage = "Hello Welcome To My Website";
const invalidNameMessage = "Invalid Name Input, Please Try Again";
const thankYouMessage = "Program cancelled, Thank you for using this website";

const startBtn = document.getElementById("startBtn");
const card = document.getElementById("card");
const outScore = document.getElementById("outScore");
const outRemark = document.getElementById("outRemark");
const outName = document.getElementById("outName");

function validName(name) {
  return name.trim() !== "";
}

function validGrade(grade) {
  const g = grade.trim();
  if (g === "") return "Score cannot be empty, Please Try Again";
  if (isNaN(g))
    return "Score must be a number, not letters or symbols, Please Try Again";
  const n = Number(g);
  if (n < 0) return "Score cannot be below 0, Please Try Again";
  if (n > 100) return "Score cannot be above 100, Please Try Again";
  return null;
}

function getResult(score) {
  if (score >= 90) return { remark: "Excellent", state: "excellent" };
  else if (score >= 75) return { remark: "Passed", state: "passed" };
  else return { remark: "Failed", state: "failed" };
}

function cancelled() {
  alert(thankYouMessage);
}

startBtn.addEventListener("click", () => {
  alert(welcomeMessage);

  let name;
  do {
    name = prompt("Enter your Name");
    if (name === null) return cancelled();
    if (!validName(name)) alert(invalidNameMessage);
  } while (!validName(name));

  let grade, gradeError;
  do {
    grade = prompt("Enter your Score");
    if (grade === null) return cancelled();
    gradeError = validGrade(grade);
    if (gradeError !== null) alert(gradeError);
  } while (gradeError !== null);

  if (!confirm("Do you want to continue?")) return cancelled();

  const score = Number(grade.trim());
  const { remark, state } = getResult(score);

  outScore.textContent = score;
  outRemark.textContent = remark;
  outName.textContent = name.trim();
  card.dataset.state = state;
});
