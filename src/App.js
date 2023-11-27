import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/UI/Navbar/Navbar'
import AppRouter from './components/AppRouter'
import './styles/App.css'
import { AuthContext } from './context'

export default function App() {
	const [isAuth, setIsAuth] = useState(false)

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true)
		}
	}, [])

	return (
		<AuthContext.Provider value = {{
			isAuth,
			setIsAuth
		}}>
			<BrowserRouter>
				<Navbar/>
				<AppRouter/>
			</BrowserRouter>
		</AuthContext.Provider>
	)
}