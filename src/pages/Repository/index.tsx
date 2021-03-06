import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import { FiChevronLeft, FiLoader } from 'react-icons/fi'
import { Header, InfoRepository, Loading } from './styles'
import api from '../../services/api'
import RepositoryDTO from '../../shared/dtos/RepositoryDTO'
import IssuesDTO from '../../shared/dtos/IssueDTO'
import Issue from './Issues'

import load from '../../assets/loading.svg'
interface RepositoryParams {
    repository: string
}

const Repository:React.FC = () => {
    const [repository, setRepository ] = useState<RepositoryDTO>()
    const [issues, setIssues] = useState<IssuesDTO[]>([])

    const { params } = useRouteMatch<RepositoryParams>()

    useEffect(()=>{
        async function loadData():Promise<void> {
            const [_repository, _issues] = await Promise.all([
                api.get<RepositoryDTO>(`repos/${params.repository}`),
                api.get<IssuesDTO[]>(`repos/${params.repository}/issues`)
            ])

            setRepository(_repository.data)
            setIssues(_issues.data)
        }

        loadData()
    }, [params.repository])

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer"/>
                <Link to="/">
                <FiChevronLeft size={16}/>
                Voltar
                </Link>
            </Header>
            {
                repository &&
                <InfoRepository>
                    <header>
                        <img src={repository.owner.avatar_url} alt=""/>
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <span>Stars</span>
                        </li>

                        <li>
                            <strong>{repository.forks_count}</strong>
                            <span>Forks</span>
                        </li>

                        <li>
                            <strong>{repository.open_issues_count}</strong>
                            <span>Issues Open</span>
                        </li>
                    </ul>
                </InfoRepository>
            }
            {
                issues &&
                issues.map(item => <Issue {...item} key={item.id}/>)
            }
        </>
    )
}

export default Repository
