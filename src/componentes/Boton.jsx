import React from "react";
import '../hojas-de-estilo/Boton.css'
function Boton(props) {
  
  const esOperador = valor => {
    return isNaN(valor) && ( valor !== '.') && (valor !== '=')
  }
  
  return(
    <div
      onClick={() => props.manejarClic(props.children)}
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''} ${props.children === '=' ? 'boton-igual' : ''}`.trimEnd()}>
      {props.children}
    </div>
  )
}

export default Boton