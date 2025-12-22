import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store'
import Register from './pages/auth/register/Register'
import Login from './pages/auth/login/Login'
import Home from './pages/home/Home'

function App() {

  return (
   <Provider store={store}>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
       <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
    </Routes>
    </BrowserRouter>
   </Provider>
  )
}

export default App
