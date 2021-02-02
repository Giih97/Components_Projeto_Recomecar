import logo from './logo.svg';
import './App.css';
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <main>
            <Routes />
        </main>
          <div>
            <footer>
              <Footer />
            </footer>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
