import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Admin from './components/Admin/Admin.jsx'
import User from './components/User/User.jsx'
import ManageUser from './components/Admin/Content/ManageUser.jsx'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import HomePage from './components/Home/HomePage.jsx'
import Dashboard from './components/Admin/Content/Dashboard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="users" element={<User />} />
          </Route>
          <Route path="admins" element={<Admin />}>
            <Route index element={<Dashboard/>} />
            <Route path='manage-users' element={<ManageUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>
)
