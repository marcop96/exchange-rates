const $amountInput = document.querySelector("#amount-input");
const $initialSelector = document.querySelector("#initial-currency-selector");
const $finalSelector = document.querySelector("#final-currency-selector");
const $convertButton = document.querySelector("#convert-button");
const $resultText = document.querySelector(".result-text");
let conversion = "";
// fetch https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD

$convertButton.addEventListener('click')function () {
  fetch(
    "https://v6.exchangerate-api.com/v6/517e16350fa29778db9d180f/pair/EUR/GBP"
  )
    .then((response) => response.json())
    .then(
      (data) =>
        ($resultText.textContent = `${$amountInput} Eur are ${data.conversion_rate} GBP`)
    );
});
