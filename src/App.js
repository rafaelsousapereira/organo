import Banner from "./components/Banner";
import Form from "./components/Form";
import {useState} from "react";
import Team from "./components/Team";

const App = () => {
    const [isCollaborator, setIsCollaborator] = useState([]);

    const fetchCollaborator = (value) => {
        console.log(value);
        setIsCollaborator([...isCollaborator, isCollaborator]);
    }

  return (
    <div className="App">
        <Banner />
        <Form collaborator={value => fetchCollaborator(value)} />
        <Team name="Programação"/>
        <Team name="Front-End"/>
    </div>
  );
}

export default App;
