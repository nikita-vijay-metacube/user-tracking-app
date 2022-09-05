import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Timer from './pages/Timer';
import Todo from './pages/Todo';
import Home from './pages/Home';
import ViewBlogs from './pages/ViewBlogs';
import ViewComments from './pages/ViewComments';
import AddUser from './pages/AddUser';
import ShowUser from './pages/ShowUser';
import ShowTodo from './pages/ShowTodo';
import AddTodo from './pages/AddTodo';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let num = [1,2,3,4,5,6,7,8,9,0]
  let [a,c,b] = num;
  console.log(a,b,c)
  console.log(a,c,b)
  return (
    <div className="App">
      <div className="d-flex" id="wrapper">
        <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light py-4">User Trancking App </div>
            <div className="list-group list-group-flush">
              <Link className="list-group-item list-group-item-action list-group-item-light p-3" to={'/'}>Home</Link>
              <Link className="list-group-item list-group-item-action list-group-item-light p-3" to={'/timer'}>Timer</Link>
              <Link className="list-group-item list-group-item-action list-group-item-light p-3" to={'/todo'}>Show Todos</Link>
              <Link className="list-group-item list-group-item-action list-group-item-light p-3" to={'/blogs'}>Blogs</Link>
              <Link className="list-group-item list-group-item-action list-group-item-light p-3" to={'/comments'}>comments</Link>
              <Link className="list-group-item list-group-item-action list-group-item-light p-3" to={'/adduser'}>Add New User</Link>
            </div>
        </div>
        <div id="page-content-wrapper" className="container">
          <div className='container'>
            {/* <button className="btn btn-primary" id="sidebarToggle">Toggle Menu</button>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button> */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <span>
                <b>
                  <u className='text-info' style={{fontSize: 'bold'}}>
                    Basic React App for Assesment Quarter 2
                  </u>
                </b>
              </span>
            </div>
          </div>
          <div className="container-fluid">
            <Routes>
              <Route path="timer" element={<Timer />} />
              <Route path="todo" element={<Todo />}/>
              <Route path="" element={<Home />} />
              <Route path="blogs" element={<ViewBlogs />} />
              <Route path="comments" element={<ViewComments />} />
              <Route path="adduser" element={<AddUser />} />
              <Route path="user/show" element={<ShowUser />} />
              <Route path="todo/show" element={<ShowTodo />} />
              <Route path="todo/add" element={<AddTodo />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
