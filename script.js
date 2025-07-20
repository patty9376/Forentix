const rates = {
      USD: { INR: 83.3, EUR: 0.91, GBP: 0.78, JPY: 156.2, CAD: 1.37, AUD: 1.49, CHF: 0.89, CNY: 7.25, HKD: 7.83, NZD: 1.63, SEK: 10.5, SGD: 1.35, KRW: 1302, ZAR: 18.2, MXN: 17.1, THB: 36.2, AED: 3.67, BRL: 5.4, MYR: 4.7 },
      INR: { USD: 0.012, EUR: 0.011, GBP: 0.0094, JPY: 1.87, CAD: 0.016, AUD: 0.018, CHF: 0.011, CNY: 0.087, HKD: 0.094, NZD: 0.019, SEK: 0.12, SGD: 0.016, KRW: 15.6, ZAR: 0.22, MXN: 0.20, THB: 0.43, AED: 0.044, BRL: 0.065, MYR: 0.057 },
      EUR: { USD: 1.10, INR: 91.8, GBP: 0.86, JPY: 172.0, CAD: 1.50, AUD: 1.64, CHF: 0.98, CNY: 7.93, HKD: 8.60, NZD: 1.79, SEK: 11.4, SGD: 1.48, KRW: 1432, ZAR: 20.0, MXN: 18.8, THB: 39.7, AED: 4.05, BRL: 6.0, MYR: 5.1 },
    };

    function convertCurrency() {
      const amount = parseFloat(document.getElementById('amount').value);
      const from = document.getElementById('from').value;
      const to = document.getElementById('to').value;
      const resultField = document.getElementById('result');

      if (isNaN(amount)) {
        resultField.textContent = 'Please enter a valid amount';
        return;
      }

      if (from === to) {
        resultField.textContent = `${amount.toFixed(2)} ${to}`;
        return;
      }

      const rate = rates[from]?.[to];
      if (!rate) {
        resultField.textContent = `Exchange rate not available for ${from} to ${to}`;
        return;
      }

      const converted = amount * rate;
      resultField.textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
    }