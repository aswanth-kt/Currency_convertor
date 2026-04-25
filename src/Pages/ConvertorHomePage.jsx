import { useState } from "react";
import { InputBox } from "../components/index.js";
import useCurrencyInfo from "../hooks/useCurrencyInfo.js";
import BackgroundImage from "../assets/1693840705179.jpg";

const ConvertorHomePage = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const [currencyInfo, effectiveDate] = useCurrencyInfo(from);

  const currencyKeys = Object.keys(currencyInfo);

  const swap = () => {
    // console.log("currencyInfo-swap: ", currencyInfo[from], " ", currencyInfo[to]);

    setTo(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    // console.log("currencyInfo: ", currencyInfo[from], " ", currencyInfo[to]);

    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    convert();
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

            <div className="text-2xl font-bold text-center mb-5 text-white">
              Currency Convertor
              <p className="text-sm text-white/70 mt-1">
                Effective Date: {effectiveDate}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
            >

              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={currencyKeys}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  disabled={currencyKeys.length === 0}
                />
              </div>

              <div className="relative w-full h-0.5">

                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  Swap
                </button>

              </div>

              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={currencyKeys}
                  selectCurrency={to}
                  onAmountChange={setConvertedAmount}
                  onCurrencyChange={(currency) => setTo(currency)}
                  amountDisabled
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>

            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default ConvertorHomePage;
