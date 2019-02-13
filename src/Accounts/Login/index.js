import React, { Fragment, Component} from 'react' 
import {WrapperLogin, FormGroup,QuestionMessage,  WrapperBanner, ThemeLogin } from '../style'
import { Link, Redirect } from 'react-router-dom'
import { isAuthenticated } from "../../Auth"
 
export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const EMAIL_ADMIN = "admin@getec.com"
        const PASSWORD_ADMIN = "123" 
        const { email, password } = this.state
        
        if(email === EMAIL_ADMIN && password === PASSWORD_ADMIN){
            localStorage.setItem("isLogging", "true")
            this.setState({ isLogging: true })
            return 
        }
        alert("email ou senha incorretos")
    }
    handleEmailChange = e => this.setState({ email: e.target.value }) 
    handlePasswordChange = e => this.setState({ password: e.target.value })
    render(){
        return <Fragment>    
            {isAuthenticated() && <Redirect to="/admin" />}
            <WrapperLogin>
                {/* <QuestionMessage>
                    Não tem uma conta?
                    <Link to='join'>Iniciar</Link>
                </QuestionMessage> */}
                <ThemeLogin onSubmit={this.handleSubmit}>
                    <img src='getec_logo2.jpg' />
                    <FormGroup>
                        <label>Email</label>
                        <input type='email' 
                            value={this.state.email}
                            onChange={this.handleEmailChange} 
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Senha</label>
                        <input type='password' 
                            value={this.state.password}
                            onChange={this.handlePasswordChange} 
                        />
                    </FormGroup>
                    <button>Log in</button>
                </ThemeLogin> 
            </WrapperLogin>
            <WrapperBanner/>
        </Fragment>
    }
}
     

 
