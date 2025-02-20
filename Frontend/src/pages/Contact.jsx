import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      setFormStatus('All fields are required!');
      return;
    }

    // Submit the form (you can integrate the Formspree API here)
    fetch('https://formspree.io/f/xnnjwjdp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        setFormStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      })
      .catch(() => {
        setFormStatus('Error sending message. Please try again later.');
      });
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          required
          name="name"
          type="text"
          className="contactform-text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          required
          name="email"
          type="email"
          className="contactform-text"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          required
          name="phone"
          type="text"
          className="contactform-text"
          placeholder="Contact Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          required
          name="message"
          className="contactform-text"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <input type="submit" className="contactform-btn" value="Send" />
      </form>

      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
  );
};

export default Contact;
