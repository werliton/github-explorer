import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

interface RepositoryParams {
    repository: string
}

const Repository:React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>()

    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Repository {params.repository}</h1>
        </div>
    )
}

export default Repository
