import React, { useState } from "react";
import "./Content.css";

function Content() {
  const [positivePrompt, setPositivePrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [generatedImages, setGeneratedImages] = useState([]);

  const handleGenerate = () => {
    const staticImages = [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ];
    setGeneratedImages(staticImages);
  };

  return (
    <div className="app">
      <div className="content">
        <p className="description-header">Start with a detailed description:</p>
        <div className="description-input">
          <textarea
            rows="1"
            cols="50"
            placeholder="Enter Positive Prompt"
            value={positivePrompt}
            onChange={(e) => setPositivePrompt(e.target.value)}
          ></textarea>
          <textarea
            rows="1"
            cols="50"
            placeholder="Enter Negative Prompt"
            value={negativePrompt}
            onChange={(e) => setNegativePrompt(e.target.value)}
          ></textarea>
        </div>
        <button className="generate-button" onClick={handleGenerate}>
          Generate
        </button>
      </div>
      <div className="generated-images">
        <h2>Generated Images</h2>
        <div className="image-row">
          {generatedImages.map((imageUrl, index) => (
            <img key={index} src={"logo192.png"} alt={"generated images"} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
