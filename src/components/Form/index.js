import TextField from "../TextField";
import './Form.css';
import DropDownList from "../DropDownList";
import Button from "../Button";

const Form = () => {

    const items = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão',
    ];

    const isSaved = (event) => {
        event.preventDefault();
        console.log('Form sent successfully');
    }

    return (
        <section className="form-card">
            <form onSubmit={isSaved}>
                <h2>Preencha os dados para o card do colaborador</h2>
                <TextField required={true} label="Nome" placeholder="Digite seu nome"/>
                <TextField required={true} label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Image" placeholder="Digite o endereço da imagem"/>
                <DropDownList required={true} label="Time" items={items} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
}

export default Form;