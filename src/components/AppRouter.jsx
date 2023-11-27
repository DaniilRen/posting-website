import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../router/Routes'
import { AuthContext } from '../context'

export default function AppRouter() {
	const {isAuth} = useContext(AuthContext)
	return (
		isAuth
			? 	<Routes>
					{privateRoutes.map(route => 
						<Route path={route.path} element={route.component} key={route.path}/>
					)}
				</Routes>
				
			:	<Routes>
					{publicRoutes.map(route => 
						<Route path={route.path} element={route.component} key={route.path}/>
					)}
				</Routes>
  )
}