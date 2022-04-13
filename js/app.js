function income() {
  const incomeInput = document.getElementById("income");
  const getIncomeText = incomeInput.value;
  const income = parseInt(getIncomeText);

  return income;
}
function totalExpenses() {
  const foodInput = document.getElementById("food");
  const rentInput = document.getElementById("rent");
  const clothesInput = document.getElementById("clothes");

  const foodInputText = foodInput.value;
  const rentInputText = rentInput.value;
  const clothesInputText = clothesInput.value;

  const totalExpenses =
    parseInt(foodInputText) +
    parseInt(rentInputText) +
    parseInt(clothesInputText);

  return totalExpenses;
}
// calculate Btn event hendlar
document.getElementById("calculateBtn").addEventListener("click", function () {
  // for balance
  const balance = document.getElementById("balance");
  let showBalance = balance.innerHTML;
  if (isNaN(income())) {
    console.log("geive a nlumm");
  } else if (income() > 0) {
    showBalance = income();
  } else if (income() < 0) {
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
    const balance = document.getElementById("balance");
    
});
