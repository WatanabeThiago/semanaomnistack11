import React from 'react'
import ReactDOM from 'react-dom'
import { FiLogIn } from 'react-icons/fi'


import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Login() {
    return (
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt="BeThe Hero" />


                <form>
                    <h1>Faça seu Login</h1>

                    <input placeholder="Sua ID" />
                    <input placeholder="Senha" />
                    <button className="button" type="submit">Entrar</button>

                    <a href="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Nao tenho cadastro
                    </a>

                   
                </form>

            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}