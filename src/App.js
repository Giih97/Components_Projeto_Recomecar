import './App.css';
import { BrowserRouter } from "react-router-dom";
import CardQuadrado from './Components/Cards/CardQuadrado';
import CardRedondo from './Components/Cards/CardRedondo';
import Carousel from './Components/Carousel/Carousel';
import Banner from './Components/Banner';
import CarouselComCards from './Components/Carousel/CarouselComCards';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Menu from './Components/Menu';
import TabBar from './Components/TabBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Banner/>
        
        <CardQuadrado/>

        <CardRedondo/>

        <Carousel/>

        <CarouselComCards/>

        <Footer/>

        <Main />

        <Menu/>

        <TabBar/>

      </div>
    </BrowserRouter>
  );
}

export default App;
