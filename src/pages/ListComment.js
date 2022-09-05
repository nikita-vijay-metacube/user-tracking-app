import React, { useState, setState, useEffect, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Card from '../pages/Card';
import BlogCard from '../pages/BlogCard';
import CommentCard from '../pages/CommentCard';
import CommentDefinition from '../pages/CommentDefinition';


// const BlogCard = lazy(() => import('../pages/BlogCard'));
// const CommentCard = lazy(() => import('../pages/CommentCard'));

class ListComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: props.contentArray[0].title, description: props.contentArray[0].description};
    this.changeDescription = this.changeDescription.bind(this);
  }
  changeDescription(content) {
    this.setState({title:content.title,description:content.description});
  }
  render(){
    return (
      <div className="container-fluid">
        <h1 id="contentArray"
            className="my-4 text-center text-muted">{this.props.title}
        </h1>
        <div className="row">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card shadow-0 " style={{border:'1px solid #000','backgroundColor': '#f0f2f5'}}>
                <p className="pt-2 mb-0" style={{'textAlign':'center','borderBottom':'1px solid #000'}}>
                  Comment Box
                </p>
                <div className="Container">
                  <div className="row card-body m-0 p-0">
                    <div className="w-50 px-0"  style={{borderRight:'1px solid #000'}}>
                      {this.props.contentArray.map((content, index) => 
                        {
                          return(
                          <CommentCard key={index} content={content} clickfn={this.changeDescription}/>
                          );
                        }
                      )}
                    </div>
                    <div className="w-50 px-0">
                      <CommentDefinition key={0} description={this.state.description} title={this.state.title} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );     
  }
}
  
export default ListComment;