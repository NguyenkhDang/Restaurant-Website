import BackgroundImage from "./image/pho.jpg"
import BeefPho from "./image/beefPho.png"
import ChickenPho from "./image/chickenPho.jpg"
import ShrimpPho from "./image/shrimpPho.png"
import VeganPho from "./image/veganPho.jpg"
import './App.css';
import NavigationBar from './NavigationBar';
function App() {
  return (
    <div className="home">
      <NavigationBar />
      <img
        src={BackgroundImage}
        style={{maxWidth: "70vw", height: "auto", border: "1px solid black"}}
        alt="Pho Photo"
        />


      <div className="menu">
        <h2>Our Delicious Menus of Pho</h2>
        <p>It is so good, it will make you go "What The Pho!?!"</p>
        <div className="foodContainer">
          <div>
            <img  src={BeefPho}
                  style={{width: "15vw", height: "30vh"}}/>
            <h2>Beef Pho</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed imperdiet ante. Nam tellus eros, porta a nisl id, tincidunt porttitor velit. Ut faucibus quam gravida mollis tempus. Sed tellus libero, luctus id dictum ut, tincidunt nec dui. Quisque tincidunt est sit amet facilisis congue. Vestibulum vulputate, nisi in pulvinar semper, urna enim gravida ipsum, in cursus erat quam sit amet nisl. </p>
          </div>
          <div>
            <img  src={ChickenPho}
                  style={{width: "15vw", height: "30vh"}}/>
            <h2>Chicken Pho</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed imperdiet ante. Nam tellus eros, porta a nisl id, tincidunt porttitor velit. Ut faucibus quam gravida mollis tempus. Sed tellus libero, luctus id dictum ut, tincidunt nec dui. Quisque tincidunt est sit amet facilisis congue. Vestibulum vulputate, nisi in pulvinar semper, urna enim gravida ipsum, in cursus erat quam sit amet nisl. </p>
          </div>
          <div>
            <img  src={ShrimpPho}
                  style={{width: "15vw", height: "30vh"}}/>
            <h2>Item</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed imperdiet ante. Nam tellus eros, porta a nisl id, tincidunt porttitor velit. Ut faucibus quam gravida mollis tempus. Sed tellus libero, luctus id dictum ut, tincidunt nec dui. Quisque tincidunt est sit amet facilisis congue. Vestibulum vulputate, nisi in pulvinar semper, urna enim gravida ipsum, in cursus erat quam sit amet nisl. </p>
          </div>
          <div>
            <img  src={VeganPho}
                  style={{width: "15vw", height: "30vh"}}/>
            <h2>Item</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed imperdiet ante. Nam tellus eros, porta a nisl id, tincidunt porttitor velit. Ut faucibus quam gravida mollis tempus. Sed tellus libero, luctus id dictum ut, tincidunt nec dui. Quisque tincidunt est sit amet facilisis congue. Vestibulum vulputate, nisi in pulvinar semper, urna enim gravida ipsum, in cursus erat quam sit amet nisl. </p>
          </div>
        </div>
      </div>
  </div>
);
}

export default App;
