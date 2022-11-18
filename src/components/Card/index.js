import './Card.css';

const Card = ({ nameCollaborator, hole, image, background }) => {

    return (
        <div className="card">
            <div className="headers" style={{ backgroundColor: background }}>
                <img src={image} alt={nameCollaborator} />
            </div>
            <div className="footer">
                <h4>{nameCollaborator}</h4>
                <h5>{hole}</h5>
            </div>
        </div>
    );
}

export default Card;
