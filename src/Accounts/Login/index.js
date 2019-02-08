import React, { Fragment } from 'react' 
import {WrapperLogin, FormGroup,QuestionMessage,  WrapperBanner, ThemeLogin } from '../style'
import { Link } from 'react-router-dom'
 
const Login = () => (
    <Fragment>   
        
        <WrapperLogin>
            <QuestionMessage>
                Não tem uma conta?
                <Link to='join'>Iniciar</Link>
            </QuestionMessage>
            <ThemeLogin>
                <img src='getec_logo2.jpg' />
                <FormGroup>
                    <label>Email</label>
                    <input type='email' />
                </FormGroup>
                <FormGroup>
                    <label>Senha</label>
                    <input type='email' />
                </FormGroup>
                <button>Log in</button>
            </ThemeLogin>
            
        </WrapperLogin>
        <WrapperBanner/>
    </Fragment>
) 
export default Login

 
