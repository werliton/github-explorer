import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Header, InfoRepository, Issues } from './styles'
interface RepositoryParams {
    repository: string
}

const Repository:React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>()

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer"/>

                <Link to="/">
                <FiChevronLeft size={16}/>
                Voltar
                </Link>
            </Header>

            <InfoRepository>
                <header>
                    <img src="https://avatars1.githubusercontent.com/u/4674324?s=460&u=cb676169391ac204b824569fd7465fa36488624d&v=4" alt=""/>
                    <div>
                        <strong>werluton/proffy</strong>
                        <p>Descricao</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1818</strong>
                        <span>Stars</span>
                    </li>

                    <li>
                        <strong>1818</strong>
                        <span>Stars</span>
                    </li>

                    <li>
                        <strong>1818</strong>
                        <span>Stars</span>
                    </li>
                </ul>
            </InfoRepository>

            <Issues>
                <Link to={`/repository/`}>
                    <div>
                    <strong>full_name</strong>
                    <p>description</p>
                    </div>
                    <FiChevronRight size={20}/>
                </Link>
            </Issues>
        </>
    )
}

export default Repository
