import React from "react";
import Icon from "@mdi/react";
import {
  mdiFacebook,
  mdiTwitter,
  mdiInstagram,
  mdiLockAlert,
  mdiPhone,
  mdiEmail,
  mdiLocationEnter,
  mdiMapMarker,
} from "@mdi/js";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
      sent: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/form", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          this.setState({ sent: true });
          this.resetForm();
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
  };

  resetForm = () => {
    this.setState({
      fullname: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
    setTimeout(() => {
      this.setState({ sent: false });
    }, 3000);
  };
  render() {
    return (
      <section id="contact" className="contact section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="info-box mb-4">
                <Icon
                  path={mdiMapMarker}
                  title="User Profile"
                  size={2}
                  horizontal
                  vertical
                  rotate={180}
                  color="blue"
                />
                <h3>Our Address</h3>
                <p>Millennium City Street, Kasoa, Ghana</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="info-box mb-4">
                <Icon
                  path={mdiEmail}
                  title="User Profile"
                  size={2}
                  horizontal
                  vertical
                  rotate={180}
                  color="blue"
                />
                <h3>Email Us</h3>
                <p>thinkSopht@gmail.com</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="info-box mb-4">
                <Icon
                  path={mdiPhone}
                  title="User Profile"
                  size={2}
                  horizontal
                  vertical
                  rotate={180}
                  color="blue"
                />
                <h3>Call Us</h3>
                <p>+233 204466965</p>
              </div>
            </div>
          </div>

          <div className="row mx-auto">
            <div className="col-lg-6">
              <form className="" onSubmit={this.handleSubmit} method="POST">
                <div className="row">
                  <div className="form-group inputspace ">
                    <label htmlFor="fullname">Fullname</label>
                    <input
                      //ref={register}
                      type="text"
                      id="fullname"
                      name="fullname"
                      value={this.state.fullname}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group inputspace">
                    <label htmlFor="email">Email</label>
                    <input
                      //ref={register}
                      type="text"
                      id="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group inputspace ">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      //ref={register}
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={this.state.phoneNumber}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group inputspace ">
                    <label htmlFor="subject">Subject</label>
                    <input
                      //ref={register}
                      type="text"
                      id="subject"
                      name="subject"
                      value={this.state.subject}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group ">
                    <label htmlFor="message">Message</label>
                    <textarea
                      //ref={register}
                      type="text"
                      id="message"
                      name="message"
                      className="form-control inputspace"
                      value={this.state.message}
                      onChange={this.handleChange}
                      rows="5"
                    />
                  </div>
                  <div>{this.state.sent ? " message has been sent" : ""}</div>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="col-lg-6">
              <iframe
                className="mb-4 mb-lg-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15885.858236178756!2d-0.43632293255097937!3d5.497816435759519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfba3435d13363%3A0x368e67e916f88811!2sMillennium%20City%20High%20St%2C%20Kasoa!5e0!3m2!1sen!2sgh!4v1598555097840!5m2!1sen!2sgh"
                frameborder="0"
                style={{ border: "0", width: "100%", height: "384px" }}
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUs;
