import './styles/Form.css'

function Form ({createOrder, userData, formData}) {
    return (
        <div>
            <div className="form-title">
                <p>Complete el formulario para finalizar la compra</p>
            </div>
            <form onSubmit={createOrder} onChange={userData}>
                <input type="text" name="name" placeholder="Ingrese su nombre" defaultValue={formData.name} required />
                <input type="text" name="phone" placeholder="Ingrese un número de contacto" defaultValue={formData.phone} required />
                <input type="email" name="email" placeholder="Ingrese su e-mail" defaultValue={formData.email} required />
                <button className="button button--primary">
                    Comprar
                </button>
            </form>
        </div>
    )
}

export default Form