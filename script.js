function inputFieldValue(id) {
  const inputElement = document.getElementById(id);
  const inputValue = parseFloat(inputElement.value);
  inputElement.value = "";

  return inputValue;
}

function amountValueEl(id) {
  const amountValue = parseFloat(document.getElementById(id).innerText);
  return amountValue;
}

document
  .getElementById("first_donate_btn")
  .addEventListener("click", function () {
    const inputField = inputFieldValue("input_field");

    const IntotalAmount = amountValueEl("in_total_amount");
    const decriseIntotal = IntotalAmount - inputField;

    const donateAmount = amountValueEl("amount");
    const donate = donateAmount + inputField;

    document.getElementById("in_total_amount").innerText = decriseIntotal;
    document.getElementById("amount").innerText = donate;
  });

document
  .getElementById("second_donate_btn")
  .addEventListener("click", function () {
    const inputField = inputFieldValue("second_input_field");

    const IntotalAmount = amountValueEl("in_total_amount");
    const decriseIntotal = IntotalAmount - inputField;

    const donateAmount = amountValueEl("second_amount");
    const donate = donateAmount + inputField;

    document.getElementById("in_total_amount").innerText = decriseIntotal;
    document.getElementById("second_amount").innerText = donate;
  });

document
  .getElementById("thrid_donate_btn")
  .addEventListener("click", function () {
    const inputField = inputFieldValue("third_input_field");

    const IntotalAmount = amountValueEl("in_total_amount");
    const decriseIntotal = IntotalAmount - inputField;

    const donateAmount = amountValueEl("third_amount");
    const donate = donateAmount + inputField;

    document.getElementById("in_total_amount").innerText = decriseIntotal;
    document.getElementById("third_amount").innerText = donate;
  });
