import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import blogs from '../pages/BlogList';
import ListBlog from '../pages/ListBlog';

class ViewBlogs extends React.Component {
    render(){
      return (
        <ListBlog contentArray={blogs} title="Blog"/>
      );     
    }
  }
  export default ViewBlogs;