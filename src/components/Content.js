/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "./Content.css";

function Content() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedImagesSet1, setSelectedImagesSet1] = useState([]);
  const [selectedImagesSet2, setSelectedImagesSet2] = useState([]);
  const [generatedImagesSet1, setGeneratedImagesSet1] = useState([]);
  const [generatedImagesSet2, setGeneratedImagesSet2] = useState([]);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleImageUploadSet1 = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setSelectedImagesSet1([...selectedImagesSet1, ...files]);
    }
  };

  const handleImageUploadSet2 = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setSelectedImagesSet2([...selectedImagesSet2, ...files]);
    }
  };

  const generateImages = () => {
    setGeneratedImagesSet1(selectedImagesSet1);
    setGeneratedImagesSet2(selectedImagesSet2);
    setPopupVisible(false); // Close the popup
  };

  return (
    <div className="app">
      <div className="content">
        <p className="description-header">Start with a detailed description:</p>
        <div className="description-input">
          <textarea
            rows="1"
            cols="50"
            placeholder="Enter your description"
          ></textarea>
          <button className="generate-button" onClick={generateImages}>
            Generate
          </button>
        </div>
        <p>
          Or,{" "}
          <span className="upload-text" onClick={togglePopup}>
            upload
          </span>{" "}
          an image to edit
        </p>
        {isPopupVisible && <div className="overlay"></div>}
        {isPopupVisible && (
          <div className="popup">
            <div className="popup-content">
              <h5>Upload images here</h5>
              <div className="popup-boxes">
                <div className="popup-box">
                  <p>Set 1</p>
                  <label
                    htmlFor="imageUploadSet1"
                    className="image-upload-label"
                  >
                    <img src="upload.png" alt="upload" className="upload" />
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    id="imageUploadSet1"
                    className="image-upload-input"
                    onChange={handleImageUploadSet1}
                    multiple // Enable multiple file selection
                  />
                </div>
                <div className="popup-box">
                  <p>Set 2</p>
                  <label
                    htmlFor="imageUploadSet2"
                    className="image-upload-label"
                  >
                    <img src="upload.png" alt="upload" className="upload" />
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    id="imageUploadSet2"
                    className="image-upload-input"
                    onChange={handleImageUploadSet2}
                    multiple // Enable multiple file selection
                  />
                </div>
              </div>
              <div className="popup-buttons">
                <button className="popup-generate" onClick={generateImages}>
                  Generate
                </button>
                <button className="popup-generate" onClick={togglePopup}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="generated-images">
        <h2>Generated Images</h2>
        <div className="image-set">
          <h3>Set 1 Images</h3>
          <div className="image-grid">
            {generatedImagesSet1.map((image, index) => (
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt={`Set 1 Image ${index + 1}`}
                className="generated-image"
              />
            ))}
          </div>
        </div>
        <div className="image-set">
          <h3>Set 2 Images</h3>
          <div className="image-grid">
            {generatedImagesSet2.map((image, index) => (
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt={`Set 2 Image ${index + 1}`}
                className="generated-image"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
