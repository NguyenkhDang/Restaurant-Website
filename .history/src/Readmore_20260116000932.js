import { useState } from "react";

function ReadMore({ image, title, description, allergies }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
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
