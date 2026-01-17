import BackgroundImage from "./image/pho.jpg"
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
              <img src=""/>
              <h2>Item</h2>
            </div>
            <div>
              <img src=""/>
              <h2>Item</h2>
            </div>
            <div>
              <img src=""/>
              <h2>Item</h2>
            </div>
            <div>
              <img src=""/>
              <h2>Item</h2>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
