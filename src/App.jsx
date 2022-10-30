import { useState } from 'react'
import CheckBox from '../components/CheckBox'

function App() {
  const [indicators, setIndicators] = useState({
    rsi: false,
    zscors: false,
    ema100: false,
    em20: false
  })
  const [strt, setStrt] = useState('')

  const handleIndicators = (e) => {
    setIndicators((current) => {
      return { ...current, [e.target.id]: !current[e.target.id] }
    })
  }

  const handleStrategy = (strtSelected) => {
    if (strt === strtSelected) return setStrt('')
    setStrt(strtSelected)
  }

  return (
    <div className='max-w-7xl mx-auto  p-10 text-gray-900'>
      {/* TOP */}
      <div className='flex justify-between'>
        {/* indicators */}
        <div>
          <h1 className='text-2xl font-bold'>Select Indicators</h1>
          <div className='py-2' />
          <CheckBox
            title={'rsi'}
            isChecked={indicators.rsi}
            onChange={handleIndicators}
          />
          <CheckBox
            title={'zscors'}
            isChecked={indicators.zscors}
            onChange={handleIndicators}
          />
          <CheckBox
            title={'ema100'}
            isChecked={indicators.ema100}
            onChange={handleIndicators}
          />
          <CheckBox
            title={'em20'}
            isChecked={indicators.em20}
            onChange={handleIndicators}
          />
        </div>
        {/* strategy */}
        <div>
          <h1 className='text-2xl font-bold'>Select Strategy</h1>
          <div className='py-2' />
          <CheckBox
            title={'base strategy'}
            isChecked={strt === 'base' ? true : false}
            onChange={() => handleStrategy('base')}
          />
          <CheckBox
            title={'lstm'}
            isChecked={strt === 'lstm' ? true : false}
            onChange={() => handleStrategy('lstm')}
          />
          <CheckBox
            title={'dqn'}
            isChecked={strt === 'dqn' ? true : false}
            onChange={() => handleStrategy('dqn')}
          />
        </div>
      </div>
      {/* BOTTOM */}
      <div className='flex flex-col  gap-4 justify-center items-center'>
        <button
          type='button'
          className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'>
          Back Test
        </button>
        <div className='w-full flex gap-4 '>
          <div className='border border-gray-900 basis-1/2 h-44'></div>
          <div className='border border-gray-900 basis-1/2 h-44'></div>
        </div>
      </div>
    </div>
  )
}

export default App
