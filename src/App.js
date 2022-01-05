import InsertText from './insertText';
import './App.css';

const buttonText = "Click me here again";

function App() {
  return (
    <div className="App">
      <header className="App header">
        <InsertText text={buttonText} text2="blaBla" />
      </header>

    </div>
  );
}

export default App;
