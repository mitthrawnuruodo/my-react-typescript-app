// src/components/ContactForm.tsx
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Clear the form by resetting the state
    setFormData({
      name: '',
      email: '',
      title: '',
      description: '',
    });
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label><br />
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Email:</label><br />
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Title:</label><br />
        <input 
          type="text" 
          name="title" 
          value={formData.title} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Description:</label><br />
        <textarea 
          name="description" 
          value={formData.description} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
