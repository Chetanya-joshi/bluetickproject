import logo from './logo.svg';
import './App.css';
import HeroPage from './HeroSection/HeroPage';
import Offer from './WhatweOffer/Offer';
import Blog from './Blog/blog';
import Form from './Form/Form';

function App() {
  return (
    <div className="App">
      <HeroPage />
      <Offer />
      <Blog />
      <Form />

    </div>
  );
}

export default App;
