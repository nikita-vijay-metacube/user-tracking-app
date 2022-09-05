import { FaComment } from 'react-icons/fa';
const CommentCard = props =>
{
  return (
    <div className="card" style={{'borderBottom':'1px solid #000'}}>
      <div className="card-body">
        <div className="d-flex justify-content-between col-md-6" onClick={()=>props.clickfn(props.content)}>
          <div className="d-flex flex-row align-items-center" style={{cursor:'pointer'}}>
            <FaComment style={{'color': '#1b19b3','fontSize': '40px', 'paddingRight':'4px'}}/>
            {props.content.comment}
          </div>
          
        </div>
      </div>
    </div>
  )
}
export default CommentCard;