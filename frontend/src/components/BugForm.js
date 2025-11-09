
import React, { useState } from 'react';
import axios from 'axios';

function BugForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBug = { title, description, status: 'open' };
    try {
      await axios.post('http://localhost:5000/api/bugs', newBug);
      alert('Bug reported successfully!');
    } catch (error) {
      console.error("Error reporting bug:", error);
      alert("There was an error!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bug-form">
      <label>Title</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      
      <label>Description</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      
      <button type="submit">Report Bug</button>
    </form>
  );
}

export default BugForm;
