import { useState } from 'react';
import './App.css';
import Box from './components/box';

function App() {
  const [value, setValue] = useState('');

  const onBtnClick = () => {

  }

  return (
    <div className="outer">
     <div className="inner">
        <Box value={1} onBtnClick={onBtnClick}/>
     </div>
    </div>
  );
}

export default App;
