import React, { useState } from 'react';
import Header from './component/header/Header'
import Footer from './component/Footer/index'
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgagemEscolhida from './imagens/logo2.png'
import imgagemEscolhida2 from './imagens/logo3.png'
import livros from './imagens/livro.jpg'

import './App.css';
function App() {
  return (
    <>
      <Header />
      <main className="container-flex">
        <div className="title">

          <strong>Discovery </strong><span>new World</span>
          <p>Here you can ready about the histories of other friends<b /> and be enchant with new adventures</p>
        </div>
        <div>
          <img src={imgagemEscolhida} />
        </div>
      </main>

      <section className="container-flex">

        <Card className="card-container">
          <Card.Img variant="top" src={livros} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              History write for Eduard Correia where 3 kids use your toy for save the world
            </Card.Text>
            <Button variant="primary">Ready more</Button>
          </Card.Body>
        </Card>

        <Card className="card-container">
          <Card.Img variant="top" src={livros} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              History write for Eduard Correia where 3 kids use your toy for save the world
            </Card.Text>
            <Button variant="primary">Ready more</Button>
          </Card.Body>
        </Card>

        <Card className="card-container">
          <Card.Img variant="top" src={livros} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="card-text">
              History write for Eduard Correia where 3
              kids use your toy for save the world
            </Card.Text>
            <Button variant="primary">Ready more</Button>
          </Card.Body>
        </Card>

      </section>

      <article className="container">
        <div className="text-article">
          <strong>Bee </strong><span>
            Stories It was created with the
            intention that you can
            create stories and read
            other people's stories.
          </span>
        </div>

      </article>

      <section className="container-flex">
      <div>
          <img src={imgagemEscolhida2} />
        </div>
        <div className="title">
          <strong>You can </strong>
          <p className="text2">Here you can ready about the histories of other friends<b /> and be enchant with new adventures</p>
         </div>
     
      </section>

      <Footer />
    </>
  )

}

export default App;