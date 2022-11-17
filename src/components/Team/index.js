import './Team.css';
import Card from "../Card";

const Team = (props) => {
    return (
        (props.collaborators.length > 0) && <section className="team" style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }} >{props.name}</h3>
            <div className="collaborator">
                {props.collaborators.map( collaborator => <Card nameCollaborator={collaborator.nameCollaborator} hole={collaborator.hole} image={collaborator.image} /> )}
            </div>
        </section>
    );
}

export default Team;