import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  const getApiData = async () =>{
    const url = 'https://vqjqjauwa1.execute-api.us-east-2.amazonaws.com/default/thinktDigitalLamdaApp'

    const response = await fetch(url);
    const data = await response.json();    
    setData(data);
    setLoading(false);
  }

  getApiData();
  },[]);

  return (
    <div className="App">
      <h2>THINKT Digital task app</h2>
      <h4>Message from API:</h4>
      {loading ? <div>...loading</div> : <div>{data}</div>}
    </div>
  );
}

export default App;
