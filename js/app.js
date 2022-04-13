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
  const balance = document.getElementById("balance");
  if (isNaN(income())) {
    console.log("geive a nlumm");
  } else if (income() > 0) {
    balance.innerHTML = income();
  }
  const expenses = document.getElementById("expenses");

  if (isNaN(totalExpenses())) {
    console.log("geive a two");
  } else if (totalExpenses() > 0) {
    expenses.innerHTML = totalExpenses();
  }

  const incomeInput = document.getElementById("income");
  incomeInput.value = "";
});

// save Btn event hendlar
document.getElementById("saveBtn").addEventListener("click", function () {});
