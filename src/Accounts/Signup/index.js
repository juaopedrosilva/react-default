import React, { Fragment, Component } from 'react' 
import {WrapperLogin, FormGroup,QuestionMessage,  WrapperBanner, ThemeLogin, BlockMessage  } from '../style'
import { Link } from 'react-router-dom'
 
class Signup extends Component {
    state = {
        email: '', 
        nickname: '',
        password: ''
    }
    handleSubmit = (e) => {
        e.preventDefault()
        Object.keys(this.state).map(item => { 
            console.log(this.state[item].length)
            if(this.state[item].length === 0){ 
                if(document.getElementById(item) !== null){
                    document.getElementById(item).classList.add('input-error')
                    document.getElementById(`error-${item}`).classList.remove('none')  
                    return
                }   
            } 
            document.getElementById(item).classList.remove('input-error')
            document.getElementById(`error-${item}`).classList.add('none')
        }) 
    }
    handleEmailChange = e => this.setState({ email: e.target.value }) 
    handleNicknameChange = e => this.setState({ nickname: e.target.value })
    handlePasswordChange = e => this.setState({ password: e.target.value })
    render(){
        return(
            <Fragment>    
                <WrapperLogin>
                    <QuestionMessage>
                        já tem uma conta? 
                        <Link to='/'>Login</Link>
                    </QuestionMessage>
                    <BlockMessage><div className='face'>wda</div></BlockMessage>
                    <ThemeLogin onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <label>Email</label>
                            <input 
                                type='email' 
                                id='email'
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                            />
                            <span className='none message-error' id='error-email'>Email é obrigatório</span>
                        </FormGroup>
                        <FormGroup>
                            <label>Nickname</label>
                            <input 
                                type='text'
                                id='nickname'
                                value={this.state.nickname}
                                onChange={this.handleNicknameChange}
                            />
                            <span className='none message-error' id='error-nickname'>Nickname é obrigatório</span>
                        </FormGroup>
                        <FormGroup>
                            <label>Senha</label>
                            <input 
                                type='password' 
                                id='password'
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                            />
                            <span className='none message-error' id='error-password'>Senha é obrigatório</span>
                        </FormGroup>
                        {/* <FormGroup>
                            <label>Confirmação Da Senha</label>
                            <input type='text' />
                        </FormGroup> */}
                        <button>Criar Conta</button>
                    </ThemeLogin>
                    
                </WrapperLogin>
                <WrapperBanner/>
            </Fragment>
        )
    }
} 
export default Signup

 
