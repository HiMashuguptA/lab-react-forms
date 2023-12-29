import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Forms from './Component/Forms'
import PracForm from './Component/PracForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Forms/> */}
      <PracForm/>
    </div>
  )
}

export default App
