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
    return "field must contain at least one number";
  }
  // if ("d+(.d+)?(?=$| )".test(amount)) {
  //   console.log("only numbers");
  // }
}

function validateInitialSelect(select) {
  if (select == "Choose a currency") {
    console.log("please select a currency");
    $initialSelector.classList.add("outline-red-500");
  }
}
function validateFinalSelect(select) {
  if (select == "Choose a currency") {
    $finalSelector.classList.add("outline-red-500");
  }
}
