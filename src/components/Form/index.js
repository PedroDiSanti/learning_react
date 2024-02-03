import './Form.css'
import TextField from '../TextField'
import DropDown from '../DropDown'
import Button from '../Button'
import { useState } from 'react'

const Form = (props) => {
    const times = [
        '',
        'Programação',
        'Frontend',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'        
    ]

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onUserCreated({name, job, image, team})
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    required={true}
                    value={name}
                    onValueChange={value => setName(value)}
                />
                <TextField 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    required={true}
                    value={job}
                    onValueChange={value => setJob(value)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    onValueChange={value => setImage(value)}
                />
                <DropDown 
                    label="Time" 
                    itens={times} 
                    required={true}
                    value={team}
                    onValueChange={value => setTeam(value)}
                />
                <Button>Criar card</Button>
            </form>
        </section>
    )
}

export default Form