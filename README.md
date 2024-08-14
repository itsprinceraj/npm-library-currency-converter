# Currency Converter

A simple npm library to converting from one currency to another

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Parameters](#parameters)

## Installation

To install the library, run:

```bash
npm i optimal-currency-converter
```

## Usage

First, import the library and create an instance of the convertCurrency function:

```bash
import { convertCurrency } from 'currency-converter';


const currencyVal = convertCurrency('USD', 'INR', 1)
console.log(currencyVal)
```
## Parameters

- "baseCurrency" (string): The currency code you want to convert from (e.g., 'USD').
- "toCurrency" (string): The currency code you want to convert to (e.g., 'INR').
- "unit"  (number): The amount you want to convert.

