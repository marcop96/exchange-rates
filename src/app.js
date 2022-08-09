const $amountInput = document.querySelector("#amount-input");
const $initialSelector = document.querySelector("#initial-currency-selector");
const $finalSelector = document.querySelector("#final-currency-selector");
const $convertButton = document.querySelector("#convert-button");
const $resultText = document.querySelector(".result-text");
let baseCurrency = "";
let conversionRate;
let targetCurrency = "";
let totalCurrencies = [];

fetch("https://v6.exchangerate-api.com/v6/517e16350fa29778db9d180f/latest/USD")
  .then((response) => response.json())
  .then((data) => totalCurrencies.push(Object.keys(data.conversion_rates)));

$convertButton.onclick = function () {
  getData();
  showConversion();
};

function getData() {
  fetch(
    "https://v6.exchangerate-api.com/v6/517e16350fa29778db9d180f/pair/USD/ARS"
  )
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
