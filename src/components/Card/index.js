import './Card.css';
import { AiFillCloseCircle } from 'react-icons/ai';

const Card = ({ collaborator, hole, image, background, deleteAt }) => {
  return (
    <div className="card">
      <AiFillCloseCircle size={25} className="delete" onClick={deleteAt} />
      <div className="headers" style={{ backgroundColor: background }}>
        <img src={image} alt={collaborator} />
      </div>
      <div className="footer">
        <h4>{collaborator}</h4>
        <h5>{hole}</h5>
      </div>
    </div>
  );
};

export default Card;
