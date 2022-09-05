import logo from '../logo.svg';
import '../App.css';
import { useLocation, useNavigate, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import {Modal, Button} from 'react-bootstrap'


function Todo(props) {
  const  state  = useLocation();
  // const navigate = useNavigate();
  const [allTodo,setAllTodo] = useState([]);
  const [openTodo,setOpenTodo] = useState({});
  const [statusFilter,setStatusFilter] = useState('Active');
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(()=>{
    let allTodo = JSON.parse(localStorage.getItem('allTodo'))
    setAllTodo(allTodo)
      // console.log("recentTodo",state.state)
  },[])
  useEffect(()=>{
    console.log('changed!!');
  },[allTodo])
  function changeStatus(e,key){
    let changed = false
    // e.preventDefault();
    let changedArray = allTodo
    changedArray=changedArray.filter((item,index)=>{
      if(index == key){
        changed = true
        item.status ='Completed'
      }
      return item
    })
    localStorage.setItem("allTodo",JSON.stringify(changedArray))
    setAllTodo(changedArray)
  }
  function hideModel(){
    if(isOpen===true)
     setIsOpen(false)
  }
  return(
    <>
      <section className="my-5">
        <div className='container'>  
          <div className='row'>
                <Link className="col-md-2 btn btn-dark p-2 mb-3" to={'/todo/add'}>Add Todo</Link>
          </div>
          <div className='row mb-4'>  
            <div className='col-md-4'>  
              <select className="form-select" defaultValue={statusFilter} 
                  // value={statusFilter === "c" ? "c": statusFilter}
                  onChange={(e)=>setStatusFilter(e.target.value)}
              >
                <option  value="Completed">Completed</option>
                <option value="Active">Active</option>
              </select>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {allTodo && allTodo.length != 0 ? (
                    allTodo.map((val,key) => {
                      if(val.status == statusFilter){
                        return(
                          <tr key={key}>
                            <td>{key+1}</td>
                            <td>{val.title}</td>
                            <td>{val.description}</td>
                            <td>
                              <div className="custom-control custom-checkbox">
                                {val.status == 'Completed'
                                ?
                                <input className="custom-control-input" type="checkbox" id={'flexSwitchCheckChecked_'+key} checked readOnly />
                                :
                                <input className="custom-control-input" type="checkbox" onChange={(e)=> changeStatus(e,key)} id={'flexSwitchCheckChecked_'+key} />
                                }
                                <label className="form-check-label" htmlFor={'flexSwitchCheckChecked_'+key}>
                                  &nbsp;&nbsp;{val.status}
                                </label>
                              </div>
                            </td>
                          <td>
                            <button onClick={(e)=>{setIsOpen(true); setOpenTodo(val) }} className='btn btn-info'>
                              <FaEye style={{'color': '#fff','fontSize': '20px'}}/>
                            </button>
                          </td>
                        </tr>)
                      }
                    })
                   )
                      :'No Records Found!!'
                  }
                </tbody>
              </table>
            </div>        
          </div>        
        </div>    
      </section>
      <Modal show={isOpen} onHide={(e)=>hideModel()}>
        <Modal.Header closeButton>
          <Modal.Title>Todo Details({openTodo.title})</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container'>
            <div className='row'>
              <div className='bg-dark text-white pt-2 my-0 rounded'>
                <p className='lead '>Description</p>
                <div style={{'textAlign':'right'}}><u>{openTodo.description}</u></div> 
              </div >
            </div>
              <div className='row pt-3'>
                <p style={{width:'fit-content'}} className={openTodo.status == 'Completed' ? 'rounded bg-success text-white' : 'rounded bg-secondary text-warning'}>{openTodo.status}</p>
              </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e)=>hideModel()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Todo;
