import React, { Component, Fragment} from 'react'
import './style.css'
import LOGO from './getec_logo2.jpg'

export default class PDF extends Component {
    state = { data:  `` }
    componentDidMount(){
        const conteudo = document.getElementById('printable').innerHTML,
        tela_impressao = window.open('');
        tela_impressao.document.write(conteudo);
        tela_impressao.window.print();
        tela_impressao.window.close();
       
    }
    renderItemReport = (item) =>{
        console.log(item)
        const divFlexContainer = {
            display: 'flex',
            width: '100%',
            flexWrap: 'wrap',
            fontSize: '14px', 
            borderBottom: '0.5px solid #000',
            borderWidth: 'thin',
            fontFamily: 'sans-serif' 
        } 
        const divStyleWidth60 = {
            width: '45.5vw',
            padding: '3px ',
            borderLeft: 'none'
        }
        const divStyleWidth20 = {
            width: '25vw',
            padding: '3px '
        }
        const divStyleWidth20Float = {
            width: '23vw',
            padding: '3px',
            textAlign: 'right'
        }
        return(
            <div style={divFlexContainer}>
                <div style={divStyleWidth60}><strong>{item.idParticipant}  {item.name}</strong></div>
                <div style={divStyleWidth20}>{item.socialName}</div>
                <div style={divStyleWidth20Float}>{item.kindOfPerson}</div>
                <div style={divStyleWidth60}>{item.adress}</div>
                <div style={divStyleWidth20}>12.213.312/31323-02</div>
                <div style={divStyleWidth20Float}>Ativo</div>
                <div style={divStyleWidth60}>{item.city} <br/> {item.phone}</div>
            </div>
        )
    }
    render(){
        const divStyle = {
            color: '#000',
            width: '100%',
            minHeight: '100%',
            borderStyle: 'solid',
            borderWidth: 'thin',
            boxSizing: 'border-box',
            padding: '2px',
            fontSize: '13px'
        }
        const img = {
            width: '80px',
            height: '80px',
            margin: '20px'
        }
        const title = {
            display: 'flex',
            // justifyContent: '';
            // alignItems: 'center',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            justifyContent: 'space-between'
        }
        const table = {
            margin: '0',
            // border: '0.2px solid #000',
            fontSize: '14px'
        }
        const tableTdLineZero = {
            // width: '60vw',
            margin: '0',
            borderStyle: 'solid',
            borderWidth: 'thin', 
            // borderLeft: 'none', 
            // borderRight: 'none',
            padding: '2px'
            // borderBottom: '0'
        }
        const noneBorderRight = {
            borderStyle: 'solid',
            borderWidth: 'thin', 
            borderLeft: 'none', 
            borderRight: 'none',
            padding: '2px', 
        }
         const noneBorderRightAlign = {
            borderStyle: 'solid',
            borderWidth: 'thin', 
            borderLeft: 'none', 
            borderRight: 'none',
            padding: '2px',
            textAlign: 'right',
            paddingRight: '20px'
        }
        const noneBorder = {
            borderStyle: 'solid',
            borderWidth: 'thin', 
            // borderLeft: 'none', 
            borderRight: 'none',
            padding: '2px'
        }
        const tableTdLineOne = {
            width: '50vw',
            margin: '0',
            borderStyle: 'solid',
            borderWidth: 'thin', 
            borderLeft: '0',
            borderTop: '0',
            padding: '2px'
        }
        const tableTdLineTwo = {
            width: '25vw',
            margin: '0',
            borderStyle: 'solid',
            borderWidth: 'thin', 
            borderLeft: '0',
            borderTop: '0',
            padding: '2px'
        }
        const tableTdLineTree = {
            width: '25vw',
            padding: '0px',
            margin: '0',
            borderStyle: 'solid',
            borderWidth: 'thin', 
            borderLeft: '0',
            borderRight: '0',
            borderTop: '0',
            padding: '2px'
        }
        const tableTdLineTreeAlign = {
            width: '25vw',
            padding: '0px',
            margin: '0',
            borderStyle: 'solid',
            borderWidth: 'thin', 
            borderLeft: '0',
            borderRight: '0',
            borderTop: '0',
            padding: '2px',
            textAlign: 'right',
            paddingRight: '20px'

        } 
        const data = new Date();
        const dataAtual = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
        
        return <div id='printable' >
        {/* {JSON.stringify(this.props)} */}
        
            <div style={divStyle}>
                <div style={title}>
                    <img src={LOGO} style={img} />
                    <h1>RELATÓRIO DE PARTICIPANTES</h1>
                    <span>Data: {dataAtual}</span>
                </div>
                <table style={table} cellspacing="0" >
                    <tr>
                        <td style={noneBorderRight}><strong>COD NOME FANTASIA</strong></td>
                        <td style={tableTdLineZero}><strong>RAZÃO SOCIAL</strong></td>
                        <td style={noneBorderRightAlign}><strong>TIPO DE PESSOA</strong></td>
                    </tr>
                    <tr>
                        <td style={tableTdLineOne}><strong>ENDEREÇO</strong></td>
                        <td style={tableTdLineTwo}><strong>CPF/CNPJ</strong></td>
                        <td style={tableTdLineTreeAlign}><strong>SITUÇÃO</strong></td>
                    </tr>
                    <tr>
                        <td style={tableTdLineOne}><strong>FONES</strong></td>
                        <td style={tableTdLineTwo}><strong>E-MAIL</strong></td>
                        <td style={tableTdLineTreeAlign}><strong>NASCIMENTO</strong></td>
                    </tr>
                </table>
                {
                    this.props.content.map(this.renderItemReport)
                } 
            </div>
            
        </div>
    }
}