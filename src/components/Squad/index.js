import './Squad.css';
import Card from '../Card';
import hexToRgba from 'hex-to-rgba';
import React from 'react';

const Squad = ({ squad, collaborators, deleteAt, changedColor }) => {
  return (
    collaborators.length > 0 && (
      <section className="squad" style={{ backgroundColor: hexToRgba(squad.color, '0.6') }}>
        <h3 style={{ borderColor: squad.color }}>{squad.name}</h3>
        <input
          onChange={(event) => changedColor(event.target.value, squad.id)}
          value={squad.color}
          type="color"
          className="input-color"
        />
        <div className="collaborator">
          {collaborators.map((value, key) => {
            return (
              <Card key={key} collaborator={value} background={squad.color} deleteAt={deleteAt} />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Squad;
