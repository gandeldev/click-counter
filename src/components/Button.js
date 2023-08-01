import React from "react"
import '../css/Button.css'

export function Button({ text, isClickButton, clickFunction }) {
    return(
        <button
            className={ isClickButton ? 'click-button' : 'reset-button' }
            onClick={ clickFunction }
        >
            {text}
        </button>
    )
}