import { useState } from 'react'
import {AuthContextProvider, MyRoutes} from "./index"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthContextProvider>
      <MyRoutes />
    </AuthContextProvider>
    </>
  )
}

export default App
