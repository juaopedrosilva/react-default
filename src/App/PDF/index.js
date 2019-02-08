import React, { Component, Fragment} from 'react'
import './style.css'
import LOGO from './getec_logo2.jpg'

export default class PDF extends Component {
    state = {}
    componentDidMount(){
        const conteudo = document.getElementById('printable').innerHTML,
        tela_impressao = window.open('');
        tela_impressao.document.write(conteudo);
        // tela_impressao.window.print();
        // tela_impressao.window.close();
    }
    
    render(){
        const divStyle = {
            color: '#000',
            width: '100%',
            height: '100%',
            borderStyle: 'solid',
            borderWidth: 'thin',
            boxSizing: 'border-box',
            padding: '2px'
        }
        const img = {
            width: '80px',
            height: '80px',
            margin: '20px'
        }
        const title = {
            display: 'flex',
            // justifyContent: '';
            alignItems: 'center',
            textAlign: 'center'
        }
        const table = {
            margin: '0',
            // border: '0.2px solid #000'
        }
        const tableTdLineZero = {
            // width: '60vw',
            margin: '0',
            borderStyle: 'solid',
            borderWidth: 'thin', 
            borderLeft: '0',
            // borderRigh: '0',
            padding: '2px'
            // borderBottom: '0'
        }
        const tableTdLineOne = {
            width: '60vw',
            margin: '0',
            borderStyle: 'solid',
            borderWidth: 'thin', 
            borderLeft: '0',
            borderTop: '0',
            padding: '2px'
        }
        const tableTdLineTwo = {
            width: '20vw',
            margin: '0',
            borderStyle: 'solid',
            borderWidth: 'thin', 
            borderLeft: '0',
            borderTop: '0',
            padding: '2px'
        }
        const tableTdLineTree = {
            width: '20vw',
            padding: '0px',
            margin: '0',
            borderStyle: 'solid',
            borderWidth: 'thin', 
            borderLeft: '0',
            borderRight: '0',
            borderTop: '0',
            padding: '2px'
        }
        const tableTd = {
            margin: '0',
            // border: '0.1px solid #000'
        }
        return <div id='printable' >
            <div style={divStyle}>
                <div style={title}>
                    <img src={LOGO} style={img} />
                    <h6>RELATÓRIO DE PARTICIPANTES</h6>
                </div>
                <table style={table} cellspacing="0" >
                    <tr>
                        <td style={tableTdLineZero}>COD NOME FANTASIA</td>
                        <td style={tableTdLineZero}>RAZÃO SOCIAL</td>
                        <td style={tableTdLineZero}>TIPO DE PESSOA</td>
                    </tr>
                    <tr>
                        <td style={tableTdLineOne}>ENDEREÇO</td>
                        <td style={tableTdLineTwo}>CPF/CNPJ</td>
                        <td style={tableTdLineTree}>SITUÇÃO</td>
                    </tr>
                    <tr>
                        <td style={tableTdLineOne}>FONES</td>
                        <td style={tableTdLineTwo}>E-MAIL</td>
                        <td style={tableTdLineTree}>NASCIMENTO</td>
                    </tr>
                </table>
                <div>
                    <div>15  ITAIPAVA</div>
                    <div>BRF S.A</div>
                    <div>Jurídica</div>
                    <div>AVENIDA PARQUE CENTRAL 2081 MISTEL HULL 70.360-845</div>
                    <div>12.213.312/31323-02</div>
                    <div>Ativo</div>
                    <div>FORTALEZA-CE</div>
                </div>
            </div>
            
        </div>
    }
}