import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateTutorial from './components/StateTutorial';
import ReducerTutorial from './components/ReducerTutorial';

function App() {
  return (
    <div className="App-container">
      {/* <StateTutorial /> */}
      <ReducerTutorial />
    </div>
  );
}

export default App
