import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react';
import Footer from './components/Footer';
import Team from './components/Team';

const App = () => {
  const getCollaborator = (collaborator) => {
    setCollaborator([...collaborators, collaborator]);
  };

  const [squads, setsquads] = useState([
    {
      name: 'Programação',
      color: '#57C278'
    },
    {
      name: 'Front-End',
      color: '#82CFFA'
    },
    {
      name: 'Data Science',
      color: '#A6D157'
    },
    {
      name: 'DevOps',
      color: '#E06B69'
    },
    {
      name: 'UX e Design',
      color: '#DB6EBF'
    },
    {
      name: 'Mobile',
      color: '#FFBA05'
    },
    {
      name: 'Inovação e Gestão',
      color: '#FF8A29'
    }
  ]);

  const initial = [
    {
      collaborator: 'RAFAEL SOUSA PEREIRA',
      hole: 'Programador',
      image: 'https://github.com/rafaelofficial.png',
      time: squads[0].name
    },
    {
      collaborator: 'RAFAEL SOUSA PEREIRA',
      hole: 'Dev',
      image: 'https://github.com/rafaelofficial.png',
      time: squads[1].name
    }
  ];
  const [collaborators, setCollaborator] = useState(initial);
  const changedColorTeam = (color, name) => {
    const changed = squads.map((value) => {
      if (value.name === name) {
        value.color = color;
      }
      return value;
    });
    setsquads(changed);
  };
  const deleteCollaborator = () => {
    console.log('Deletando colaborador...');
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
        {squads.map((team, idx) => (
          <Team
            key={idx}
            name={team.name}
            squadSecondColor={team.color}
            squadPrimaryColor={team.color}
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
