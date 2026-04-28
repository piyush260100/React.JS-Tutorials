import { Bookmark } from 'lucide-react';
import './Card.css';

const Card = (props) => {
    return (
    
    <div className="card">
        <div className="topSection">
          <img
            src={props.company_logo_url}
            alt="company logo"
          />
          <button>
            Save <Bookmark/>
          </button>
        </div>
        <div className="contentSection">
          <div className="companySection">
            <h4>{props.companyName}</h4>
            <p>{props.days} days ago</p>
          </div>
          <h3>Senior UI/UX Designer</h3>
          <div className="tagSection">
            <p>{props.type}</p>
            <p>{props.experience}</p>
          </div>
        </div>
        <div className="priceSection">
          <div className="price">
            <h4>${props.pay}/hr</h4>
            <p>{props.location}</p>
          </div>
          <button>Apply now</button>
        </div>
      </div>
  )
}

export default Card