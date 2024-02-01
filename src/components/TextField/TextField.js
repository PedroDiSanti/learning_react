import './TextField.css'

const TextField = () => {
    return (
        <div className="text-field">
            <label>Nome</label>
            <input placeholder='Digite seu nome'/>

            <label>Cargo</label>
            <input placeholder='Digite seu cargo'/>

            <label>Imagem</label>
            <input placeholder='Informe o endereço da imagem'/>

            <label>Time</label>
            <input />
        </div>
    )
}

export default TextField