import React, { FormEvent, useEffect, useState } from 'react'
import { Title, TitleContainer, Container, Form, Repositories, Message, SearchButton } from './styles'
import Items, { Repository } from './Items'
import { FiInfo, FiSearch } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

const REPOSITORIES_KEY = '@ge:repositories'

const Dashboard: React.FC = () => {
    const [repositories, setRepositories] = useState<Repository[]>(()=>{
        const repositoriesStorage = localStorage.getItem(REPOSITORIES_KEY)

        if(repositoriesStorage) return JSON.parse(repositoriesStorage)
        return []
    })
    const [inputRepository, setInputRepository] = useState('')
    const [message, setMessage] = useState('')


    useEffect(()=> {
        localStorage.setItem(REPOSITORIES_KEY, JSON.stringify(repositories))
    }, [repositories])

    const clearValues = () => {
        setInputRepository('')
        setMessage('')
    }
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
                clearValues()
            }
        } catch (error) {
            setMessage('Repositório não encontrado!')
            setInputRepository('')
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
                placeholder="Digite aqui o autor/repositorio"
                value={inputRepository}
                onChange={ e => setInputRepository(e.target.value)}
                />
                <SearchButton enabled={!inputRepository}
                style={{
                    pointerEvents: !inputRepository ? 'none' : 'initial'
                }}
                >
                    <FiSearch size={30}/>

                    Pesquisar</SearchButton>
            </Form>
            {
                message &&
                <Message>
                    <FiInfo color="#fff"/>
                    <p>{message}</p>
                </Message>
            }

            <Repositories>
                {
                    repositories.length > 0 &&
                    repositories.map((item, index) => (
                        <Items {...item} key={index}/>
                    ))
                }
            </Repositories>
        </Container>
    )
}

export default Dashboard
