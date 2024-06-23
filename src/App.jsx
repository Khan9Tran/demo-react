import './App.scss'
import Header from './components/Header/Header'
import { Link } from 'react-router-dom'
function App() {
  return (
    <div className="App-container">
      <Header />
      <div>
        TEST LINK
      </div>
      <div>
        <button>
          <Link to={'/users'}>User page</Link>
        </button>
        <button>
          <Link to={'/admins'}>Admin page</Link>
        </button>
      </div>
    </div>
  )
}

export default App
