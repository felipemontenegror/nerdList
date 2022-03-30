import React, { useState } from 'react'
import axios from 'axios'


function Home() {
  //valor do estado setado inicialmente como vazio
  const [product, setProduct] = useState('')

  function handleSearch() {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    axios.get(`${proxyurl}https://cors-anywhere.herokuapp.com/https://store.omelete.com.br/autocomplete/autocomplete/${product}`).then(response => console.log(response))
  }

  return (
    <>
      {/*função para atualizar o valor do estado através do input */}
      <input className="userInput" placeholder="Product" value={product} onChange={e => setProduct(e.target.value)} />
      <button type="button" onClick={handleSearch} >Search</button>
    </>
  );
}

export default Home;