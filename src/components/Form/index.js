import './Form.css'
import TextField from '../TextField'
import DropDown from '../DropDown'
import Button from '../Button'

const Form = () => {
    const times = [
        'Programação',
        'Frontend',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'        
    ]

    const onSave = (event) => {
        event.preventDefault()
        console.log("Cringe")
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome" required={true}/>
                <TextField label="Cargo" placeholder="Digite seu cargo" required={true}/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
                <DropDown label="Time" itens={times} required={true}/>
                <Button>Criar card</Button>
            </form>
        </section>
    )
}

export default Form