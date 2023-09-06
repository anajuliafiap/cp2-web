import './App.css'
import { Outlet } from 'react-router-dom'
import Rodape from './componentes/Rodape.jsx'
import Menu from './componentes/Menu.jsx'

function App() {

  return ( 
  <>
    <Menu />
    <Outlet />
    <Rodape/>
  </>
  )
}

export default App
