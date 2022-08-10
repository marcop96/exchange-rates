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
