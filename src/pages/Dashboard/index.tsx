import React, { FormEvent, useState } from 'react'
import { Title, TitleContainer, Container, Form, Repositories, Message } from './styles'

import logoImg from '../../assets/logo.svg'
import RepositoryItem, { Repository } from './RepositoryItem'
import api from '../../services/api'

const Dashboard: React.FC = () => {
    const [repositories, setRepositories] = useState<Repository[]>([])
    const [inputRepository, setInputRepository] = useState('')

    const submit = async (event: FormEvent<HTMLElement>) => {

        event.preventDefault()

        const { data: repository } = await api.get<Repository>(`repos/${inputRepository}`)

        if(repository){
            setRepositories([...repositories, repository])
            setInputRepository('')
        }
    }

    return (
        <Container>
            <TitleContainer>
                <img src={logoImg} alt="Github Explorer"/>
                <Title>Explore repositórios no Github</Title>
            </TitleContainer>
            <Form onSubmit={submit}>
                <input
                placeholder="Digite aqui o nome do repositorio"
                value={inputRepository}
                onChange={ e => setInputRepository(e.target.value)}
                />
                <button
                type="button"
                >Pesquisar</button>

            </Form>

            <Repositories>
                {
                    repositories.length > 0 ?
                    repositories.map((item, index) => (
                        <RepositoryItem {...item} key={index}/>
                    ))
                    :
                    <Message>
                        <p>Nenhum repositório encontrado!</p>
                    </Message>
                }
            </Repositories>
        </Container>
    )
}

export default Dashboard
