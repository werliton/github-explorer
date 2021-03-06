import styled, {css} from 'styled-components'
import { shade } from 'polished'

interface FormProps {
    hasError: boolean
}

interface SearchButtonProps {
    enabled: boolean
}

export const Container = styled.div`
    max-width:700px;
`
export const Title = styled.h1`
    font-size: 30px;
    color: #3a3a3a;

    max-width: 450px;
    line-height: 40px;
    margin-top: 80px;

`

export const TitleContainer = styled.div`
    max-width:300px;
`

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex:1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        border: 2px solid #fff;
        border-right: 0;

        ${props => props.hasError && css`
            border-color: #c53030;
        `}

        &::placeholder{
            color: #a8a8b3;
        }
        color: #3a3a3a;
     }

`

export const Repositories = styled.div`
    margin-top: 50px;
    max-width: 700px;

    a{
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 14px;
        display: block;
        flex-direction: row;
        align-items: center;

        text-decoration:none;
        display: flex;
        transition: transform 0.2s;

        &:hover{
            transform: translateX(10px);
            box-shadow: 2px 2px 2px #a8a8b3;
        }

        & + a {
            margin-top: 16px;
        }

        img {
            border-radius: 50%;
            width: 10%;
        }

        div {
            margin:0 16px;
            flex:1;

            strong{
                font-size: 20px;
                color: #3D3D4D;
            }

            p {
                font-size: 16px;
                color: #ada9a8;
                margin-top: 4px;
            }
        }

        svg{
            margin-left: auto;
            color: #cbcbd6;
        }
    }
`
export const Message = styled.div`
    font-size: 16px;
    height: 50px;
    background: #c53030;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius:5px;
    margin-top:10px;

    p{
        color:#fff;
        margin-left: 5px;
    }
`
export const SearchButton = styled.button<SearchButtonProps>`
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border:0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-right:5px;
    }

    ${props => props.enabled && css`
        background: #a8a8b3;
        cursor: not-allowed;
    `}

    &:hover{
        background: ${shade(0.2, '#04d361')}
    }
`
