import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.persist();
    e.preventDefault();
    const templateParams = {
      from_name: formData.name,
      to_name: "Mankaran",
      subject: "You have a new alert",
      message: formData.message,
    };
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;
    try {
      await emailjs.send(serviceID, templateID, templateParams, userID);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      setFailure(true);
    }
  };
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__info">
          <div className="contact__links">
            <h3>Get In Touch</h3>
            <div className="contact__linksContainer">
              <ul>
                <li>
                  <a href="mailto:mankaransingh39@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                    mankaransingh39@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mankaran39/">
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="tel:+919103479398">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    +91-9103479398
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact__formContainer">
            <form className="contact__form" onSubmit={handleSubmit}>
              <label htmlFor="fname">Full Name</label>
              <input
                type="text"
                id="fname"
                name="name"
                required={true}
                vlaue={formData.name}
                onChange={handleChange}
              />

              <label htmlFor="mail">Email ID</label>
              <input
                type="email"
                id="mail"
                name="email"
                required={true}
                value={formData.email}
                onChange={handleChange}
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required={true}
                value={formData.message}
                onChange={handleChange}
              />
              <button className="submit__btn" type="submit">
                Submit <FontAwesomeIcon icon={faPaperPlane} size="lg" />
              </button>
            </form>
            {success && <span>Thank you for contacting.</span>}
            {failure && <span>Currently Site is Under Maintenance</span>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
