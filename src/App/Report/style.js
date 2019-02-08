import styled from 'styled-components' 

export const ThemeReport = styled.main`
    position: relative;
    margin: 0 auto; 
    width: 98%;
    margin-top: 2vw;
    background-color: #FFF;
    border-radius: 5px; 
    /* height: 24vh; */
    border: 1px solid rgba(0,0,0,.0625);
    /* display: flex; */
    padding: 16px;
    div.notData{
        width: 30%;
        display: flex;
        margin: 0 auto;
        justify-content: center;
    }
    /* table {
        position: relative;
        border-collapse: collapse;
        display: block;
        height: 35vw;
        overflow-y: scroll;
    }  */
    /* table td, table th {
        border: 0.5px solid #ddd;
        padding: 8px; 
    } 
    table tr:nth-child(even){background-color: #f2f2f2; }
    table tr:hover {background-color: #ddd;}
    table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #F2930D;
        color: white;
    }*/
    div.limit{
        display: flex;
        justify-content: space-between;
        margin-bottom: 2%;
    }
    div.limit select{
        margin: 0px 8px;
        margin-bottom: 2%;
        padding: 10px 9px;
        text-align: center;
        appearance: none;
        
    }  
`  