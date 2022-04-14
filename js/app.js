function getInput(inputFeild) {
  const getInput = document.getElementById(inputFeild);
  const getInputText = getInput.value;
  const input = parseInt(getInputText);

  return input;
}
function totalExpenses() {
  const food = getInput("food");
  const rent = getInput("rent");
  const clothes = getInput("clothes");
  const totalExpenses = food + rent + clothes;
  return totalExpenses;
}
// calculate Btn event hendlar
document.getElementById("calculateBtn").addEventListener("click", function () {
  // for balance
  const balance = document.getElementById("balance");
  let showBalance = balance.innerHTML;
  if (isNaN(getInput("income"))) {
    console.log("geive a nlumm");
  } else if (getInput("income") > 0) {
    showBalance = getInput("income");
  } else if (getInput("income") < 0) {
    console.log("give a positive number");
  }
  // for expenses
  const expenses = document.getElementById("expenses");
  let showExpenses = expenses.innerHTML;
  if (isNaN(totalExpenses())) {
    console.log("geive a two");
  } else if (totalExpenses() > 0) {
    showExpenses = totalExpenses();
  } else if (totalExpenses() < 0) {
    console.log("give a positive number");
  }

  //   for corrent balance
  if (showExpenses <= showBalance) {
    expenses.innerHTML = showExpenses;
    balance.innerHTML = showBalance - showExpenses;
  } else {
    console.log("too");
  }

  const incomeInput = document.getElementById("income");
  incomeInput.value = "";
});

// save Btn event hendlar
document.getElementById("saveBtn").addEventListener("click", function () {
  const income = getInput("income");
  const saveInput = getInput("save");
  const totalSaving = (income * saveInput) / 100;
  const saving = document.getElementById("saving");
  const balance = document.getElementById("balance");
  const correntBalance = balance.innerHTML;
  if (totalSaving <= correntBalance) {
    saving.innerHTML = totalSaving;
  } else {
    console.log("not save");
  }
});
