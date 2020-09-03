import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class OpportunityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      phoneNumber: "",
      category: "",
      file: "",
      sent: false,
      show: false,
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
      category: "",
      file: "",
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
        <Button className=" p-3 apply-form" onClick={this.handleOpen}>
          Apply For Opportunities Now!
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Apply for opportunities</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit} method="POST " className="">
              <div className="row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    name="fullname"
                    className="form-control"
                    value={this.state.fullname}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    name="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    name="phoneNumber"
                    className="form-control"
                    value={this.state.phoneNumber}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label for="sel1">Select category applying for</label>
                  <select class="form-control" id="sel1">
                    <option>UI Internship</option>
                    <option>Web Development</option>
                    <option>Digital Marketing</option>
                    <option>Graphics Design</option>

                    <input
                      name="category"
                      className="form-control"
                      value={this.state.category}
                      onChange={this.handleChange}
                    />
                  </select>
                </div>
              </div>
              <div className="row">
                <div className=" form-group">
                  <label>Upload file </label>
                  <input
                    name="file"
                    type="file"
                    className="form-control"
                    value={this.state.file}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div>{this.state.sent ? " message has been sent" : ""}</div>

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
