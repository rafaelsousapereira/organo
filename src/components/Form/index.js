import TextField from "../TextField";
import './Form.css';
const Form = () => {
    return (
        <section className="form-card">
            <form>
                <h2>Preencha os dados para o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome"/>
                <TextField label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Image" placeholder="Digite o endereço da imagem"/>
            </form>
        </section>
    );
}

export default Form;