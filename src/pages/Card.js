import { FaThumbsUp } from 'react-icons/fa';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
const Card = props =>
// return(this.props.tag === 'Blog' ? <BlogCard key={index} content={content} /> : <CommentCard key={index} content={content}/>)
{
  return(
    <div className="card mb-4">
        {(props.title === 'Blog')
        ?
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
        :
          <div >
          <div className="card-body">
            <div className="d-flex justify-content-between col-md-6">
              <div className="d-flex flex-row align-items-center">
              {props.content.comment}
              </div>
              <div className="d-flex flex-row align-items-center">
              </div>
              
            </div>
            {/* <DropdownButton
              key='end'
              drop='end'
              variant="secondary"
              title={props.content.comment}
            >
              <Dropdown.Menu>
                <Dropdown.Item href="#">{props.content.title}</Dropdown.Item>
                <Dropdown.Item href="#">{props.content.description}</Dropdown.Item>
              </Dropdown.Menu>
            </DropdownButton> */}
            
            {/* <div className="col-md-offset-4 col-lg-4">
              <div className="card mb-3">
                <div className="card-body" >
                <img className="card-img-top" src={`img/${props.content.image}.png`}/>
                  <h4 className="card-title text-center" >{props.content.author}</h4>
                  <p className="card-text">
                    {props.content.description}
                    <FaThumbsUp />
                  </p>
                </div>
              </div>
            </div> */}
          </div>      
        </div>
        }


    </div>

  )
}
export default Card;