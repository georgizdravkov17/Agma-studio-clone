import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import './css/main.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Layout />
    </div>
    </BrowserRouter>
  );
}

export default App;
