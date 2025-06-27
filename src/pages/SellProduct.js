// src/pages/SellProduct.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './SellProduct.css';

const SellProduct = () => {
  // State to hold up to 20 images, initialized with nulls
  const [images, setImages] = useState(Array(20).fill(null));

  // State for warning messages related to image uploads
  const [imageWarning, setImageWarning] = useState('');

  // Function to handle image file selection
  const handleImageChange = (e, index) => {
    const file = e.target.files[0]; // Get selected file
    if (file) {
      const updated = [...images]; // Copy current image list
      updated[index] = file; // Assign new file to specific index
      setImages(updated); // Update state
    }
  };

  // Function to remove a specific image
  const removeImage = (index) => {
    const updated = [...images];
    updated[index] = null;
    setImages(updated);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    const uploadedCount = images.filter(img => img !== null).length;

    // Check if fewer than 6 images are uploaded
    if (uploadedCount < 6) {
      e.preventDefault(); // Stop form submission
      setImageWarning('Please upload at least 6 images to ensure product quality and efficiency.');
    } else {
      setImageWarning(''); // Clear warning
      // Submit form logic can be added here (e.g., API call)
    }
  };

  return (
    <>
      <Navbar />
      <div className="sell-container">
        <div className="sell-box">
          <h2>Sell Your Product</h2>
          <form className="sell-form" onSubmit={handleSubmit}>
            {/* Product details fields */}
            <input type="text" placeholder="Product Title" required />
            <textarea placeholder="Product Description" rows="4" required></textarea>
            <input type="number" placeholder="Price (LKR)" required />
            <input type="text" placeholder="Brand" required />

            {/* Image Upload Grid for up to 20 images */}
            <div className="image-grid">
              {images.map((img, index) => (
                <div className="image-slot" key={index}>
                  {img ? (
                    // If an image is uploaded, show preview and remove button
                    <div className="image-preview">
                      <img src={URL.createObjectURL(img)} alt={`preview ${index}`} />
                      <button type="button" onClick={() => removeImage(index)}>&times;</button>
                    </div>
                  ) : (
                    // If no image in this slot, show the "+" icon
                    <>
                      <label htmlFor={`file-${index}`} className="plus-label">+</label>
                      <input
                        type="file"
                        id={`file-${index}`}
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, index)}
                        style={{ display: 'none' }} // Hide actual file input
                      />
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Display image upload warning if needed */}
            {imageWarning && <p className="warning">{imageWarning}</p>}

            {/* Submit button */}
            <button type="submit">List Product</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SellProduct;
