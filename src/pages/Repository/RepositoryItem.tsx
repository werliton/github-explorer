import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import RepositoryDTO from '../../shared/dtos/RepositoryDTO'

export default function RepositoryItem({ full_name, description, owner }: RepositoryDTO) {
    return (
        <Link to={`/repository/${full_name}`}>
            <div>
            <strong>{full_name}</strong>
            <p>{description}</p>
            </div>
            <FiChevronRight size={20}/>
        </Link>
    )
}
