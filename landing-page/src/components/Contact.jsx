import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/Contact.css";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://narayanjat.pythonanywhere.com/contact/",
        formData
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="contact" style={{ padding: "150px 0" }}>
      <h2
        style={{ color: "green", textAlign: "center", paddingBottom: "50px" }}
      >
        Contact
      </h2>
      <div className="contact">
        <div className="contact-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 " controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required={true}
                onChange={handleChange}
                style={{
                  border: "none",
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                  boxShadow: "none",
                  width: "100%",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                required={true}
                onChange={handleChange}
                style={{
                  border: "none",
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                  boxShadow: "none",
                  width: "100%",
                }}
              />
              <Form.Text className="text-muted">
                This will help me to get back to you.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                onChange={handleChange}
                required={true}
                rows={1}
                style={{
                  border: "none",
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                  boxShadow: "none",
                  width: "100%",
                }}
              />
            </Form.Group>

            <div className="contact-button">
              <Button id="contact-button" type="submit">
                Send Message
              </Button>
            </div>
          </Form>
        </div>
        <div id="contact-image">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.364721251313!2d81.07030757451983!3d26.89191776098562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399958aa9da50cb7%3A0x8f5a1f4d75d0d691!2sShri%20Ramswaroop%20College%20Of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1727165589930!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>    
        </div>
      </div>
    </div>
  );
}

export default Contact;
