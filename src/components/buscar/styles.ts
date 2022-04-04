import styled from 'styled-components';

export const Pesquisa = styled.div`
    display: block;

    .DOIS{
        background-repeat: no-repeat;
        height: 281px;
        background-size: cover;
        text-align: center;
        @media screen and (max-width:1440px){
        width: 105.5%;
        @media screen and (max-width:1024px){
        width: 148.4%;
    }
    }
    
    button{
        border: transparent;
        background: none;
        margin: 0 auto;
        img{
            margin-left: -87px;
            margin-bottom: -8px;
        }
    }
    input{
        max-width: 1120px;
        width: 100%;
        margin: 0 auto;
        align-items: center;
        height: 75px;
        border-radius: 8px;
        margin-top: 150px;
        border-color: transparent;
        font-size: 20px;
        padding-left: 20px;
        outline: none;
        ::placeholder{
            font-size: 24px;
        }
        .text{
            font-size: 24px;
            padding-left: 28px;
        }
    }
    
    .hadlechange{
        font-size: 24px;
        padding-left:15px;

    }

    
`;