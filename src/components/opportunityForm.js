import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class OpportunityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      category: "",
      cv: "",
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
    fetch("/mail/opportunity/", {
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

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleOpen = () => {
    this.setState({
      show: true,
    });
  };

  render() {
    return (
      <>
        <Button className="  apply-form" onClick={this.handleOpen}>
          Apply Now!
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Apply for opportunities</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit} method="POST " className="">
              <div className="row mt-3">
                <div className="form-group">
                  <input
                    placeholder="Full Name"
                    name="name"
                    id="name"
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="form-group">
                  <input
                    placeholder="Email"
                    name="email"
                    id="email"
                    type="text"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="form-group">
                  <input
                    placeholder="Phone Number"
                    name="address"
                    id="address"
                    type="text"
                    className="form-control"
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="row  opportunityForm mt-3">
                <div className="form-group">
                  <select class="form-control" id="sel1">
                    <option>Select Category</option>

                    <option>UI Internship</option>
                    <option>Web Development</option>
                    <option>Digital Marketing</option>
                    <option>Graphics Design</option>

                    <input
                      placeholder="Select Category"
                      name="category"
                      id="category"
                      type="text"
                      className="form-control opportunityForm"
                      value={this.state.category}
                      onChange={this.handleChange}
                    />
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className=" form-group">
                  <input
                    name="cv"
                    id="cv"
                    type="file"
                    className="form-control"
                    value={this.state.cv}
                    onChange={this.handleChange}
                  />
                  <div>{this.state.sent ? " message has been sent" : ""}</div>
                </div>
              </div>

              <div className="row">
                <input
                  type="submit"
                  title="submit"
                  value="submit"
                  className="apply-form btn-lg mx-auto my-5"
                />
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
