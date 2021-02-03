import './App.css';
import { BrowserRouter } from "react-router-dom";
import CardQuadrado from './Components/Cards/CardQuadrado/cardQuadrado';
import CardRedondo from './Components/Cards/CardRedondo';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CardQuadrado/>
        <CardRedondo/>
      </div>
    </BrowserRouter>
  );
}

export default App;
