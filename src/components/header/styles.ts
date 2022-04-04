import styled from 'styled-components';

export const Container = styled.header`
    background: url('') var(--primary-color);
    background-image: linear-gradient(to right, #5F1478 , #AE276F);
    height: 64px;
    position: absolute;
    max-width:2000px;
    @media screen and (max-width:1920px){
        width: 1903px;
    }
    @media screen and (max-width:1536px){
        width: 1519px;
    }
    
    img{
        margin-top: 10px;
        margin-left: 24px;
    }
    
`;
