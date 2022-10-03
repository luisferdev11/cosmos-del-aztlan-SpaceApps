import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import logo from './logo.png';
import diagrama from './diagrama.png';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <div className='green rounded border-bottom'>
        <Nav>
          <Nav.Item className='container mt-3 mb-2'>
            <img src={logo} style={{width:'3rem'}}></img>
          </Nav.Item>
        </Nav>
        <header className='container mt-2 mb-5'>
          <h1>Carrington Detection AI</h1>
          <p>Trying to prevent a disaster caused by Carrington Events, we present an pipeline that tracks solar wind speed.</p>
        </header>
      </div>
      <main className='container my-5 d-flex justify-content-around'>
        <Card className='green' style={{width: '18rem'}}>
          <Card.Body>
            <Card.Title>Origin</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>A breif historical resume</Card.Subtitle>
            <Card.Text>
            Observed by the British astronomer Richard Carrington, the Carrington Event was a solar storm that happened in 1859. At that time, it just caused strong auroral displays and sparking and fires in telegraph stations. Maybe not a big issue, but nowadays it could cause damage to a big part of our lives.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='green' style={{width: '18rem'}}>
          <Card.Body>
            <Card.Title>Today's danger</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>Why do we need to find a solution</Card.Subtitle>
            <Card.Text>
            Nowadays, we use a considerable amount of electronic devices, some of them are part of big complex control systems like telecommunication ones, some others just help us to live easier. Knowing that Carrington events cause damage to electronic devices force us to develop a way to understand when they could be happening.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='green' style={{width: '18rem'}}>
          <Card.Body>
            <Card.Title>Our solution</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>A modern approach</Card.Subtitle>
            <Card.Text>
            Trying to know when a Carrington event could happen, we developed an AI algorithm that's capable of identify a possible Carrington event. Knowing when they could happen, we can take actions to prevent damage to our electrical devices.  An extensive explanation on how it works can by find deep in this page.
            </Card.Text>
          </Card.Body>
        </Card>
      </main>
      <center>
      <div>
        <Carousel className='negritas' variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-75 h-50"
              src={diagrama}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      </center>
      <br></br>
      <footer className='green' style={{height: '5rem'}}>
        <br></br>
        <center>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-google-drive" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 10l-6 10l-3 -5l6 -10z" />
            <path d="M9 15h12l-3 5h-12" />
            <path d="M15 15l-6 -10h6l6 10z" />
          </svg>
          <a href='https://drive.google.com/drive/u/1/folders/1pZqNzj_QUuakLT48s_xHib6fGBmow0cq'>Download the IA</a>
        </center>
      </footer>
    </div>
  );
}

export default App;
