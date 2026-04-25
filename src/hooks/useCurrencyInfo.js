import { useEffect, useState } from "react"

const useCurrencyInfo = (currency) => {

  const [data, setData] = useState({});
  const [effectiveDate, setEffectiveDate] = useState(null);
  // let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
  
  useEffect(() => {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setData(data[currency])
      setEffectiveDate(data.date)
    })
    
  }, [currency])

  // console.log("effectiveDate:", effectiveDate);
  // console.log("Data:", data);

  return [data, effectiveDate];
}

export default useCurrencyInfo;