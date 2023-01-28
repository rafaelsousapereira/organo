import './Card.css';
import { AiFillCloseCircle } from 'react-icons/ai';

const Card = ({ collaborator, background, deleteAt }) => {
  return (
    <div className="card">
      <AiFillCloseCircle size={25} className="delete" onClick={() => deleteAt(collaborator.id)} />
      <div className="headers" style={{ backgroundColor: background }}>
        <img src={collaborator.image} alt={collaborator.name} />
      </div>
      <div className="footer">
        <h4>{collaborator.name}</h4>
        <h5>{collaborator.occupation}</h5>
      </div>
    </div>
  );
};

export default Card;
