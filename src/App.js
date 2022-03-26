import React, { useState } from 'react'


function App() {
  //valor do estado setado inicialmente como vazio
  const [product, setProduct] = useState('')

  function handleSearch() {

  }

  return (
    <>
      {/*função para atualizar o valor do estado através do input */}
      <input className="userInput" placeholder="Product" value={product} onChange={e => setProduct(e.target.value)} />
      <button type="button" onClick={handleSearch} >Search</button>
    </>
  );
}

export default App;
