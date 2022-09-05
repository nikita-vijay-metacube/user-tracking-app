import { FaThumbsUp } from 'react-icons/fa';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
const CommentDefinition = props =>
{
  return(
    <div className="card mb-4" style={{height:'100%'}}>
      <div className="card-body p-0 ">
        <div className='row mx-0'>
          <div className='col-md-12 my-4'>
            <p className='text-success'>{props.title}</p> 
          </div>
        </div>
        <div className='row mx-0' style={{borderTop:'1px solid #000'}}>
          <div className='col-md-12 my-4'>
            {props.description}
          </div>
        </div>
      </div>
    </div>

  )
}
export default CommentDefinition;