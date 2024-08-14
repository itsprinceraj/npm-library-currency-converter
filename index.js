import Freecurrencyapi from "@everapi/freecurrencyapi-js";

//  take instance of currency api
const freecurrencyapi = new Freecurrencyapi(
  "fca_live_HxsNs5lDYeTxPgKL3BZGHETTTzIbnwHulin2w5Qy"
);

//  create an async function and make api call
export async function convertCurrency(baseCurrency, toCurrency, unit) {
  const response = await freecurrencyapi.latest({
    base_currency: baseCurrency,
    currencies: toCurrency,
  });

  //  fetch the value of converted currency
  const multiplier = response.data[toCurrency];
  console.log(multiplier);
  return multiplier * unit; // return it
}

// convertCurrency("USD", "INR", 1);

// freecurrencyapi.latest({
//     base_currency: 'USD',
//     currencies: 'EUR'
// }).then(response => {
//     console.log(response);
// });
