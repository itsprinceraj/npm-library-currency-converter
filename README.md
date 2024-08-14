# Currency Converter

A simple npm library for converting currencies using the FreeCurrencyAPI.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Parameters](#parameters)
  - [Return Value](#return-value)
- [Example](#example)
- [API Key](#api-key)
- [License](#license)

## Installation

To install the library, run:

```bash
npm i optimal-currency-converter
```

## Usage

First, import the library and create an instance of the convertCurrency function:

```bash
import { convertCurrency } from 'currency-converter';

// Example usage
convertCurrency('USD', 'INR', 1)
  .then((result) => {
    console.log(`Converted amount: ${result}`);
  })
  .catch((error) => {
    console.error('Error converting currency:', error);
  });
```
## Parameters

- "baseCurrency" (string): The currency code you want to convert from (e.g., 'USD').
- "toCurrency" (string): The currency code you want to convert to (e.g., 'INR').
- "unit"  (number): The amount you want to convert.

