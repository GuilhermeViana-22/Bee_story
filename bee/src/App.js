import React, { useState } from 'react';
import Header from './component/header/Header'
import Footer from './component/Footer/index'
import imgagemEscolhida from './imagens/logo2.png'


import './App.css';
function App() {

  return (
    <>
      <Header />
      <main className="container-flex">
        <div className="title">

          <strong>Discovery </strong><span>new World</span>
        </div>
        <div>
          <img src={imgagemEscolhida} />
        </div>
      </main>
      <Footer />
    </>
  )

}

export default App;