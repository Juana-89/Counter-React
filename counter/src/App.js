import React, { useState } from 'react';
import './App.css';
import  Button  from './components/Button';
import  Counter  from './components/Counter';

export default function App() {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => { setClicks(clicks + 1)};
  const resetClick = () => { setClicks(0) };

  return (
    <div className="App" >
    <div className="main-container" data-testid="main">
      <Counter clicks={ clicks } />
      <Button
      text='Click'
      clickButton={ true }
      handleClick={ handleClick } />
      <Button
      text='Reset'
      clickButton={ false }
      handleClick={ resetClick } />
    </div>
    </div>
  )
}
