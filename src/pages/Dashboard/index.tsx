import React, { FormEvent, useState } from 'react'
import { Title, TitleContainer, Container, Form, Repositories, Message } from './styles'
import RepositoryItem, { Repository } from './RepositoryItem'
import { FiInfo } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

const Dashboard: React.FC = () => {
    const [repositories, setRepositories] = useState<Repository[]>([])
    const [inputRepository, setInputRepository] = useState('')
    const [message, setMessage] = useState('')

    const submit = async (event: FormEvent<HTMLElement>) => {

        event.preventDefault()

        if(!inputRepository){
            setMessage('Informe autor/repositorio')
            return;
        }

        try {
            const { data: repository } = await api.get<Repository>(`repos/${inputRepository}`)

            if(repository){
                setRepositories([...repositories, repository])
                setInputRepository('')
                setMessage('')
            }
        } catch (error) {
            setMessage('Repositório não encontrado!')
        }
    }

    return (
        <Container>
            <TitleContainer>
                <img src={logoImg} alt="Github Explorer"/>
                <Title>Explore repositórios no Github</Title>
            </TitleContainer>
            <Form hasError={!! message} onSubmit={submit}>
                <input
                placeholder="Digite aqui o nome do repositorio"
                value={inputRepository}
                onChange={ e => setInputRepository(e.target.value)}
                />
                <button
                type="submit"
                >Pesquisar</button>

            </Form>

            <Repositories>
                {
                    repositories.length > 0 &&
                    repositories.map((item, index) => (
                        <RepositoryItem {...item} key={index}/>
                    ))
                }
            </Repositories>
            {
                message &&
                <Message>
                    <FiInfo />
                    <p>{message}</p>
                </Message>
            }
        </Container>
    )
}

export default Dashboard
