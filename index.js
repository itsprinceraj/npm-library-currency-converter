import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_HxsNs5lDYeTxPgKL3BZGHETTTzIbnwHulin2w5Qy"
);

export async function convertCurrency(baseCurrency, toCurrency, unit) {
  const response = await freecurrencyapi.latest({
    base_currency: baseCurrency,
    currencies: toCurrency,
  });

  const multiplier = response.data[toCurrency];
  console.log(multiplier);
  return multiplier * unit;
}

// convertCurrency("USD", "INR", 1);

// freecurrencyapi.latest({
//     base_currency: 'USD',
//     currencies: 'EUR'
// }).then(response => {
//     console.log(response);
// });
