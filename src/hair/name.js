import React, { useState } from "react";

function Nameinfo({ formData, setFormData }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setName(value);

    // Check if the input contains a number
    if (/\d/.test(value)) {
      setError('Name should not contain numbers');
    } else {
      setError('');
      setFormData({ ...formData, name: value }); // Update formData with the name
    }
  };

  return (
    <div className="sign-up-container">
      <input
        className="w-50 border-0"
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={handleChange}
        id="name_inp"
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default Nameinfo;
