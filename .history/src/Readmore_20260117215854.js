import { useState } from "react";
import "./CSS/Readmore.css"
function ReadMore({ image, title, description, allergies }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={`descriptionContainer ${showMore ? "isExpand ": ""}`}>
      <img src={image} style={{ width: "15vw", height: "30vh" }} alt={title} />

      <h2>{title}</h2>

      <p>
        {description}

        {showMore && (
          <ul className="list">
            {allergies.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </p>

      <button className="btnShowMore" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Close" : "Allergies"}
      </button>
    </div>
  );
}
export default ReadMore;
