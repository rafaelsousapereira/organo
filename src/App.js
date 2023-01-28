import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';
import Squad from './components/Squad';

const App = () => {
  const getCollaborator = (collaborator) => {
    console.log(collaborator);
    setCollaborator([...collaborators, collaborator]);
  };

  const [squads, setSquads] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57C278'
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#82CFFA'
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D157'
    },
    {
      id: uuidv4(),
      name: 'DevOps',
      color: '#E06B69'
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      color: '#DB6EBF'
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05'
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#FF8A29'
    }
  ]);

  const initial = [
    {
      id: uuidv4(),
      name: 'RAFAEL SOUSA PEREIRA',
      occupation: 'Programador',
      image: 'https://github.com/rafaelofficial.png',
      time: squads[0].name
    },
    {
      id: uuidv4(),
      name: 'RAFAEL SOUSA PEREIRA',
      occupation: 'Dev',
      image: 'https://github.com/rafaelofficial.png',
      time: squads[1].name
    }
  ];
  const [collaborators, setCollaborator] = useState(initial);
  const changedColorTeam = (color, id) => {
    const changed = squads.map((value) => {
      if (value.id === id) {
        value.color = color;
      }
      return value;
    });
    setSquads(changed);
  };
  const deleteCollaborator = (id) => {
    setCollaborator(collaborators.filter((collaborator) => collaborator.id !== id));
  };

  return (
    <div className="App">
      <Banner />
      <Form
        squads={squads.map((value) => value.name)}
        collaborator={(value) => getCollaborator(value)}
      />
      <section>
        <h1 style={{ textAlign: 'center' }}>Minha Organizacao</h1>
        {squads.map((squad, idx) => (
          <Squad
            key={idx}
            squad={squad}
            collaborators={collaborators}
            deleteAt={deleteCollaborator}
            changedColor={changedColorTeam}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default App;
