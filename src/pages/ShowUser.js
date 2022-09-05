import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// const { userData } = useParams();
//   export default function ShowUser(props)
// {
class ShowUser extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let userData = JSON.parse(localStorage.getItem('userData'))
        console.log("userData.photograph.file.blob",userData.photograph.file)
        return (
            <section className="my-4">
                <div className="container px-0">
                    <div className="card mb-3">
                        <div className="card-header bg-success text-light">
                            <h4 className="card-title" style={{"float":"left"}}>Personal Details</h4>
                        </div>
                        <div className="mb-0 card-body bg-dark text-light h5">
                            <div className="row">
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-xs-12 col-xs-12 float-left" style={{"textAlign":"left"}}>
                                            <p><span className="font-weight-bold">Name :</span> <span className="small font-italic"><strong><u>{userData.personalDetails.fname} {userData.personalDetails.lname}</u></strong></span></p> 
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{"textAlign":"left"}}>
                                            <p><span className="font-weight-bold">DOB</span>: <span><strong><u>{userData.personalDetails.dob}</u> </strong>({userData.personalDetails.age})</span></p>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{"textAlign":"left"}}>
                                            <p><span className="font-weight-bold">Gender</span>: <span><strong><u>{userData.personalDetails.gender}</u></strong></span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 float-right">
                                        <img src={userData.photograph.file} className="img-fluid w-25 rounded-circle" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-header mt-0 bg-success text-light" >
                            <h4 className="card-title" style={{"float":"left"}}>Contact Details</h4>
                        </div>
                        <div className="card-body bg-dark text-light h5">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-xs-12 col-xs-12" style={{"textAlign":"left"}}>
                                    <p><span className="font-weight-bold">Contact No. :</span> <span className="small font-italic"><strong><u>{userData.contactDetails.contactno}</u> </strong></span></p> 
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{"textAlign":"left"}}>
                                    <p><span className="font-weight-bold">Email</span>: <span><strong><u>{userData.contactDetails.email}</u></strong></span></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{"textAlign":"left"}}>
                                    <p><span className="font-weight-bold">Address</span>: <span><strong><u>{userData.contactDetails.address}</u></strong></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default ShowUser;