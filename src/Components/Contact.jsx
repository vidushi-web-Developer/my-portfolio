import React, { useState } from "react";
import "./Contact.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const validate = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    };

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    } else if (!/^[a-zA-Z\s]{3,30}$/.test(formData.name)) {
      newErrors.name = "Name must be 3-30 characters and contain only letters.";
      isValid = false;
    }

    // Validate Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
      isValid = false;
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
      isValid = false;
    }

    // Validate Subject
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
      isValid = false;
    }

    // Validate Message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await axios.post("http://localhost:3001/contact", formData);
        toast.success(response.data.message, {
          position: "top-left",
          autoClose: 2000,
          onClose: () => navigate("/greeting"),
        });
      } catch (error) {
        toast.error("Error submitting the contact form. Please try again.");
      }
    }
  };

  return (
    <div className="contact" id="contact">
      <ToastContainer />
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-box">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              aria-label="Full Name"
            />
            {errors.name && <small className="error">{errors.name}</small>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              aria-label="Email Address"
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>

          <div className="input-box">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              aria-label="Phone Number"
            />
            {errors.phone && <small className="error">{errors.phone}</small>}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              aria-label="Subject"
            />
            {errors.subject && <small className="error">{errors.subject}</small>}
          </div>

          <div className="input-group-2">
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              aria-label="Message"
            />
            {errors.message && <small className="error">{errors.message}</small>}
            <input type="submit" value="Send Message" className="btn" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
