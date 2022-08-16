const $amountInput = document.querySelector("#amount-input");
const $initialSelector = document.querySelector("#initial-currency-selector");
const $finalSelector = document.querySelector("#final-currency-selector");
const $convertButton = document.querySelector("#convert-button");
const $resultText = document.querySelector(".result-text");
let baseCurrency = "";
let conversionRate;
let targetCurrency = "";
let totalCurrencies;
let initialValue;
let finalValue;
let URL1 = "https://v6.exchangerate-api.com/v6/517e16350fa29778db9d180f/pair/";

getCurrencies();

//select.options[select.selectedIndex].value; gets select values

$convertButton.onclick = function () {
  validateAmount($amountInput.value);
  getSelectValues();
  validateInitialSelect(initialValue);
  validateFinalSelect(finalValue);
  if (
    validateAmount($amountInput.value) ||
    validateInitialSelect(initialValue) ||
    validateInitialSelect(finalValue) === true
  ) {
    return;
  }

  getURL();
  getData();
  showConversion();
};

setTimeout(addOptions, 500);
function getData() {
  fetch(URL1)
    .then((response) => response.json())
    .then((data) => {
      baseCurrency = data.base_code;
      targetCurrency = data.target_code;
      conversionRate = data.conversion_rate;
    });
}

function showConversion() {
  $resultText.textContent = `${$amountInput.value} ${baseCurrency} are ${
    conversionRate * $amountInput.value
  } ${targetCurrency}`;
}

function getCurrencies() {
  fetch(
    "https://v6.exchangerate-api.com/v6/517e16350fa29778db9d180f/latest/USD"
  )
    .then((response) => response.json())
    .then((data) => (totalCurrencies = Object.keys(data.conversion_rates)));
}
function addOptions() {
  totalCurrencies.forEach(function (e) {
    let newOption = document.createElement("option");

    newOption.textContent = e;
    newOption.value = e;
    $initialSelector.appendChild(newOption);
    $finalSelector.appendChild(newOption.cloneNode(true));
  });
}

function getURL() {
  return (URL1 = `https://v6.exchangerate-api.com/v6/517e16350fa29778db9d180f/pair/${initialValue}/${finalValue}`);
}

function getSelectValues() {
  initialValue = $initialSelector.options[$initialSelector.selectedIndex].value;
  finalValue = $finalSelector.options[$finalSelector.selectedIndex].value;
}

function validateAmount(amount) {
  if (amount.length === 0) {
    console.log("field must contain at least one number");
    $amountInput.classList.add("outline");
    return "field must contain at least one number";
  }
  // if ("d+(.d+)?(?=$| )".test(amount)) {
  //   console.log("only numbers");
  // }
}
function validateInitialSelect(select) {
  if (select == "Choose a currency") {
    console.log("please select an initial currency");
    $initialSelector.classList.add("outline");
    return "Please select an initial currency";
  } else {
    return;
  }
}
function validateFinalSelect(select) {
  if (select == "Choose a currency") {
    console.log("please select a final currency");
    $finalSelector.classList.add("outline");
    return "Please select a final currency";
  } else {
    return;
  }
}
