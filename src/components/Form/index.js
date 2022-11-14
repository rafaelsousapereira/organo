import TextField from "../TextField";
import './Form.css';
import DropDownList from "../DropDownList";
import Button from "../Button";
import { useState }  from 'react';

const Form = (props) => {

    const items = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão',
    ];

    const [name, setName] = useState('');
    const [hole, setHole] = useState('');
    const [image, setImage] = useState('');
    const [time, setTime] = useState('');

    const isSaved = (event) => {
        event.preventDefault();
        props.collaborator({
            name, hole, image, time,
        })
    }

    return (
        <section className="form-card">
            <form onSubmit={isSaved}>
                <h2>Preencha os dados para o card do colaborador</h2>
                <TextField
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    isChanged={value => setName(value)}
                />
                <TextField
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={hole}
                    isChanged={value => setHole(value)}
                />
                <TextField
                    label="Image"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    isChanged={value => setImage(value)}
                />
                <DropDownList
                    required={true}
                    label="Time"
                    items={items}
                    value={time}
                    isChanged={value => setTime(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
}

export default Form;