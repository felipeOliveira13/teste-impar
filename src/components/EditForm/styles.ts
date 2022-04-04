import styled from 'styled-components';

    export const Overlay = styled.div`
    background-color: #F6F4F6CC;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: end;
    `;


export const Container = styled.div`
    background-color: #FFFFFF;
    width: 642px;
    height: 765px;
    
    
    `;

export const Close = styled.div`
    
    .fecha{
        background-color: transparent;
        color: gray;
        height: 20px;
        margin-bottom: 22px;
        align-items: end;
        width: 194%;
        border: none;
    }


`



    export const Header = styled.div`
    display: flex;
    margin-left: 45px;
    margin-bottom: 105px;
    img{
    margin-right: 18px;
    }

    h1{
        color: #5F1478;
    }
    
    
    `;
    export const Corpo = styled.div`
        margin-left: 35.5px;
    p{
        font-size: 14px;
        text-align: left;
        margin-left: 20px;
        
    }
    .ajuda{
        background-color: #FFFFFF;
        width: 573px;
        height:60px;
        margin-top:5px;
        border: 1px solid #B9B9B9;
        border-radius: 8px;
        opacity: 1;
        margin-bottom: 50px;

        ::placeholder{
            font-size:18px;
            padding-left: 25px;
            color: #757575
        }
        }
    .anexo{
        background-color: #FFFFFF;
        width: 573px;
        height:60px;
        margin-top:5px;
        border: 1px solid #B9B9B9;
        border-radius: 8px;
        opacity: 1;
        margin-bottom: 50px;
        padding:4px;

    }  
 
    
    input[type=file]::file-selector-button {
        border: 1px solid #E76316;        
        border-radius: 8px;
        background-color: #FFFFFF;
        transition: 1s;
        color:#E76316;
        width: 224px;
        height: 48px;
        cursor: pointer;
        float: right;
        
}




    
    
    
    
    `;
    export const Footer = styled.div`
    margin-left: 435px;
    height:100px;

    button{
    width: 173px;
    height: 48px;
    background-color: #E76316;
    font-size: 18px;
    color: #fff;
    border-color: transparent;
    border-radius: 8px;
    }
    
    `;
    
