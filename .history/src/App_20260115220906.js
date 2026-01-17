import BackgroundImage from "./image/pho.jpg"
import BeefPho from "./image/beefPho.png"
import ChickenPho from "./image/chickenPho.jpg"
import ShrimpPho from "./image/shrimpPho.png"
import VeganPho from "./image/veganPho.jpg"
import './App.css';
import NavigationBar from './NavigationBar';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <img
        src={BackgroundImage}
        style={{maxWidth: "70vw", height: "auto", border: "1px solid black"}}
        alt="Pho Photo"
        />


        <div className="menu">
          <h2>Our Delicious Menus of Pho</h2>
          <p>With these items, you will go "What The Pho!?!"</p>
          <div className="foodContainer">
            <div>
              <img src={BeefPho}
                   style={{width: "10vw", height: "5vh"}}/>
              <h2>Item</h2>
            </div>
            <div>
              <img src={ChickenPho}
              style={{width: "10vw", height: "30vh"}}/>
              <h2>Item</h2>
            </div>
            <div>
              <img src={ShrimpPho}
              style={{width: "10vw", height: "5vh"}}/>
              <h2>Item</h2>
            </div>
            <div>
              <img src={VeganPho}
              style={{width: "10vw", height: "5vh"}}/>
              <h2>Item</h2>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
