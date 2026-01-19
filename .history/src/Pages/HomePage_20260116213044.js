import BackgroundImage from "../image/pho.jpg"
import BeefPho from "../image/beefPho.png"
import ChickenPho from "../image/chickenPho.jpg"
import ShrimpPho from "../image/shrimpPho.png"
import VeganPho from "../image/veganPho.jpg"
import '../App.css';

const HomePage = () =>{
  return(
    <>
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
            description="Chicken pho is a lighter yet deeply flavorful Vietnamese noodle soup made with a clear broth slowly simmered from chicken bones, ginger, onion, and warm spices. It is served with tender sliced chicken, soft flat rice noodles, and a fragrant mix of fresh herbs such as Thai basil, cilantro, and scallions. Finished with lime and chili on the side, this comforting bowl is clean, aromatic, and satisfying without being heavy."
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
            description="Shrimp pho features a fragrant, savory broth infused with aromatic spices and fresh herbs, paired with plump, juicy shrimp and flat rice noodles. The natural sweetness of the shrimp balances the warm spices, while bean sprouts, basil, cilantro, and lime add freshness and brightness. Light yet rich in flavor, this pho offers a delicious seafood twist on the classic favorite."
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
            description="Vegan pho is a wholesome, plant-based take on the traditional Vietnamese noodle soup, crafted with a slow-simmered vegetable broth infused with ginger, onion, and aromatic spices. It is served with flat rice noodles, fresh vegetables, and herbs like basil and cilantro, creating a clean and comforting bowl full of depth and aroma. Light, nourishing, and flavorful, this dish proves that pho doesn’t need meat to be deeply satisfying."
            allergies={[
              "Soy: tofu, sauces",
              "Gluten: possible in sauces"
            ]}
          />
          </div>
        </div>
      </div>
      <SectionContainer />
    </>
  )
}
export default HomePage