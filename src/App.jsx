import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateTutorial from './components/StateTutorial';
import ReducerTutorial from './components/ReducerTutorial';
import EffectTutorial from './components/EffectTutorial';
import RefTutorial from './components/RefTutorial';
import LayoutEffectTutorial from './components/LayoutEffectTutorial';

function App() {
  return (
    <div className="App-container">
      {/* <StateTutorial /> */}
      {/* <ReducerTutorial /> */}
      {/* <EffectTutorial /> */}
      {/* <RefTutorial /> */}
      <LayoutEffectTutorial />
    </div>
  );
}

export default App
