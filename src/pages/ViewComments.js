import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import comments from '../pages/CommentList';
import ListComment from '../pages/ListComment';

class ViewComments extends React.Component {
    render(){
      return (
        <ListComment contentArray={comments} title="comment"/>
      );     
    }
  }
  export default ViewComments;