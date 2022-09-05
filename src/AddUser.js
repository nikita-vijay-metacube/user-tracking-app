import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
class AddUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        personalDetails:
        {
          fname: '',lname:'',gender:'',age:'',dob:''
        },
        contactDetails:
        {
          email:'',address:'',contactno:''
        },
        photograph:
        {
          file:''
        }
      };
  
      // this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    // handleChange(event) {
    //   this.setState({value: event.target.value});
    // }
  
    setDOBValue = (dateString) => {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
      {
          age--;
      }
      this.setState({
        personalDetails:{ age:age}});
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.setState({
        personalDetails:{
          fname:e.target.fname.value,
          lname:e.target.lname.value,
          age:e.target.age.value,
          dob:e.target.dob.value,
          gender:e.target.gender.value,
        },
        contactDetails:{
          contactno:e.target.contactno.value,
          email:e.target.email.value,
          address:e.target.address.value,
        },
        photograph:{file:e.target.file.files[0] }
      },()=>console.log('A name was submitted: ' , this.state))
      let navigate = useNavigate();

      const showUserDate = () => {
        navigate("/user/show");
      };
    
    }
  
    render() {
      return (
        <section className="my-5">
          <form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data">
            <div className="card-header ">
                <u className="lead"><i>Add User Details</i></u>
            </div>
            <div className="container border p-4">
              <div className="card">
                  <div className="card-header bg-secondary">
                    <p className="card-title text-bold text-light">Personal Details</p>
                  </div>
                  <div className="card-body">
                      <div className="row">
                          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                              <div className="form-group">
                                  <label style={{float:"left"}} htmlFor="fname">First Name</label>
                                  <input type="text" className="form-control" name="fname"  placeholder="Enter First Name" />
                              </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                              <div className="form-group">
                                  <label style={{float:"left"}} htmlFor="lname">Last Name</label>
                                  <input type="text" className="form-control" name="lname"  placeholder="Enter Last Name" />
                              </div>
                          </div>
                      </div>
                      <div className="row mt-3">
                          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                              <div className="form-group">
                                  <label style={{float:"left"}} htmlFor="dob">DOB</label>
                                  <input onChange={(e) => this.setDOBValue(e.target.value)} type="date" name="dob" className="form-control" />
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                              <div className="form-group">
                                  <label style={{float:"left"}} htmlFor="age">Age</label>
                                  <input readOnly value={this.state.personalDetails.age} type="number" name="age" className="form-control" />
                              </div>
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                              <div className="form-group">
                                  <label style={{float:"left"}} htmlFor="gender">Gender</label>
                                  <select className="form-control" name="gender">
                                      <option value="male">Male</option>
                                      <option value="female">Female</option>
                                      <option value="other">Other</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="card mt-4">
                  <div className="card-header bg-secondary">
                      <p className="card-title text-bold text-light">Contact Details</p>
                  </div>
                  <div className="card-body">
                      <div className="row">
                          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                              <div className="form-group">
                                  <label style={{float:"left"}} htmlFor="contactno">Contact Number</label>
                                  <input className="form-control" name="contactno" id="contactno" placeholder="Enter Contact Number" />
                              </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                              <div className="form-group">
                                  <label style={{float:"left"}} htmlFor="email">Email</label>
                                  <input type="email" className="form-control" name="email" placeholder="Enter Email" />
                              </div>
                          </div>
                      </div>
                      <div className="row mt-3">
                          <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                              <label style={{float:"left"}} htmlFor="address">Address</label>
                              <textarea type="address" name="address" rows="4" placeholder="Enter Your Address" className="form-control" ></textarea>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="card my-4">
                  <div className="card-header bg-secondary">
                      <p className="text-light text-bold card-title">Photograph</p>
                  </div>
                  <div className="card-body">
                      <input className="form-control" type="file" name="file" accept="image/png, image/jpeg" />
                  </div>
              </div>

              <div className="row">
                  <div className="col-lg-2 col-sm-12 col-md-2 col-xs-12 d-flex justify-content-between">
                      <button type="submit" className="btn btn-primary btn-sm">Submit </button>
                      <button type="reset" className="btn btn-danger btn-sm">Clear </button>
                  </div>
              </div>
            </div>
          </form>
        </section>
      );
    }
}
export default AddUser;