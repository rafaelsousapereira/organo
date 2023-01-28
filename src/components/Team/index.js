import './Team.css';
import Card from '../Card';
import hexToRgba from 'hex-to-rgba';

const Team = ({ collaborators, name, squadSecondColor, deleteAt, changedColor }) => {
  return (
    collaborators.length > 0 && (
      <section className="team" style={{ backgroundColor: hexToRgba(squadSecondColor, '0.6') }}>
        <h3 style={{ borderColor: squadSecondColor }}>{name}</h3>
        <input
          onChange={(event) => changedColor(event.target.value, name)}
          value={squadSecondColor}
          type="color"
          className="input-color"
        />
        <div className="collaborator">
          {collaborators.map((value, idx) => {
            return (
              <Card
                key={idx}
                collaborator={value.collaborator}
                hole={value.hole}
                image={value.image}
                background={squadSecondColor}
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
