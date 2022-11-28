import './NavBar.css'

// components
import { NavLink, Link } from 'react-router-dom'
import {
    BsSearch,
    BsHouseDoorFill,
    BsFillPersonFill,
    BsFillCameraFill,
    BsPersonFill
} from 'react-icons/bs'

// hooks
import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { logout, reset } from '../../slices/authSlice'

const NavBar = () => {
    const { auth } = useAuth()
    const { user } = useSelector(state => state.auth)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())

        navigate('/login')
    }

    return (
        <nav id="nav">
            <Link to="/" >ReactGram</Link>
            <form id='search-form'>
                <BsSearch />
                <input type="text" />
            </form>
            <ul id="nav-links">
                {auth ? (
                    <>
                        <li>
                            <NavLink to="/" >
                                <BsHouseDoorFill />
                            </NavLink>
                        </li>
                        {user && (
                            <li>
                                <NavLink to={`/users/${user._id}`} >
                                    <BsFillCameraFill />
                                </NavLink>
                            </li>
                        )}
                        <li>
                            <NavLink to='/profile' >
                                <BsFillPersonFill />
                            </NavLink>
                        </li>
                        <li>
                            <span onClick={handleLogout} >Sair</span>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <NavLink to="/login" >
                                Entrar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" >
                                Cadastrar
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default NavBar