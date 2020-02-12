import React, { Fragment, useState } from 'react'

const Formulario = () => {

    //Crear State de Citas

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [ error, actualizaError ] = useState(false)

    //Funcion que se ejecuta cada que el usuario escriba en el input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        }) 
    }

    //Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita

    //Cuando el usiario presiona agregar cita
    const submitCita = e => {
        e.preventDefault()

        //Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' ||
        hora.trim() === '' || sintomas.trim() === ''){
            actualizaError(true)
        }
        //Asignar un ID

        //Crear la cita

        //Reiniciar el Form
    }
    return(
        <Fragment>
            <h2>Crear Citas</h2>
                { error ? <p className="alerta-error">Todos los Campor son Obligatorios</p> : null}
            <form>
                <label>Nombre de Mascotas</label>
                <input
                  type="text"
                  name="mascota"
                  className="u-full-width"
                  placeholder="Nombre Mascota"
                  onChange={actualizarState}
                  value={mascota}
                />
                
                <label>Nombre del Dueño</label>
                <input
                  type="text"
                  name="propietario"
                  className="u-full-width"
                  placeholder="Nombre  de la Mascota"
                  onChange={actualizarState}
                  value={propietario}
                />

                <label>Fecha</label>
                <input
                  type="date"
                  name="fecha"
                  className="u-full-width"
                  onChange={actualizarState}
                  value={fecha}
                />

                <label>Hora</label>
                <input
                  type="time"
                  name="mahorascota"
                  className="u-full-width"
                  onChange={actualizarState}
                  value={hora}
                />

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                    onChange={submitCita}
                >Agregar Cita</button>
            </form>
        </Fragment>
    )
}

export default Formulario
