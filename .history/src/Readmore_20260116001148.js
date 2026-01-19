import { useState } from "react";
import "./CSS/Readmore.css"
function ReadMore({ image, title, description, allergies }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="allergies">
      <img src={image} style={{ width: "15vw", height: "30vh" }} alt={title} />

      <h2>{title}</h2>

      <p>
        {description}
        {!showMore && <span> ..</span>}

        {showMore && (
          <ul>
            {allergies.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </p>

      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Close" : "Allergies"}
      </button>
    </div>
  );
}
export default ReadMore;
