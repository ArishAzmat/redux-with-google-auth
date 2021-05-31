import logo from './logo.svg';
import './App.css';
import Google from './google'
import { Provider } from 'react-redux';
import mart from './store/store'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Provider store={mart}>
        <Google/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
