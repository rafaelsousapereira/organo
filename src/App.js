import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react';
import Team from './components/Team';
import Footer from './components/Footer';

const App = () => {
  const [collaborators, setCollaborator] = useState([]);

  const getCollaborator = (collaborator) => {
    setCollaborator([...collaborators, collaborator]);
  };

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8E2'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'DevOps',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ];

  const deleteCollaborator = () => {
    console.log('Deletando colaborador...');
  };

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map((item) => item.name)}
        collaborator={(value) => getCollaborator(value)}
      />
      <section className="teams">
        <h1>Minha Organizacao</h1>
        {teams.map((team) => (
          <Team
            key={team.name}
            name={team.name}
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
            collaborators={collaborators.filter((value) => value.time === team.name)}
            deleteAt={deleteCollaborator}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default App;
