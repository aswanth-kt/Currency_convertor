import useCurrencyInfo from "./hooks/useCurrencyInfo"
import ConvertorHomePage from "./Pages/ConvertorHomePage"


function App() {
  
  useCurrencyInfo("usd")
  return (
    <>
      <ConvertorHomePage />
    </>
  )
}

export default App
