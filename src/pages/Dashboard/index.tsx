import React from 'react'
import { Title, TitleContainer, Container, Form, Repositories } from './styles'

import logoImg from '../../assets/logo.svg'

const Dashboard: React.FC = () => {
    return (
        <Container>
            <TitleContainer>
                <img src={logoImg} alt="Github Explorer"/>
                <Title>Explore repositórios no Github</Title>
            </TitleContainer>
            <Form>
                <input placeholder="Digite aqui o nome do repositorio"/>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="re">
                    <img src="https://avatars1.githubusercontent.com/u/4674324?s=460&u=cb676169391ac204b824569fd7465fa36488624d&v=4" alt="Perfil"/>
                    <div>
                        <strong>template-nodejs-with-solid</strong>
                        <p>Projeto desenvolvido nas aulas da Rocketseat no goStack</p>
                    </div>
                </a>
            </Repositories>
        </Container>
    )
}

export default Dashboard
