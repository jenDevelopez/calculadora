import './App.css';
import developezLogo from './imagenes/developez-logo.png'
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs'

function App() {
  //Logica
    const [input, setInput] = useState(' ')

    const agregarInput =  val => {
      setInput(input + val)
    }

    const calcularResultado = () => {
      if(input){
        setInput(evaluate(input));
      }else{
        alert("Introduce un valor para realizar un cálculo")
      }
    }

  return (
    <div className='App'>
      <div className='developez-logo-contenedor'>
        <img 
        className='developez-logo' 
        src={developezLogo}
        alt='Logo Developez'/>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input ={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>C</BotonClear>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
        </div>        
      </div>
    </div>
  );
}

export default App;
