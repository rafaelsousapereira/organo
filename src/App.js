import Banner from "./components/Banner";
import Form from "./components/Form";
import {useState} from "react";

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
    </div>
  );
}

export default App;
