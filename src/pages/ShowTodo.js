import logo from '../logo.svg';
import '../App.css';
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import React, { useState } from 'react';

function ShowTodo(props) {
  console.log('props',props)
  const navigate = useNavigate();
  const [todoDetails,setTodoDetails] = useState({});
  const [count,setCount] = useState(0);
  function handleSubmit (e){
    e.preventDefault();
    setCount(count+1)
    setTodoDetails({
      name:e.target.name.value,
      description:e.target.description.value,
      id:count
    })
    
    navigate("/todo",todoDetails)
  }
  return (
    <section className="my-5">
      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        <div className="card-header ">
            <u className="lead"><i>Add Todo</i></u>
        </div>
        <div className="container border p-4">
          <div className="card">
              <div className="card-body">
                  <div className="row">
                      <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                          <div className="form-group">
                              <label style={{float:"left"}} htmlFor="name">Title</label>
                              <input type="text" className="form-control" name="name"  placeholder="Enter First Name" />
                          </div>
                      </div>
                  </div>
                  <div className="row mt-3">
                      <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                          <div className="form-group">
                              <label style={{float:"left"}} htmlFor="description">Description</label>
                              <input className="form-control" name="description" id="description" placeholder="Enter Contact Number" />
                          </div>
                      </div>
                  </div>
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

export default ShowTodo;
