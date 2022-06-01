import React from 'react';
import Box from '@mui/material/Box';

export default function Form() {
    const [values, setValues] = React.useState({
        name: "",
        email: "",
        password: "",
    });

    function handleSubmit(evt) {
    // Previene el comportamiento default de los formularios el cual recarga el sitio 
        evt.preventDefault();
        //Aquí puedes usar values para enviar la información
    }

    function handleChange(evt) {
    // evt.target es el elemento que ejecuto el evento name identifica el input y value describe el valor actual
        const { target } = evt;
        const { name, value } = target;
        /* Este snippet:
          1. Clona el estado actual
          2. Reemplaza solo el valor del
             input que ejecutó el evento */
        const newValues = {
          ...values,
          [name]: value,
        };
        // Sincroniza el estado de nuevo
        setValues(newValues);
    }

    return (
    <section className="Form" id="Form">
        <Box sx={{ flexGrow: 1 }}>
            <form onSubmit={handleSubmit} id='form'>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    name="name"
                    type="name"
                    value={values.name}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                />
                <button type="submit" id='join'>Join now</button>
            </form>
        </Box>
    </section>
    );
}
