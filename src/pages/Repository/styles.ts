import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        color: #a8a8a8;
        text-decoration: none;
        transition: color 0.2s;

        &:hover{
            color: #666;
        }

        svg {
            margin-right: 4px;
        }
    }
`
export const InfoRepository = styled.section`
    margin-top: 80px;

    header{
        display: flex;
        align-items: center;

        img{
            height:120px;
            width:120px;

            border-radius: 50%;
        }

        div{
            margin-left: 24px;

            strong{
                font-size:36px;
                color: #3d3d4d;
            }

            p{
                font-size: 18px;
                color: #737380;
                margin-top: 4px;
            }
        }
    }

    ul{
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {

            & + li {
                margin-left:80px;
            }

            strong{
                display: block;
                font-size:36px;
                color: #3d3d4d;
            }
            span{
                display: block;
                margin-top: 4px;
                color: #6c6c80;

            }
        }
    }

`
export const Issues = styled.div`
    margin-top: 50px;

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
