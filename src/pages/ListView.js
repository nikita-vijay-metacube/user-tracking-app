import React, { useState, useEffect, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Card from '../pages/Card';
import Definition from '../pages/Definition';
import BlogCard from '../pages/BlogCard';
import CommentCard from '../pages/CommentCard';


// const BlogCard = lazy(() => import('../pages/BlogCard'));
// const CommentCard = lazy(() => import('../pages/CommentCard'));

class ListView extends React.Component {
  render(){
    return (
      <>
        <h1 id="contentArray"
            className="my-4 text-center text-muted">{this.props.title}
        </h1>
        <div className="row">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card shadow-0 border" style={{'backgroundColor': '#f0f2f5'}}>
                <div className="card-body p-4">
                  {this.props.contentArray.map((content, index) => 
                    {
                      return(<><Card key={index} content={content} title={this.props.title} /> 
                      {/* {this.props.title === 'comment' &&
                        <Definition />
                      } */}
                      </>);
                      // return(this.props.tag === 'Blog' ? <BlogCard key={index} content={content} /> : <CommentCard key={index} content={content}/>)
                    }
                  )
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );     
  }
}
  
export default ListView;