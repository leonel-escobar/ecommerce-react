import './styles/Form.css'

function Form ({createOrder, userData, formData}) {
    return (
        <>
            <form onSubmit={createOrder} onChange={userData}>
                <label htmlFor="name">Nombre <span>*</span></label>
                <input type="text" name="name" placeholder="Ingrese su nombre" defaultValue={formData.name} required/>
                <label htmlFor="phone">Teléfono <span>*</span></label>
                <input type="text" name="phone" placeholder="Ingrese un número de contacto" defaultValue={formData.phone} required/>
                <label htmlFor="email">E-mail <span>*</span></label>
                <input type="email" name="email" placeholder="Ingrese su e-mail" defaultValue={formData.email} required/>
                <button className="button button--primary">
                    Comprar
                </button>
            </form>
        </>
    )
}

export default Form