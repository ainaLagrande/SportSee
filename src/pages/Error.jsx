import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Error () {
    return (
        <div className='main_error'>
            <h1>404</h1>
                <p>Oups ! La page que vous demandez est en construction</p>
            <NavLink to='/'>Retourner sur la page d’accueil</NavLink>
        </div>
    )
}
 