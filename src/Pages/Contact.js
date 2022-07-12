import React from "react";
import "../Styles/Contact.css";
import ContactImage from "../Assets/tiramisu.jpg";

export default function Contact() {
  return (
    <div className="contact">
      <div className="leftSide" style={{backgroundImage: `url(${ContactImage})`}}></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form">
        <label htmlFor="name">Full Name</label>
        <input name="name" type="text" placeholder="Enter your name." />
        <label htmlFor="email">Email</label>
        <input name="email" type="email" placeholder="Enter your email." />
        <label htmlFor="message">Your Message</label>
        <textarea name="message" placeholder="Enter your message." rows="7"></textarea>
        <button type="submit" disabled>Send Message (Unavailable)</button>
      </form>
      </div>
    </div>
  );
}