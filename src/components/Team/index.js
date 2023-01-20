import './Team.css';
import Card from '../Card';

const Team = (props) => {
  const { deleteAt } = props;
  return (
    props.collaborators.length > 0 && (
      <section className="team" style={{ backgroundColor: props.secondaryColor }}>
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className="collaborator">
          {props.collaborators.map((value) => {
            return (
              <Card
                key={value.collaborator}
                collaborator={value.collaborator}
                hole={value.hole}
                image={value.image}
                background={props.primaryColor}
                deleteAt={deleteAt}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Team;
