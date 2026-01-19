import BackgroundImage from "./image/pho.jpg"
import BeefPho from "./image/beefPho.png"
import ChickenPho from "./image/chickenPho.jpg"
import ShrimpPho from "./image/shrimpPho.png"
import VeganPho from "./image/veganPho.jpg"
import './App.css';
import NavigationBar from './NavigationBar';

import { useState } from "react"

import ReadMore from "./Readmore"
function App() {

  const [showMore, setShowMore] = useState(false)


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
            <ReadMore
            image={BeefPho}
            title="Beef Pho"
            description="Beef pho is a Vietnamese noodle soup made with a clear, aromatic beef broth simmered with spices like star anise and cinnamon. It’s served with flat rice noodles, thinly sliced beef, and fresh herbs such as basil and cilantro, with lime and chili on the side for added flavor."
            allergies={[
              "Soy: hoisin sauce, soy sauce",
              "Fish: fish sauce",
              "Gluten: possible in sauces",
              "Shellfish: may be present",
              "Spices: star anise, cinnamon, cloves"
            ]}
          />

          </div>
          <div>
            <ReadMore
            image={ChickenPho}
            title="Chicken Pho"
            description="Beef pho is a Vietnamese noodle soup made with a clear, aromatic beef broth simmered with spices like star anise and cinnamon. It’s served with flat rice noodles, thinly sliced beef, and fresh herbs such as basil and cilantro, with lime and chili on the side for added flavor."
            allergies={[
              "Soy: sauces",
              "Fish: fish sauce",
              "Spices: ginger, coriander"
            ]}
          />
          </div>
          <div>
            <ReadMore
            image={ShrimpPho}
            title="Shrimp Pho"
            description="Beef pho is a Vietnamese noodle soup made with a clear, aromatic beef broth simmered with spices like star anise and cinnamon. It’s served with flat rice noodles, thinly sliced beef, and fresh herbs such as basil and cilantro, with lime and chili on the side for added flavor."
            allergies={[
              "Shellfish: shrimp",
              "Fish: fish sauce",
              "Soy: sauces"
            ]}
          />
          </div>
          <div>
            <ReadMore
            image={VeganPho}
            title="Vegan Pho"
            description="Beef pho is a Vietnamese noodle soup made with a clear, aromatic beef broth simmered with spices like star anise and cinnamon. It’s served with flat rice noodles, thinly sliced beef, and fresh herbs such as basil and cilantro, with lime and chili on the side for added flavor."
            allergies={[
              "Soy: tofu, sauces",
              "Gluten: possible in sauces"
            ]}
          />
          </div>
        </div>
      </div>
  </div>
);
}

export default App;
