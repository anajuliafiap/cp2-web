import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './componentes/Menu.jsx'
import Rodape from './componentes/Rodape.jsx'


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
