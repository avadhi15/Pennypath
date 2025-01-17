import "./style.css";
import React from 'react'

const Button = ({text , onClick , blue , disabled}) => {
  return (
    <div  className={blue ? "btn btn-blue" : "btn"}
     onClick={onClick}
     disabled ={disabled}
     > {text}</div>
  )
}

export default Button

