import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Upload() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);     // must match backend
    formData.append("caption", caption);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Uploaded:", res.data);
       setTimeout(() => {
        navigate("/feed"); // or "/feed" depending on your route
      }, 1500);
      // reset after upload
      setImage(null);
      setCaption("");
      
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Upload Images</h1>

      {/* 👇 just added onSubmit */}
      <form onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label className="form-label" htmlFor="image">Select Image</label>
          <input
            type="file"
            name="image"
            id="image"
            className="form-input"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}   
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="caption">Caption</label>
          <input
            type="text"
            name="caption"
            id="caption"
            placeholder="Add a caption for your image"
            className="form-input"
            value={caption}                                 // 👈 added
            onChange={(e) => setCaption(e.target.value)}   // 👈 added
          />
        </div>

        <button type="submit" className="btn">Upload</button>
      </form>
    </div>
  )
}

export default Upload