import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Admin from './components/Admin/Admin.jsx'
import User from './components/User/User.jsx'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="users" element={<User />} />
          <Route path="admins" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>
)
