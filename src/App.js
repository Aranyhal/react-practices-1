import './App.css';
//import ButtonList from './buttonList'
import ButtonListWithMap from './buttonListWithMap'

//const buttonText = "Click me!";

function App() {
  return (
    <div className="App">
      <header className="App header">
        {/*<ButtonList text={buttonText} text2="blaBla" />*/}
        <ButtonListWithMap />
      </header>

    </div>
  );
}

export default App;
