function income() {
  const incomeInput = document.getElementById("income");
  const getIncomeText = incomeInput.value;
  const income = parseInt(getIncomeText);
  return income;
}
// calculate Btn event hendlar
document.getElementById("calculateBtn").addEventListener("click", function () {
  const balance = document.getElementById("balance");
});

// save Btn event hendlar
document.getElementById("saveBtn").addEventListener("click", function () {});
