import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
let counter = 0;

setInterval(function() {
  root.render(<Home counter={counter} />);
  // console.log(counter);
  counter++;
}, 1000)
