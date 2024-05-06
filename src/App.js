import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="RegistryPage">
      <header className="RegistryPage-header">
        <img src={logo} className="RegistryPage-logo" alt="logo" />
        <div className='h1'>
          <h1>Telegram</h1>
          </div>
          <div>
          <text className='ConfirmText'>Please select your country and enter your number</text>
        </div>
      </header>
    </div>
  );
}

export default App;
