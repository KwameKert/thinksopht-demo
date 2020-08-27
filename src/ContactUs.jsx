import React from "react";

/**
 * @author
 * @function ContactUs
 **/

const ContactUs = (props) => {
  return (
    <div>
      <section id="contact" className="contact section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="info-box mb-4">
                <i className="bx bx-map"></i>
                <h3>Our Address</h3>
                <p>Millenium CIty, Kasoa, Ghana</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box mb-4">
                <i className="bx bx-envelope"></i>
                <h3>Email Us</h3>
                <p>thinksopht@gmail.com</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box mb-4">
                <i className="bx bx-phone-call"></i>
                <h3>Call Us</h3>
                <p>+233 204466965</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <iframe
                className="mb-4 mb-lg-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15885.858236178756!2d-0.43632293255097937!3d5.497816435759519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfba3435d13363%3A0x368e67e916f88811!2sMillennium%20City%20High%20St%2C%20Kasoa!5e0!3m2!1sen!2sgh!4v1598555097840!5m2!1sen!2sgh"
                frameborder="0"
                style={{ border: "0", width: "100%", height: "384px" }}
                allowfullscreen
              ></iframe>
            </div>

            <div className="col-lg-6">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                  ></textarea>
                  <div className="validate"></div>
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
