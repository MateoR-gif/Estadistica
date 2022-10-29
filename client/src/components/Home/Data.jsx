import React, { useEffect, useState } from 'react'
import loading from '../../assets/loading.gif'
import Form from './Form'

export default function Data(props) {
    // CONSTANTE QUE GUARDA LA CONFIGURACION
    const [isConfig, setIsConfig] = useState(false)
    const [formOption, setFormOption] = useState(null)
    // CONSTANTE PARA LA OPCION DEL USUARIO
    const option = props.option

    useEffect(() => {
        setIsConfig(false)
    }, [props.señalConfig])

    const handleConfig = (option) => {
        setFormOption(option)
        setIsConfig(!isConfig)
    }
    switch (option) {
        case null:
            return (
                <div className='data__container'>
                    <img src={loading} alt='loading.gif'></img>
                </div>
            )
        case 'Media':
            return (
                <div className='data__container'>
                    <div className='title__container'>
                        <h5>
                            Intervalos de Confianza para la Media Poblacional
                        </h5>
                    </div>
                    <div>
                        {!isConfig
                            ?
                            (
                                <div>
                                    <p onClick={() => handleConfig(1)}>
                                        Población Normal y Varianza Conocida
                                    </p>
                                    <p onClick={() => handleConfig(2)}>
                                        Población Normal y Varianza Desconocida
                                    </p>
                                    <p onClick={() => handleConfig(3)}>
                                        Población Cualquiera y Varianza Desconocida
                                    </p>
                                    <p onClick={() => handleConfig(4)}>
                                        Población Cualquiera y Varianza Conocida
                                    </p>
                                </div>
                            )
                            :
                            (
                                <div className='form__container'>
                                    <Form formOption={formOption} />
                                    <p onClick={() => setIsConfig(!isConfig)}>
                                        {'<-'} Volver
                                    </p>
                                </div>

                            )
                        }
                    </div>
                </div>
            )
        case 'Proporcion':
            return (
                <div className='data__container'>
                    <div className='title__container'>
                        <h5>
                            Intervalos de Confianza para una Proporción de Población Normal. (Muestras Grandes)
                        </h5>
                    </div>
                    <div>
                        {!isConfig
                            ?
                            (
                                <div>
                                    <p onClick={() => handleConfig(5)}>
                                        Población Normal y Varianza Conocida
                                    </p>
                                </div>
                            )
                            :
                            (
                                <div className='form__container'>
                                    <Form formOption={formOption} />
                                    <p onClick={() => setIsConfig(!isConfig)}>
                                        {'<-'} Volver
                                    </p>
                                </div>
                            )
                        }
                    </div>
                </div>
            )
        case 'Diferencia':
            return (
                <div className='data__container'>
                    <div className='title__container'>
                        <h5>
                            Intervalos de Confianza para la Diferencia entre Medias de Poblaciones Normales Independientes
                        </h5>
                    </div>
                    <div>
                        {!isConfig
                            ?
                            (
                                <div>
                                    <p onClick={() => handleConfig(6)}>
                                        Varianzas Desconocidas
                                    </p>
                                    <p onClick={() => handleConfig(7)}>
                                        Varianzas Desconocidas y Población Grande (mayor o igual a 30)
                                    </p>
                                    <p onClick={() => handleConfig(8)}>
                                        Varianzas Iguales, Desconocidas y Población Pequeña (menor a 30)
                                    </p>
                                    <p onClick={() => handleConfig(9)}>
                                        Varianzas Diferentes, Desconocidas y Población Pequeña (menor a 30)
                                    </p>
                                </div>
                            )
                            :
                            (
                                <div className='form__container'>
                                    <Form formOption={formOption} />
                                    <p onClick={() => setIsConfig(!isConfig)}>
                                        {'<-'} Volver
                                    </p>
                                </div>
                            )
                        }
                    </div>
                </div>
            )
        case 'Varianza':
            return (
                <div className='data__container'>
                    <div className='title__container'>
                        <h5>
                            Intervalo de Confianza para la Varianza de Una Población Normal
                        </h5>
                    </div>
                    <div>
                        {!isConfig
                            ?
                            (
                                <div>
                                    <p onClick={() => handleConfig(10)}>
                                        Población Normal
                                    </p>
                                </div>
                            )
                            :
                            (
                                <div className='form__container'>
                                    <Form formOption={formOption} />
                                    <p onClick={() => setIsConfig(!isConfig)}>
                                        {'<-'} Volver
                                    </p>
                                </div>
                            )
                        }
                    </div>
                </div>
            )
        case 'Razon':
            return (
                <div className='data__container'>
                    <div className='title__container'>
                        <h5>
                            Intervalo de Confianza para la Razón de Varianzas de Poblaciones Normales Independientes
                        </h5>
                    </div>
                    <div>
                        {!isConfig
                            ?
                            (
                                <div>
                                    <p onClick={() => handleConfig(11)}>
                                        Poblaciones Normales Independientes
                                    </p>
                                </div>
                            )
                            :
                            (
                                <div className='form__container'>
                                    <Form formOption={formOption} />
                                    <p onClick={() => setIsConfig(!isConfig)}>
                                        {'<-'} Volver
                                    </p>
                                </div>
                            )
                        }
                    </div>
                </div>
            )
        default:
            break;
    }
}
