import React, { Component } from "react";
import AOS from "aos";
import Icon from "@mdi/react";
import { mdiPhone, mdiEmail, mdiMapMarker } from "@mdi/js";
import axios from "axios";

AOS.init({
  startEvent: "DOMContentLoaded",
});

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
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
  handleSubmit = () => {
    axios({
      method: "POST",
      url: "/mail/contact/",
      data: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
        address: this.state.address,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        this.setState({ sent: true });
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Oops, something went wrong. Try again");
      }
    });
  };

  resetForm = () => {
    this.setState({
      fullname: "",
      email: "",
      address: "",
      message: "",
    });
    setTimeout(() => {
      this.setState({ sent: false });
    }, 3000);
  };

  render() {
    return (
      <section id="contact" className="contact section-bg">
        <div className="container " data-aos="fade-up" data-aos-duration="3000">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div class="row d-flex flex-row">
            <div class="col-lg-6">
              <div class="info-box mb-4">
                <Icon
                  path={mdiMapMarker}
                  title="User Profile"
                  size={2}
                  horizontal
                  vertical
                  rotate={180}
                  color="244887"
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
                  color="244887"
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
                  color="244887"
                />
                <h3>Call Us</h3>
                <p>+233 204466965</p>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-6">
              <form
                className="bg-white p-3 shadow"
                onSubmit={this.handleSubmit}
                method="POST"
              >
                <div className="form-group mt-2">
                  {/* <label htmlFor="name">Name</label> */}
                  <input
                    value={this.state.name}
                    onChange={this.handleChange}
                    id="name"
                    placeholder="Name"
                    name="name"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-2">
                  {/* <label htmlFor="email">email</label> */}
                  <input
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Email"
                    id="email"
                    name="email"
                    type="text"
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-2">
                  {/* <label htmlFor="contact">Address</label> */}
                  <input
                    value={this.state.address}
                    onChange={this.handleChange}
                    id="address"
                    placeholder="address"
                    name="address"
                    type="text"
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    value={this.state.message}
                    onChange={this.handleChange}
                    id="message"
                    placeholder="Message"
                    name="message"
                    type="text"
                    htmlFor="message"
                    lassName="form-control"
                    rows="4"
                  ></textarea>
                  <div>{this.state.sent ? " message has been sent" : ""}</div>
                </div>

                <button className="btn btn-primary mt-4 mb-3 apply-form btn-lg mx-auto my-5">
                  submit
                </button>
              </form>
            </div>
            <div className="col-lg-6 ">
              <iframe
                className="mb-4 mb-lg-0 shadow"
                title="location_map"
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
