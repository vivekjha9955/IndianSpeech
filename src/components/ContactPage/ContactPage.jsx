import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `*New Appointment Request*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Service:* ${formData.service}
*Message:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/916367667306?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="contact-full-page">
      <header className="contact-full-header">
        <div className="container">
          <div className="contact-full-header__inner">
            <button
              type="button"
              className="contact-back-btn"
              onClick={onClose}
              aria-label="Go back to the Indian Speech and Hearing Clinic home page"
            >
              <i className="fas fa-arrow-left"></i>
              Back to Home
            </button>

            <div className="contact-full-header__content">
              <div
                className="contact-full-header__icon"
                aria-hidden="true"
              >
                <i className="fas fa-headset"></i>
              </div>

              <div>
                <span className="contact-full-header__tag">
                  Hearing Care Consultation in Ranchi
                </span>

                <h1 className="contact-full-header__title">
                  Contact Indian Speech & Hearing Clinic in Ranchi
                </h1>

                <p className="contact-full-header__sub">
                  Book a consultation for hearing tests, hearing aids, speech
                  therapy, and personalized hearing care with experienced
                  audiologists in Ranchi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="contact-full-body">
        <div className="container">
          <div className="contact-full-layout">
            {/* Left Side */}
            <div className="contact-full-left">
              <div className="contact-highlight-card">
                <div
                  className="contact-highlight-card__icon"
                  aria-hidden="true"
                >
                  <i className="fas fa-phone-volume"></i>
                </div>

                <div>
                  <h2>Call Our Hearing Clinic</h2>

                  <p>
                    Speak with our clinic team for appointments, hearing test
                    information, hearing aid guidance, and quick assistance.
                  </p>

                  <a
                    href="tel:+918210394248"
                    aria-label="Call Indian Speech and Hearing Clinic at plus 91 82103 94248"
                  >
                    +91 8210394248
                  </a>
                </div>
              </div>

              <div className="contact-highlight-card">
                <div
                  className="contact-highlight-card__icon"
                  aria-hidden="true"
                >
                  <i className="fab fa-whatsapp"></i>
                </div>

                <div>
                  <h2>WhatsApp Hearing Care Support</h2>

                  <p>
                    Chat with our team for appointment requests, follow-ups,
                    hearing aid enquiries, and general hearing care guidance.
                  </p>

                  <a
                    href="https://wa.me/918210394248"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Start a WhatsApp chat with Indian Speech and Hearing Clinic"
                  >
                    Start WhatsApp Chat
                  </a>
                </div>
              </div>

              <div className="contact-highlight-card">
                <div
                  className="contact-highlight-card__icon"
                  aria-hidden="true"
                >
                  <i className="fas fa-envelope"></i>
                </div>

                <div>
                  <h2>Email Our Clinic</h2>

                  <p>
                    Contact us for detailed enquiries, hearing reports,
                    appointment requests, or hearing care information.
                  </p>

                  <a
                    href="mailto:indian.speechhearingclinic@gmail.com"
                    aria-label="Email Indian Speech and Hearing Clinic"
                  >
                    indian.speechhearingclinic@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-clinic-card">
                <div className="contact-clinic-card__head">
                  <div
                    className="contact-clinic-card__head-icon"
                    aria-hidden="true"
                  >
                    <i className="fas fa-location-dot"></i>
                  </div>

                  <div>
                    <h2>Visit Our Hearing Clinic in Ranchi</h2>

                    <p>Indian Speech & Hearing Clinic</p>
                  </div>
                </div>

                <p className="contact-clinic-card__address">
                  1st Floor, Arctic Mall, Bariatu Road, Ranchi - 834009,
                  Jharkhand, India
                </p>

                <div className="contact-clinic-card__meta">
                  <span>
                    <i className="fas fa-clock" aria-hidden="true"></i>
                    Mon - Sat: 10:00 AM - 7:00 PM
                  </span>

                  <span>
                    <i className="fas fa-user-doctor" aria-hidden="true"></i>
                    Expert Audiologist Support
                  </span>
                </div>

                <div className="contact-map-frame">
                  <iframe
                    title="Indian Speech and Hearing Clinic location in Ranchi"
                    src="https://www.google.com/maps?q=23.38892,85.33644&z=15&output=embed"
                    width="100%"
                    height="260"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="contact-full-right">
              <div className="contact-form-card">
                <div className="contact-form-card__head">
                  <span className="contact-form-card__tag">
                    Quick Appointment in Ranchi
                  </span>

                  <h2>Book a Hearing Care Appointment</h2>

                  <p>
                    Fill in your details and our clinic team will contact you
                    shortly regarding your hearing test, hearing aid,
                    audiology, or speech therapy consultation.
                  </p>
                </div>

                {submitted ? (
                  <div
                    className="contact-success-state"
                    role="status"
                    aria-live="polite"
                  >
                    <div
                      className="contact-success-state__icon"
                      aria-hidden="true"
                    >
                      <i className="fas fa-circle-check"></i>
                    </div>

                    <h3>Redirecting to WhatsApp!</h3>

                    <p>
                      Your appointment details have been prepared. Complete
                      the chat on WhatsApp to send your enquiry to our clinic
                      team.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="contact-form-grid"
                  >
                    <div className="contact-form-group">
                      <label htmlFor="contact-name">Full Name</label>

                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div className="contact-form-group">
                      <label htmlFor="contact-phone">Phone Number</label>

                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        required
                      />
                    </div>

                    <div className="contact-form-group contact-form-group--full">
                      <label htmlFor="contact-email">Email Address</label>

                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                      />
                    </div>

                    <div className="contact-form-group contact-form-group--full">
                      <label htmlFor="contact-service">
                        Select Hearing or Speech Service
                      </label>

                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">
                          Choose a consultation type
                        </option>

                        <option value="General Consultation">
                          General Consultation
                        </option>

                        <option value="Hearing Consultation">
                          Hearing Consultation
                        </option>

                        <option value="Hearing Aid Consultation">
                          Hearing Aid Consultation
                        </option>

                        <option value="Speech Therapy Consultation">
                          Speech Therapy Consultation
                        </option>

                        <option value="Child Speech Consultation">
                          Child Speech Consultation
                        </option>

                        <option value="Follow-Up Consultation">
                          Follow-Up Consultation
                        </option>
                      </select>
                    </div>

                    <div className="contact-form-group contact-form-group--full">
                      <label htmlFor="contact-message">
                        Your Hearing or Speech Concern
                      </label>

                      <textarea
                        id="contact-message"
                        name="message"
                        rows="5"
                        placeholder="Tell us your concern or requirement..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="contact-form-group contact-form-group--full">
                      <button
                        type="submit"
                        className="contact-submit-btn"
                        aria-label="Send appointment enquiry via WhatsApp"
                      >
                        <i
                          className="fab fa-whatsapp"
                          aria-hidden="true"
                        ></i>
                        Send via WhatsApp
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;