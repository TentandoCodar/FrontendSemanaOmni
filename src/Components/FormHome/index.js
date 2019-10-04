import React, { useState } from 'react';

import { Container, Logo, Content, Form} from './styled';

import logo from '../../assets/logo.svg';

import './index.css';

import api from '../../services/api';



function FormHome() {

    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault()
        console.log(email);
    }

    return (
        <div className="SmoothingAparision">
            <Container>
                <Logo src={logo} alt="AirCnC logo"></Logo>

                <Content>
                    <p>
                        Ofereça spots para <strong>programadores e encontre talentos para sua empresa</strong>
                    </p>
                    <Form onSubmit={(event) => {
                        handleSubmit(event)
                    }}>
                        <label htmlFor="email">E-MAIL: </label>
                        <input onChange={(e) => {setEmail(e.target.value)}} type="email" className="Input" placeholder="Seu melhor email"/>

                        <button type="submit">Entrar</button>

                    </Form>
                </Content>
            
            </Container>
        </div>
    );
}

export default FormHome;
