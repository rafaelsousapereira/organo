import TextField from "../TextField";
import './Form.css';
import DropDownList from "../DropDownList";
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

    return (
        <section className="form-card">
            <form>
                <h2>Preencha os dados para o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome"/>
                <TextField label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Image" placeholder="Digite o endereço da imagem"/>
                <DropDownList label="Time" items={items} />
            </form>
        </section>
    );
}

export default Form;