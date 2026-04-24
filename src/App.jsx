import useCurrencyInfo from "./hooks/useCurrencyInfo"


function App() {
  
  useCurrencyInfo("usd")
  return (
    <>
      <h1 className="bg-amber-700">Currency Convertor</h1>
    </>
  )
}

export default App
