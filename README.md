# 💱 Currency Converter App

A simple and responsive currency converter built using **React**. This application allows users to convert between different currencies in real-time using an external exchange rate API.

---

## 🚀 Features

* Convert between multiple currencies
* Real-time exchange rates via API
* Swap currencies instantly
* Clean and reusable component structure
* Responsive UI with Tailwind CSS
* Displays effective exchange rate date

---

## 🧠 How It Works

* Users input an amount and select a base currency (`From`)
* Select a target currency (`To`)
* On form submission, the app calculates the converted value using fetched exchange rates
* The "Swap" button switches the selected currencies and values

---

## 🌐 Live Demo

👉 [Live Link](https://currencyyconvertor.vercel.app)

---

## 🎥 Demo Video

▶️ [Watch the Demo]()

---

## 🛠️ Tech Stack

* **React** (Functional Components + Hooks)
* **Tailwind CSS** (Styling)
* **Custom Hook** for API handling

---

## 📡 API Used

Exchange rates are fetched from:

```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json
```

* `${currency}` is dynamically replaced with the selected base currency (e.g., `usd`, `inr`)
* Returns a JSON object containing conversion rates relative to the base currency

---


## 🔧 Installation & Setup

1. Clone the repository:

```bash
git https://github.com/aswanth-kt/Currency_convertor.git
cd Currency_convertor
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

---

## ⚙️ Key Components

### `InputBox`

Reusable component that handles:

* Amount input
* Currency selection dropdown
* Disabled states for input/select

---

### `ConvertorHomePage`

Main container that:

* Manages state (`amount`, `from`, `to`, `convertedAmount`)
* Handles currency swapping
* Performs conversion logic
* Displays UI

---

### `useCurrencyInfo`

Custom hook that:

* Fetches exchange rates based on selected base currency
* Returns:

  * Currency data (rates)
  * Effective date

---

## 📌 Future Improvements

* Add loading and error states
* Improve input validation
* Auto-convert on input change
* Optimize state management (remove derived state)
* Add unit tests
* Improve accessibility

---


## 👨‍💻 Author

Developed as a learning project to understand:

* React Hooks
* Component reusability
* API integration
* State management

---

## 💡 Notes

This project focuses on simplicity and clarity rather than production-level robustness. Improvements can be made in performance, error handling, and architecture.

---
