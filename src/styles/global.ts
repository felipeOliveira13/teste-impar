import {createGlobalStyle} from 'styled-components'

 export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #F6F4F6;
        --primary-color: #5F1478;
        --secondary-color: #AE276F;
        --button-color: #E76316;
        --red-color: #DB2525;
        --font-color: #263238;
        --hover-color: #757575

    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    html{
        @media (max-width: 1080px){
            font-size: 93.75%
        }
        @media (max-width:720px){
            font-size: 87.5%
        }
    }
    body{
        background: #F6F4F6;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Mulish', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6{
        font-family: 'Mulish', sans-serif;
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .nomes-pokemon {
        align-items: center;
        text-align: center;
        display:grid;
        /* grid-template-columns: repeat(auto-fit, min(350px)) ; */
        
    }
    
    .boa{
        margin-bottom: 69px;
        border: solid 1px;
        width: 254px;
        border-radius: 8px 8px 8px 8px;
        height: 267px;
        border-color: #E4E4E4;
        background: #FFFFFF;
        @media screen and
        (min-width: 768px) and
        (max-width: 1024px){
            margin-bottom: 95px;
            border: solid 1px;
            width: 328px;
            border-radius: 8px 8px 8px 8px;
            height: 290px;
            border-color: #E4E4E4;
            background: #FFFFFF;
        }
        
        p{
            margin-top: 32px;
            @media screen and
        (min-width: 768px) and
        (max-width: 1024px){
            font-size: 25px;
            margin-bottom: -26px;
        }
        }
        .soco{
            margin-top: 28px;
            border: 15px solid;
            border-radius: 100%;
            border-color: transparent;
            background: #E4E4E4;
        }

    }

    .ajustes{
        display: flex;
        align-items: stretch;
        text-align: center;
        margin: 0 auto;
        justify-content: space-around;
        flex-wrap: wrap;
        @media screen and (max-width:1920px){
            width: 60%;
        }
        @media screen and (max-width:1440px){
            margin-right: 93px;
             width: 80%;
        }

        @media screen and
        (min-width: 1490px) and
        (max-width: 1536px){
            
            width: 74.5%;
        }

        @media screen and
        (min-width: 768px) and
        (max-width: 1024px){
            margin-left: 165px;
            width: 116%;
        }

    }

    .botao{
        margin-top: 48px;
        box-shadow: inset 0px 3px 6px #0000000F;
        border-radius: 0px 0px 8px 8px;
        @media screen and
        (min-width: 768px) and
        (max-width: 1024px){
            margin-top: 80px;
            box-shadow: inset 0px 3px 6px #0000000f;
            border-radius: 0px 0px 8px 8px;
        }
        .b1{
            width: 50%;
            height: 43px;
            border: none;            
            border-radius: 0px 0px 0px 8px;
            @media screen and
                (min-width: 768px) and
                (max-width: 1024px){
                    font-size: 23px;
                    width: 50%;
                    height: 46px;
                    border: none;
                    border-radius: 0px 0px 0px 8px;
                }
            img{
                margin-top: -4px;
                margin-right: 11px;
                align-items: center;
            }
        }
        .b2{
            width: 50%;
            height: 46px;
            border: none;            
            border-radius: 0px 0px 8px 0px;
            @media screen and
                (min-width: 768px) and
                (max-width: 1024px){
                    font-size: 23px;
                    width: 50%;
                    height: 46px;
                    border: none;
                    border-radius: 0px 0px 8px 0px;
                }
            img{
                margin-top: -4px;
                margin-right: 11px;
                align-items: center;
            }
        }
    }

`