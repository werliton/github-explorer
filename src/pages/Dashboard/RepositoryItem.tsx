import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

interface Owner{
    avatar_url: string
}

export interface Repository {
    full_name: string;
    owner: Owner;
    description: string;
}

export default function RepositoryItem({ full_name, description, owner }: Repository) {
    return (
        <a href="re">
            <img src={owner.avatar_url} alt="Perfil"/>
            <div>
            <strong>{full_name}</strong>
            <p>{description}</p>
            </div>
                <FiChevronRight size={20}/>
        </a>
    )
}
