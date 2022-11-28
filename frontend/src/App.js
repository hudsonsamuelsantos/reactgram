// styles
import './App.css';

// router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// pages
import Home from './pages/Home/Home'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import EditProfile from './pages/EditProfile/EditProfile';

// components
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

// hooks
import { useAuth } from './hooks/useAuth'

function App() {
  const { auth, loading } = useAuth()

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path='/' element={auth ? <Home /> : <Navigate to='/login' />} />
            <Route path='/profile' element={auth ? <EditProfile /> : <Navigate to='/login' />} />
            <Route path='/register' element={!auth ? <Register /> : <Navigate to='/' />} />
            <Route path='/login' element={!auth ? <Login /> : <Navigate to='/' />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
