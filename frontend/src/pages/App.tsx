import React from 'react';
import './App.css';
import TipoeqCrud from './TipoeqCrud';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <TipoeqCrud />
    </>
  );
}

export default App;
