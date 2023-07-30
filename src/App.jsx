import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateTutorial from './components/StateTutorial';
import ReducerTutorial from './components/ReducerTutorial';
import EffectTutorial from './components/EffectTutorial';
import RefTutorial from './components/RefTutorial';
import LayoutEffectTutorial from './components/LayoutEffectTutorial';
import ImperativeHandle from './components/ImperativeHandle';

function App() {
  return (
    <div className="App-container">
      {/* <StateTutorial /> */}
      {/* <ReducerTutorial /> */}
      {/* <EffectTutorial /> */}
      {/* <RefTutorial /> */}
      {/* <LayoutEffectTutorial /> */}
      <ImperativeHandle />
    </div>
  );
}

export default App
