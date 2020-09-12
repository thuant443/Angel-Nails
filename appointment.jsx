import React, { Component} from "react";
import Joi from "joi-browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import "rc-time-picker/assets/index.css";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

class appointment extends Component {
  state = {
    show: false,
    options: [
      { value: "Pedicure", label: "Pedicure" },
      { value: "Manicure", label: "Manicure" },
      { value: "Gel", label: "Gel" }, { value: "Acrylic", label: "Acrylic" }, { value: "Sculpted Nail", label: "Sculpted Nail" }, { value: "Dip Powder", label: "Dip Powder" }, { value: "Nail Removal with Manicure", label: "Nail Removal with Manicure" }, { value: "Gel Color with Manicure", label: "Gel Color with Manicure" }, { value: "Deluxe Pedicure", label: "Deluxe Pedicure" },
      { value: "Mani and Pedi", label: "Mani and Pedi" },{ value: "Full Set and Pedi", label: "Full Set and Pedi" },{ value: "Fill and Pedi", label: "Fill and Pedi" },{ value: "Eyebrow Wax", label: "Eyebrow Wax" },{ value: "Chin or Lip Wax", label: "Chin or Lip Wax" },{ value: "Armpit Wax", label: "Armpit Wax" },{ value: "Acrylic Fill", label: "Acrylic Fill" },
      { value: "Gel Fill", label: "Gel Fill" },{ value: "Pink Fill", label: "Pink Fill" },{ value: "Nail Remove/Trim", label: "Nail Remove/Trim" },{ value: "Polish Change", label: "Polish Change" },{ value: "Gel Remove/ Color Change", label: "Gel Remove/ Color Change" },
    ],
    timeavil: [
      { value: "8:00 AM" },
      { value: "8:30 AM" },
      { value: "9:00 AM" },
      { value: "9:30 AM" },
      { value: "10:00 AM" },
      { value: "10:30 AM" },
      { value: "11:00 AM" },
      { value: "11:30 AM" },
      { value: "12:00 PM" },
      { value: "12:30 PM" },
      { value: "1:00 PM" },
      { value: "1:30 PM" },
      { value: "2:00 PM" },
      { value: "2:30 PM" },
      { value: "3:00 PM" },
      { value: "3:30 PM" },
      { value: "4:00 PM" },
      { value: "4:30 PM" },
      { value: "5:00 PM" },
      { value: "5:30 PM" },
      { value: "6:00 PM" },
      { value: "6:30 PM" },
      { value: "7:00 PM" },
      { value: "7:30 PM" },
    ],

    value: "coconut",
    account: {
      Date: "",
      name: "",
      service: "",
      time: "",
      email: "",
      tech: "",
      phone:"",
      times: [
        { value: "8:00 AM" },
        { value: "8:30 AM" },
        { value: "9:00 AM" },
        { value: "9:30 AM" },
        { value: "10:00 AM" },
        { value: "10:30 AM" },
        { value: "11:00 AM" },
        { value: "11:30 AM" },
        { value: "12:00 PM" },
        { value: "12:30 PM" },
        { value: "1:00 PM" },
        { value: "1:30 PM" },
        { value: "2:00 PM" },
        { value: "2:30 PM" },
        { value: "3:00 PM" },
        { value: "3:30 PM" },
        { value: "4:00 PM" },
        { value: "4:30 PM" },
        { value: "5:00 PM" },
        { value: "5:30 PM" },
        { value: "6:00 PM" },
        { value: "6:30 PM" },
        { value: "7:00 PM" },
        { value: "7:30 PM" },
      ],
    },
    errors: { name: "", service: "" },

    timedisable: { set: "true" },
  };

  schema = {
    name: Joi.string().required().label("Name"),
    service: Joi.string().required().label("Service"),
    Date: Joi.label("Date"),
    email: Joi.string().required().label("Email"),
    tech: Joi.string().required().label("Tech"),
    time: Joi.string().required().label("Time"),
    times: Joi.label("times")
  };

  getD() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://immense-falls-46295.herokuapp.com/api/customers"; // site that doesn’t send Access-Control-*
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.account),
    };

    const account = { ...this.state.account };

    fetch(proxyurl + url, option)
      .then((res) => res.json())
      .then((cus) => {
        if (cus.length !== 0) {
          cus.map((e) => {
            account.times = account.times.filter((e2) => {
        
              if (e2.value !== e.time) {
                return true;
              }
            });
          });
          this.setState({ account });
        
        }
      }).catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
  }
  send() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://immense-falls-46295.herokuapp.com/api"; // site that doesn’t send Access-Control-*
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.account),
    };

    fetch(proxyurl + url, option)
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
  }

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });

    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    
  
  
    this.send();
   

  };
  handleChange3 = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    account.tech = input.value;

    if (account.tech !== "" && account.Date !== "") {
      account.times = this.state.timeavil;
      account.timedisable = false;
      this.setState({ account});
      this.getD();
    } else {
      
      this.setState({ account });
    }
  };
  handleChange2 = (input) => {
    const account = { ...this.state.account };

    
    account.Date = input;

    if (account.tech !== "" && account.Date !== "") {
    
      account.times = this.state.timeavil;
      this.setState({ account, timedisable: false });
      this.getD();
    } else {

      this.setState({ account });
    }


  };

  eventClassNames = (e) => {
    console.log(e.id);
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account, errors });
  };
  getvalue = (e) => {
   
    this.state.account.service = "";
    e.map((te) => (this.state.account.service = te.value + ","));
  };
   handleShow = () => 
   {
    const state = { ...this.state };
    if(this.state.account.name !== '' && this.state.account.service !== '' && this.state.tech !== '' && this.state.account.email !== '' && this.state.account.Date !== '' && this.state.account.time !== ''){
      this.state.show = true
      
      this.setState({state});
      
    }else{
      console.log(this.state.account)
    }
    
    };
    handleClose = () => window.location.reload(false);  
  render() {
 

    return (
      <div>
        <h1>Schedule an Appointment</h1>
 
        <form className="needs-validation" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label  htmlFor="name"></label>

            <div className="form-row">
              <div className="col-md-12 mb-3">
                <label htmlFor="validationDefault01">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="validationDefault01"
                  value={this.state.account.name}
                  onChange={this.handleChange}
                  required
                ></input>
              </div>
              <div className="col-md-6 mb-3"></div>
            </div>

            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="validationDefault01">Service</label>

                <Select
                  isMulti
                  name="service"
                  options={this.state.options}
                  onChange={this.getvalue}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>

              <div className="col-md-3 mb-3">
                <Form.Group controlId="formGridState">
                  <label>
                    Please Select a Tech
                    <select
                      value={this.state.account.tech}
                      className="browser-default mt-2 custom-select"
                      name="tech"
                      onChange={this.handleChange3}
                    >
                      <option value=" "> </option>
                      <option value="Anyone available">Anyone available</option>
                      <option value="Son">Son</option>
                      <option value="Hue">Hue</option>
                      <option value="Diana">Diana</option>
                      <option value="Joy">Joy</option>
                    </select>
                  </label>
                </Form.Group>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationDefault05">Email Address</label>
                <input
                  type="text"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.account.email}
                  className="form-control"
                  id="validationDefault05"
                  required
                ></input>
              </div>
              <div className="col-md-3 mb-3 mr-3">
                <label htmlFor="validationDefault05">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  onChange={this.handleChange}
                  value={this.state.account.phone}
                  className="form-control"
                  id="validationDefault05"
                  required
                ></input>
              </div>

              <div className="col-md-2 mb-3">
                <label htmlFor="validationDefault05">
                  Select available date
                </label>
                <DatePicker
                  name="Date"
                  selected={this.state.account.Date}
                  onChange={this.handleChange2}
                />
              </div>
              <div className="col-md-3 ml-4 mb-3">
                <Form.Group controlId="formGridState">
                  <label>
                    Select a Time
                    <select
                      disabled={this.state.timedisable}
                      value={this.state.account.time}
                      className="browser-default mt-2 custom-select"
                      name="time"
                      
                      onChange={this.handleChange}
                    >
                      <option value=" "> </option>
                      {this.state.account.times.map((te) => (
                        <option key={te.value} value={te.value}>
                          {te.value}{" "}
                        </option>
                      ))}
                    </select>
                  </label>
                </Form.Group>
              </div>
              <div className="col-md-3 ml-5 mb-3"></div>
            </div>
            <button className="btn btn-primary" type="submit" variant="primary" onClick={this.handleShow} >
              Submit form
            </button>
            <div className="form-group">
              <div className="form-check"></div>
            </div>
            <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>You have sucessfully book an appoinment! 
 <Table >
  <tbody>
    <tr>
      <td>Name: {this.state.account.name} </td>
    </tr>
    <tr>
      <td>Date: {JSON.stringify(this.state.account.Date).substring(1,11)} </td>
    </tr>
    <tr>
      <td>Time: {this.state.account.time} </td>
   
    </tr>
    <tr>
      <td>Tech: {this.state.account.tech}</td>
 
    </tr>
    <tr>
      <td>Phone: {this.state.account.phone}</td>
 
    </tr>
    <tr><td>Service: {this.state.account.service}</td></tr>
  </tbody>
</Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}> 
              Close
            </Button>
       
          </Modal.Footer>
        </Modal>
                        

          </div>
        </form>
      </div>
    );
  }
}
export default appointment;
