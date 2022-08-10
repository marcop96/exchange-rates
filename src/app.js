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
//?tofix: FIRST API CALL DOES NOTHING
//?
//select.options[select.selectedIndex].value; gets select values
//href gets full link

$convertButton.onclick = function () {
  getSelectValues();
  getURL();
  getData();
  showConversion();
};

setTimeout(addOptions, 500);
