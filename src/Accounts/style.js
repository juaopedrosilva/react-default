import styled from 'styled-components' 


export const WrapperLogin = styled.section`
    position: relative;
    width: 40%; 
    height: 100vh;
    background-color: #FFF;
    float: left; 
    @media (max-width: 768px) {
        width: 100%; 
    } 
`

export const QuestionMessage = styled.div`
    position: relative;
    display: flex; 
    width: 80%;
    justify-content: flex-end;
    top: 0;
    right: 0;
    align-items: center;
    padding-top: 0;
    padding-bottom: 0;
    margin: 0 auto;
    margin-top: 35px;      
    font-size: 13px;
    a{
         border:1px solid  #F2930D;
         padding: 6px 20px; 
         margin-left: 10px;
         font-size: 12px;
         color: #444;
    text-transform: uppercase;
    letter-spacing: .02rem;
    line-height:22px;
         display: inline-block;
    }
    
`

export const ThemeLogin = styled.form`
    display: flex;
    flex-direction: column; 

    width: 80%;
    margin: 0 auto;
    margin-top: 5%;
    button{
        font-size: 14px;
        border-radius: 4px;
        width: 100%;
        text-transform: uppercase;
        letter-spacing: .02rem;
        padding: 12px 20px;
        font-size: 14px;
        background-color: #F2930D;
        border: none;
        color: #FFF;
        line-height: 1.3333333;
    }
    button:hover{
        box-shadow: 0 4px 12px 0 rgba(0,0,0,.2);
        transition: 0.5s;
    }
    img{
        width: 300px;
        height: auto;
        margin: 0 auto;
    }
`

export const FormGroup = styled.div`
    margin-bottom: 15px;
    label{
        font-weight: 400;
        line-height: 26px;
        color: #777;
    } 
    input{
        display: block;
        width: 100%;
        height: 41px;
        padding: 6px 20px;
        font-size: 14px;
        line-height: 1.8572;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 2px;
    }
    .input-error{
        /* background-color: #fefdd2; */
        border-color: #DC4E41;
    } 
    .none{
        display: none;
    }
    .message-error{
        font-weight: 300;
        color:  #DC4E41;
        font-size: 14px;
       line-height: 30px;
    }
`

export const WrapperBanner = styled.section`
    position: relative;
    background-image: url('banner.jpg');
    background-color: #000;
    width: 60%; 
    height: 100vh;
    border:0px;
    float: right;  
    background-size: 125%;
    /* background: no-repeat; */
    background-position: center;
    @media (max-width: 768px) {
        display: none;
    } 
`

export const BlockMessage  = styled.div`
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1; 
        width: 80%;
        margin: 0 auto;
        padding: 15px;
    margin-bottom: 17px;
    margin-top: 2%;
    border: 0;
    border-radius: 2px;
    
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;

    @keyframes shake {
        10%, 90% {
            transform: translate3d(-1px, 0, 0);
        }
        
        20%, 80% {
            transform: translate3d(2px, 0, 0);
        }

        30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
        }

        40%, 60% {
            transform: translate3d(4px, 0, 0);
        }
    }
` 