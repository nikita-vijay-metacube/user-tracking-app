import { FaThumbsUp } from 'react-icons/fa';
const BlogCard = props =>
{
  return(
    <div className="card mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <img src={`img/${props.content.image}.png`} className="rounded-circle p-2" alt="avatar" width={"75"} height={"75"}/>
            <p className="small mb-0 ms-2">{props.content.author}</p>
          </div>
          {props.content.description}
          {/* <div className="d-flex flex-row align-items-center">
            <p className="small text-muted mb-0">Upvote?</p> */}
            <FaThumbsUp style={{'color': '#1b19b3','fontSize': '40px'}}/>
            {/* <i className="far fa-thumbs-up mx-2 fa-xs text-black" style={{"margin-top": "-0.16rem"}}></i> */}
            {/* <p className="small text-muted mb-0">3</p>
          </div> */}
        </div>
      </div>
    </div>
    
    
    // <div className="col-md-6 col-lg-3">
    //   <div className="card mb-3">
    //     <div className="card-body" style={{'background': 'aliceblue','margin': '10px 30%','padding': '5px 10px','position': 'relative','border-radius': '50px'}}>
    //     <img className="card-img-top" style={{'width': '50px','float': 'left','border-radius': '50%','position': 'absolute','left': '0','top': '12%','margin': '5px'}} src={`img/${props.content.image}.png`}/>
    //       <h4 className="card-title text-center" style={{'float': 'left'}}>{props.content.author}</h4>
    //       <p className="card-text" style={{'margin': '10px 30px'}}>
    //         {props.content.description}
    //         <FaThumbsUp style={{'color': '#ddc9c9','border-radius': '50%','padding': '10px','background': '#b71909','position': 'absolute','top': '20px','right': '10px','float': 'right'}}/>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    
  )
}

export default BlogCard;