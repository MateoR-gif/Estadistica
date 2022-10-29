import axios from 'axios'
import React, { useState } from 'react'
import { intervaloConfianzaPoblacionConocidaVarianzaConocida, intervaloConfianzaPoblacionDesconocida, intervaloDiferenciaMediaVarianzaConocidaMuestraGrande, intervaloDiferenciaMediaVarianzaDesconocidaDiferentesMuestraPequeña, intervaloDiferenciaMediaVarianzaDesconocidaIgualesMuestraPequeña, intervaloDiferenciaProporcionMuestraGrande, intervaloMediaPoblacionDesconocidaMuestraGrande, intervaloMediaPoblacionNormalVarianzaDesconocidaMuestraPeque, intervaloProporcionMuestraGrande, intervaloRazonVarianzas, intervaloVarianzaPoblacionNormal } from '../../utils/APIRoutes'

export default function Form(props) {
    const option = props.formOption
    // CONSTANTE DONDE SE GUARDA EL CÁLCULO EN PANTALLA
    const [calc, setCalc] = useState(null)
    // CONSTANTE DONDE SE GUARDAN LOS DATOS PARA EL CÁLCULO
    const [data, setData] = useState({
        X: null,
        S: null,
        n: null,
        porcentaje: 95,
        alfa: null,
        P: null,
        P1: null,
        P2: null,
        n1: null,
        n2: null,
        Y: null,
    })
    const handleChange = ({ target: { name, value } }) => {
        setCalc(null)
        switch (name) {
            case 'porcentaje':
                setData({ ...data, 'alfa': (1 - (parseFloat(value) / 100)) })
                break;
            default:
                setData({ ...data, [name]: parseFloat(value) })
                break;
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        switch (option) {
            case 1:
                var response = await axios.post(intervaloConfianzaPoblacionDesconocida, data)
                console.log(response)
                setCalc(response.data.calc)
                break;
            case 2:
                var response = await axios.post(intervaloConfianzaPoblacionConocidaVarianzaConocida, data)
                console.log(response)
                setCalc(response.data.calc)
                break;
            case 3:
                var response = await axios.post(intervaloMediaPoblacionNormalVarianzaDesconocidaMuestraPeque, data)
                console.log(response)
                setCalc(response.data.calc)
                break;
            case 4:
                var response = await axios.post(intervaloMediaPoblacionDesconocidaMuestraGrande, data)
                console.log(response)
                setCalc(response.data.calc)
                break;
            case 5:
                var response = await axios.post(intervaloProporcionMuestraGrande, data)
                console.log(response)
                setCalc(response.data.calc)
                break;
            case 6:
                var response = await axios.post(intervaloDiferenciaProporcionMuestraGrande, data)
                console.log(response)
                setCalc(response.data.calc)
                break;
            case 7:
                var response = await axios.post(intervaloDiferenciaMediaVarianzaConocidaMuestraGrande, data)
                console.log(response)
                setCalc(response.data.calc)
                break;
            case 8:
                var response = await axios.post(intervaloDiferenciaMediaVarianzaDesconocidaIgualesMuestraPequeña, data)
                console.log(response)
                setCalc(response.data.calc)
                break;
            case 9:
                var response = await axios.post(intervaloDiferenciaMediaVarianzaDesconocidaDiferentesMuestraPequeña, data)
                console.log(response)
                setCalc(response.data.calc)
                break;
            case 10:
                var response = await axios.post(intervaloVarianzaPoblacionNormal, data)
                console.log(response)
                setCalc(response.data.calc)
                break;
            case 11:
                var response = await axios.post(intervaloRazonVarianzas, data)
                console.log(response)
                setCalc(response.data.calc)
                break;
            default:
                break;
        }
    }
    switch (true) {
        case option === 1 || option === 2 || option === 3 || option === 4:
            return (
                <div className='data__form__container'>
                    <form onSubmit={handleSubmit} className='data__form'>
                        <input
                            type='number'
                            step='any'
                            name='X'
                            placeholder='Media (X)'
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            step='any'
                            name='S'
                            placeholder='Desviación (S)'
                            min={0}
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            step='any'
                            name='n'
                            placeholder='Muestra (n)'
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            step='any'
                            min={90}
                            max={99}
                            name='porcentaje'
                            placeholder='Porcentaje de Confianza'
                            onChange={handleChange}
                        />
                        <label>
                            {`${data.alfa} (alpha)`}
                        </label>
                        <button>Calcular</button>
                    </form>
                    <div className='result__container'>
                        {calc !== null ? <p>estamos {(1 - data.alfa) * 100}%
                            seguros de que el valor medio está entre {calc.Inferior} y {calc.Superior}</p> : null}
                    </div>
                </div>
            )
        case option === 5:
            return (
                <div className='data__form__container'>
                    <form onSubmit={handleSubmit} className='data__form'>
                        <input
                            type='number'
                            step='any'
                            name='P'
                            min={0}
                            max={1}
                            placeholder='Proporción (rho (p))'
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            step='any'
                            name='n'
                            placeholder='Muestra (n)'
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            step='any'
                            name='porcentaje'
                            placeholder='Porcentaje de Confianza'
                            min={90}
                            max={99}
                            onChange={handleChange}
                        />
                        <label>
                            {`${data.alfa} (alpha)`}
                        </label>
                        <button>Calcular</button>
                    </form>
                    <div className='result__container'>
                        {calc !== null ? <p>estamos {(1 - data.alfa) * 100}%
                        seguros de que la proporción poblacional está entre {calc.Inferior} y {calc.Superior}</p> : null}
                    </div>
                </div>
            )
        case option === 6:
            return (
                <div className='data__form__container'>
                    <form onSubmit={handleSubmit} className='data__form'>
                        <input
                            type='number'
                            step='any'
                            name='P1'
                            placeholder='Proporción 1 (rho1 (P1))'
                            max={1}
                            min={0}
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            step='any'
                            name='P2'
                            placeholder='Proporción 2 (rho2 (P2))'
                            max={1}
                            min={0}
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            step='any'
                            name='n1'
                            placeholder='Muestra 1 (n1)'
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            step='any'
                            name='n2'
                            placeholder='Muestra 2 (n2)'
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            step='any'
                            name='porcentaje'
                            placeholder='Porcentaje de Confianza'
                            min={90}
                            max={99}
                            onChange={handleChange}
                        />
                        <label>
                            {`${data.alfa} (alpha)`}
                        </label>
                        <button>Calcular</button>
                    </form>
                    <div className='result__container'>
                        {calc !== null ? <p>estamos {(1 - data.alfa) * 100}%
                            seguros de que la diferencia de medias está entre {calc.Inferior} y {calc.Superior}</p> : null}
                    </div>
                </div>
            )
        case option === 7 || option === 8 || option === 9 || option === 10:
            return (
                <div className='data__form__container'>
                    <form onSubmit={handleSubmit} className='data__form'>
                        <input
                            type='number'
                            step='any'
                            name='X'
                            placeholder='Media 1 (X)'
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            step='any'
                            name='Y'
                            placeholder='Media 2 (Y)'
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            step='any'
                            name='n1'
                            placeholder='Muestra 1 (n1)'
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            step='any'
                            name='n2'
                            placeholder='Muestra 2 (n2)'
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            step='any'
                            name='s1'
                            placeholder='Varianza 1 (s1)'
                            min={0}
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            step='any'
                            name='s2'
                            placeholder='Varianza 2 (s2)'
                            min={0}
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            step='any'
                            name='porcentaje'
                            placeholder='Porcentaje de Confianza'
                            min={90}
                            max={99}
                            onChange={handleChange}
                        />
                        <label>
                            {`${data.alfa} (alpha)`}
                        </label>
                        <button>Calcular</button>
                    </form>
                    <div className='result__container'>
                        {calc !== null ? <p>estamos {(1 - data.alfa) * 100}%
                            seguros de que la varianza está entre {calc.Inferior} y {calc.Superior}</p> : null}
                    </div>
                </div>
            )
        case option === 11:
            return (
                <div className='data__form__container'>
                    <form onSubmit={handleSubmit} className='data__form'>
                        <input
                            type='number'
                            step='any'
                            name='X'
                            placeholder='Media 1 (X)'
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            step='any'
                            name='Y'
                            placeholder='Media 2 (Y)'
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            step='any'
                            name='n1'
                            placeholder='Muestra 1 (n1)'
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            step='any'
                            name='n2'
                            placeholder='Muestra 2 (n2)'
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            step='any'
                            name='s1'
                            placeholder='Varianza 1 (s1)'
                            min={0}
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            step='any'
                            name='s2'
                            placeholder='Varianza 2 (s2)'
                            min={0}
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            step='any'
                            name='porcentaje'
                            placeholder='Porcentaje de Confianza'
                            min={90}
                            max={99}
                            onChange={handleChange}
                        />
                        <label>
                            {`${data.alfa} (alpha)`}
                        </label>
                        <button>Calcular</button>
                    </form>
                    <div className='result__container'>
                        {calc !== null ? <p>estamos {(1 - data.alfa) * 100}%
                            seguros de que el intervalo para esta razón de varianzas está entre {calc.Inferior} y {calc.Superior}</p> : null}
                    </div>
                </div>
            )
        default:
            break;
    }
}
