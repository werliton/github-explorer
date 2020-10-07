import React from 'react'

import { FiChevronRight } from 'react-icons/fi'
import { Issues } from './styles'
import IssuesDTO from '../../shared/dtos/IssueDTO'

const Issue:React.FC<IssuesDTO> = ({ title, html_url, owner }: IssuesDTO) => {

    return (
        <Issues>
            <a href={html_url} target="_blank">
                <div>
                    <strong>{title}</strong>
                    <p>{html_url}</p>
                </div>
                <FiChevronRight size={20}/>
            </a>
        </Issues>
    )
}

export default Issue
