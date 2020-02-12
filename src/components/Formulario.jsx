import React, { Fragment, useState } from 'react'

const Formulario = ({createUser}) => {

    //Crear State de Usuario

    const [user, updateUser] = useState({
        username: '',
        surname: '',
        email: '',
        phone: '',
        age: ''
    })

    const [ error, updateError ] = useState(false)

    //Funcion que se ejecuta cada que el usuario escriba en el input
    const updateState = e => {
        updateUser({
            ...user,
            [e.target.name]: e.target.value
        }) 
    }

    //Extraer los valores Destructuring
    const { username, surname, email, phone, age } = user

    //Cuando el usuario presiona agregar cita
    const submitUser = e => {
        e.preventDefault();

        //Validar
        if(username.trim() === '' || surname.trim() === '' || email.trim() === '' ||
        phone === '' || age === ''){
           updateError(true)
            return;
        }

        //Eliminar mensaje previo 
        updateError(false)

        //Asignar un ID

        //Crear la cita
        createUser(user)
        //Reiniciar el Form
        updateUser({
            username: '',
            surname: '',
            email: '',
            phone: '',
            age: ''
        })
    }
    return(
        <Fragment>
            <h2>Crear Usuario</h2>

            { error ? <p className="alerta-error">Todos los Campos son Obligatorios</p> 
            : null}
            
            <form
                 onSubmit={submitUser}
            />
            <form>
                <label>Nombre de Usuario</label>
                <input
                  type="text"
                  name="username"
                  className="u-full-width"
                  placeholder="Nombre  de Usuario"
                  onChange={updateState}
                  value={username}
                />

                <label>Apellido</label>
                <input
                  type="text"
                  name="surname"
                  className="u-full-width"
                  placeholder="Apellido Usuario"
                  onChange={updateState}
                  value={surname}
                />
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="u-full-width"
                  onChange={updateState}
                  value={email}
                />

                <label>Teléfono</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(Código de área)"
                  className="u-full-width"
                  onChange={updateState}
                  value={phone}
                />
                <label>Edad</label>
                <input
                  type="number"
                  name="age"
                  className="u-full-width"
                  onChange={updateState}
                  value={age}
                />
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar</button>
            </form>
        </Fragment>
    )
}

export default Formulario
