import './Team.css';
import Card from '../Card';

const Team = ({ collaborators, name, secondaryColor, primaryColor, deleteAt }) => {
  return (
    collaborators.length > 0 && (
      <section className="team" style={{ backgroundColor: secondaryColor }}>
        <h3 style={{ borderColor: primaryColor }}>{name}</h3>
        <div className="collaborator">
          {collaborators.map((value) => {
            return (
              <Card
                key={value.collaborator}
                collaborator={value.collaborator}
                hole={value.hole}
                image={value.image}
                background={primaryColor}
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
