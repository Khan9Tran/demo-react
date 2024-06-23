import './App.scss'
import Header from './components/Header/Header'
import { Outlet, Link } from 'react-router-dom'
function App() {
  return (
    <div className="app-container">
      <div className='header-container'>
        <Header/>
      </div>
      <div className='main-container'>
        <div className='side-nav-container'></div>
        <div className='content-container'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default App
