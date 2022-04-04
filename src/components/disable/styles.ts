import styled from 'styled-components';


export const Overlay = styled.div`
background-color: #F6F4F6CC;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Container = styled.div`
    background-color: #FFFFFF;
    width: 300px;
    height: 200px;
    border-radius: 15%;
    background-color: gray;
 `;
export const Close = styled.div`
    margin-left: 266px;
    width: 34px;
    margin-top: -1px;
    color:green;
    button{
    }
    .erro{  
      border: none;
      background: #DB2525;
      height: 34px;
      color: white;
      border-radius: 50%;
      width: 34px;
      font-size:20px;
    } 
    `;
export const Corpo = styled.div`
    img{
        width: 68px;
        height: 68px;
        margin-top: 46px;        
    }
    .lixao{
        width: 159px;
        height: 159px;
        background: #DB25250F;
        border: 6px solid #E4E4E4;
        border-radius: 50%;
        margin-left: 142px;
        margin-top: 50px;
        margin-bottom: 25px;
    }
    h1{
        font-size: 32px;
        color: #DB2525 !important;
        text-align: center;
        margin-top: 20px;
        
    }
    p{
        font-size:12px;
        color: #454545;
        margin-top: 10px !important;
        font-size: 12px;
        margin-bottom: 39px;
        color: black;
        font-weight: 600;
    }
`;
export const Footer = styled.div`
    display: flex;
    justify-content: space-evenly;
.first{
    width: 165px;
    background: #DB2525;
    height: 48px;
    color: white;
    font-size: 18px;
    border: transparent;
    border-radius: 8px;
}

.second{
    width: 165px;
    height: 48px;
    color: #DB2525;
    font-size: 18px;
    border: #DB2525 1px solid;
    border-radius: 8px;
}



`;