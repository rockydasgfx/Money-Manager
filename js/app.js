// get input
function getInput(inputFeild) {
  const getInput = document.getElementById(inputFeild);
  const getInputText = getInput.value;
  const input = parseInt(getInputText);
  return input;
}

// total expenses amount
function totalExpenses() {
  const food = getInput("food");
  const rent = getInput("rent");
  const clothes = getInput("clothes");
  const totalExpenses = food + rent + clothes;
  return totalExpenses;
}

// select all error
const errors = document.getElementsByClassName("error");

// calculate Btn event hendlar
document.getElementById("calculateBtn").addEventListener("click", function () {
  // for balance
  const balance = document.getElementById("balance");
  let showBalance = balance.innerHTML;
  if (isNaN(getInput("income"))) {
    errors[0].classList.remove("hidden");
    errors[1].classList.add("hidden");
    errors[2].classList.add("hidden");
    errors[3].classList.add("hidden");
  } else if (getInput("income") > 0) {
    showBalance = getInput("income");
  } else if (getInput("income") < 0) {
    errors[0].classList.add("hidden");
    errors[1].classList.remove("hidden");
    errors[2].classList.add("hidden");
    errors[3].classList.add("hidden");
  }

  // for expenses
  const expenses = document.getElementById("expenses");
  let showExpenses = expenses.innerHTML;
  if (isNaN(totalExpenses())) {
    errors[0].classList.remove("hidden");
    errors[1].classList.add("hidden");
    errors[2].classList.add("hidden");
    errors[3].classList.add("hidden");
  } else if (totalExpenses() > 0) {
    showExpenses = totalExpenses();
  } else if (totalExpenses() < 0) {
    errors[0].classList.add("hidden");
    errors[1].classList.remove("hidden");
    errors[2].classList.add("hidden");
    errors[3].classList.add("hidden");
  }

  //   for corrent balance
  if (showExpenses <= showBalance) {
    expenses.innerHTML = showExpenses;
    balance.innerHTML = showBalance - showExpenses;
  } else {
    errors[0].classList.add("hidden");
    errors[1].classList.add("hidden");
    errors[2].classList.remove("hidden");
    errors[3].classList.add("hidden");
  }
});

// save Btn event hendlar
document.getElementById("saveBtn").addEventListener("click", function () {
  let income;
  if (isNaN(getInput("income"))) {
    errors[0].classList.remove("hidden");
    errors[1].classList.add("hidden");
    errors[2].classList.add("hidden");
    errors[3].classList.add("hidden");
  } else if (getInput("income") > 0) {
    income = getInput("income");
  } else if (getInput("income") < 0) {
    errors[0].classList.add("hidden");
    errors[1].classList.remove("hidden");
    errors[2].classList.add("hidden");
    errors[3].classList.add("hidden");
  }

  const saveInput = getInput("save");
  const totalSaving = (income * saveInput) / 100;
  const saving = document.getElementById("saving");

  const balance = document.getElementById("balance");
  const correntBalance = balance.innerHTML;

  // show remaining balance
  const totalBalance = correntBalance - totalSaving;
  const remainingBalance = document.getElementById("Remaining");

  // show saving amount
  if (correntBalance > totalSaving) {
    saving.innerHTML = totalSaving;
    remainingBalance.innerHTML = totalBalance;
  } else {
    errors[0].classList.add("hidden");
    errors[1].classList.add("hidden");
    errors[2].classList.add("hidden");
    errors[3].classList.remove("hidden");
  }
});
