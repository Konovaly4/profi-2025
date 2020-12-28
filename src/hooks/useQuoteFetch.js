const useQuoteFetch = (url, keyword, loaderOn, loaderOff) => {

  const quoteSearch = () => {
    loaderOn();
    return fetch (`${url}?q=${keyword}&onlyLines=50`, {
      redirect: 'follow',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }})
    .then(res => {
      loaderOff();
      return( res.ok ? res.json() : Promise.reject(res));
    })
    .then(data => {
      if (!data || data.length === 0) return;
      if (data.length === 1) return (data[0].fields.text);
      return data[Math.round(Math.random() * (data.length - 1))].fields.text;
    })
    .catch(err => console.log(err));
  }

  return {quoteSearch};
}

export default useQuoteFetch;