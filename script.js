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

function donationPlaceEl(id) {
  const placeName = document.getElementById(id).innerText;
  return placeName;
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

    // donation History
    const donationTime = new Date();
    const donationPlace = donationPlaceEl("first_place_name");
    const transcation = document.getElementById("history");
    transcation.innerHTML += `
    <div class="border p-5 rounded-xl lg:w-4/5 w-11/12 mx-auto">
    <p class='font-bold text-xl'>${inputField} Taka is  is ${donationPlace}</p>
    <p class='text-sm text-gray-600 mt-2'>Date: ${donationTime}</p>
    </div>
    `;
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

    // donation History
    const donationTime = new Date();
    const donationPlace = donationPlaceEl("second_place_name");
    const transcation = document.getElementById("history");
    transcation.innerHTML += `
     <div class="border p-5 rounded-xl lg:w-4/5 w-11/12 mx-auto">
     <p class='font-bold text-xl'>${inputField} Taka is  is Donated for ${donationPlace}</p>
     <p class='text-sm text-gray-600 mt-2'>Date: ${donationTime}</p>
     </div>
     `;
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
    // donation History
    const donationTime = new Date();
    // console.log(donationTime);
    const donationPlace = donationPlaceEl("third_place_name");
    const transcation = document.getElementById("history");
    transcation.innerHTML += `
     <div class="border p-5 rounded-xl lg:w-4/5 w-11/12 mx-auto">
     <p class='font-bold text-xl'>${inputField} Taka is  is Donated for ${donationPlace}</p>
     <p class='text-sm text-gray-600 mt-2'>Date: ${donationTime}</p>
     </div>
     `;
  });

// donation and History

function showbtn(id) {
  document.getElementById("history").classList.add("hidden");
  document.getElementById("donation").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}
function showbtnColor(id) {
  document.getElementById("history_add_btn").classList.remove("bg-lime-300");
  document.getElementById("donation_add_btn").classList.remove("bg-lime-300");

  document.getElementById(id).classList.add("bg-lime-300");
}

document
  .getElementById("donation_add_btn")
  .addEventListener("click", function () {
    showbtn("donation");
    showbtnColor("donation_add_btn");
  });

document
  .getElementById("history_add_btn")
  .addEventListener("click", function () {
    showbtn("history");
    showbtnColor("history_add_btn");
  });
