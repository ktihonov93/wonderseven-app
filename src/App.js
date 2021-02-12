import './App.css';
import WondersList from './components/WondersList';
import sevenWonders from './data';

function App() {
  return (
    <div className="App">
      <WondersList data={sevenWonders}/>
    </div>
  );
}

export default App;
