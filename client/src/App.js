import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { AdsState, ModalState } from './context';

function App() {
  return (
    <ModalState>
      <AdsState>{useRoutes(routes)}</AdsState>
    </ModalState>
  );
}

export default App;
