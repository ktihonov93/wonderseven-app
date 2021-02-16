import "./App.css";
import WondersList from "./components/WondersList";
import sevenWonders from "./data";

function App() {
  const handleShowName = (name) => {
    alert(name);
  };

  return (
    <div className="App">
      <WondersList handleClick={handleShowName} data={sevenWonders} />
    </div>
  );
}

export default App;
