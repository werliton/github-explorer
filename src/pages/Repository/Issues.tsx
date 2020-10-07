import React from 'react'
import { Link } from 'react-router-dom'

import { FiChevronRight } from 'react-icons/fi'
import { Issues } from './styles'
import IssuesDTO from '../../shared/dtos/IssueDTO'

const Issue:React.FC<IssuesDTO> = ({ title, html_url }: IssuesDTO) => {

    return (
        <Issues>
            <Link to={`/repository/`}>
                <div>
                    <strong>{title}</strong>
                    <p>{html_url}</p>
                </div>
                <FiChevronRight size={20}/>
            </Link>
        </Issues>
    )
}

export default Issue
