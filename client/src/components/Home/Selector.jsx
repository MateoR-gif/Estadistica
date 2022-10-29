import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'

export default function Selector({ extractOption }) {
    return (
        <div className='selector__container'>
            <ul>
                <li
                    onClick={() => extractOption('Media')}>Intervalo de Confianza para la Media</li>
                <li
                    onClick={() => extractOption('Proporcion')}>Intervalo de Confianza para una Proporción</li>
                <li
                    onClick={() => extractOption('Diferencia')}>Intervalo de Confianza para la Diferencia de Medias</li>
                <li
                    onClick={() => extractOption('Varianza')}>Intervalo de Confianza para la Varianza</li>
                <li
                    onClick={() => extractOption('Razon')}>Intervalo de Confianza para la Razón de Varianzas</li>
            </ul>
        </div>
    )
}
