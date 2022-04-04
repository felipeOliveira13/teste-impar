import styled from 'styled-components';

export const Novo = styled.div`

@media screen and (max-width:1440px){        
    margin-left: 90px;
    }
@media screen and (min-width: 768px) and (max-width:1024px){        
    width: 131%;
    }
`;

export const Card = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 32px;
    @media screen and (max-width:1440px){        
    max-width: 1148px;
    }

    button {
        width: 173px;
        height: 48px;
        background-color: #E76316;
        font-size: 18px;
        color: #fff;
        border-color: transparent;
        border-radius: 8px;

    }

    h1{
        color: var(--primary-color);
    }
    
    
`;