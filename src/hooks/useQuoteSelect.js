const useQuoteSelect = (quoteArr) => {

  const quoteSelect = () => {  
    const quoteArrLenth = quoteArr.length;
    if (quoteArrLenth === 0) return;
    if (quoteArrLenth === 1) return (quoteArr[0].fields.text);
    const getRandomQuote =  Math.round(Math.random() * quoteArrLenth);
    return quoteArr[getRandomQuote].fields.text;
  }

  return {quoteSelect}
}  

export default useQuoteSelect;