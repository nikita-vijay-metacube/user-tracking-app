import logo from '../logo.svg';
import '../App.css';
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import useStateWithCallback from 'use-state-with-callback';

function AddTodo() {

  const navigate = useNavigate();
  const [todoDetails,setTodoDetails] = useState({});
  const [count,setCount] = useState(0);
  function handleSubmit (e){
    e.preventDefault();
    setCount(count+1)
    setTodoDetails({
      title:e.target.title.value,
      description:e.target.description.value,
      status:'Active',
      id:count
    // }, () => {
    //   console.log("todoDetails",todoDetails)
    //   // navigate("/todo",{state:todoDetails})
    })
  }
    
  useEffect(()=>{
    if(todoDetails && Object.keys(todoDetails).length !== 0
      && Object.getPrototypeOf(todoDetails) === Object.prototype){
        
        let allTodo = [];
        if (localStorage.getItem("allTodo") !== null) {
          allTodo = JSON.parse(localStorage.getItem("allTodo"))
        }
        allTodo.push(todoDetails)
        let allTodoParsed = JSON.stringify(allTodo)
        localStorage.setItem('allTodo', allTodoParsed);

        navigate("/todo",{state:todoDetails})
    }
  },[todoDetails])
  
  return (
    <section className="my-5">
      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        <div className="card-header ">
            <u className="lead"><i>Add Todo</i></u>
        </div>
        <div className="container border border-light p-4">
          <div className="card">
              <div className="card-body">
                  <div className="row">
                      <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                          <div className="form-group">
                              <label style={{float:"left"}} htmlFor="title">Title</label>
                              <input type="text" className="form-control" name="title"  placeholder="Enter Title" />
                          </div>
                      </div>
                  </div>
                  <div className="row mt-3">
                      <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                          <div className="form-group">
                              <label style={{float:"left"}} htmlFor="description">Description</label>
                              <input className="form-control" name="description" id="description" placeholder="Enter Description" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="row mt-4">
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

export default AddTodo;
