import React, {useState, useEffect} from 'react';

import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api')
    .then(response => response.json())
    .then(response => setData(response.message))
  }, [])

  return (
    <div className="RegistryPage">
      <header className="RegistryPage-header">
        <img src={logo} className="RegistryPage-logo" alt="logo" />

        <p>
          {
            !data ? "Loading..." : data
          }
        </p>

        <div className='h1'>
          <h1>Monogram</h1>
          </div>
          <div>
          <text className='ConfirmText'>Please select your country and enter your number</text>
        </div>
      </header>
    </div>
  );
}

export default App;
