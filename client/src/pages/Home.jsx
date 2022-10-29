import React, { useState } from 'react'
import Data from '../components/Home/Data'
import Selector from '../components/Home/Selector'

export default function Home() {
  const [option, setOption] = useState(null)
  const [señalConfig, setSeñalConfig] = useState(false)
  const handleExtract = (data) => {
    setSeñalConfig(!señalConfig)
    setOption(data)
  }
  return (
    <div className='home__container'>
      <Selector
        className='selector__container'
        extractOption={handleExtract}
      />
      <Data
        className='data__container'
        option={option}
        señalConfig={señalConfig}
      />
    </div>
  )
}
