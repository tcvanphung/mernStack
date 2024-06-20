
import React, { Fragment, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './redux/slices/counterSlice'
// import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
// import axios from 'axios'
import { useEffect } from 'react'
// import { useQuery } from '@tanstack/react-query'
import { isJsonString } from './utils'
import { jwtDecode } from 'jwt-decode'
import * as UserService from './services/UserService'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from './redux/slices/userSlide'
import Loading from './components/LoadingComponent/Loading'


function App() {
	const dispatch = useDispatch()
	const [isLoading, setIsLoading] = useState(false)
	const user = useSelector((state) => state.user)


	useEffect(() => {
		setIsLoading(true)
		const { storageData, decoded } = handleDecoded()
		if (decoded?.id) {
			handleGetDetailsUser(decoded?.id, storageData)
		}
	}, [])

	const handleDecoded = () => {
		let storageData = localStorage.getItem('access_token')
		let decoded = {}
		if (storageData && isJsonString(storageData)) {
			storageData = JSON.parse(storageData)
			decoded = jwtDecode(storageData);
		}
		return { decoded, storageData }
	}

	UserService.axiosJWT.interceptors.request.use(async (config) => {
		const currentTime = new Date()
		const { decoded } = handleDecoded()
		if (decoded?.exp < currentTime.getTime() / 1000) {
			const data = await UserService.refreshToken()
			config.headers['token'] = `Bearer ${data?.access_token}`
		}
		return config;
	}, function (error) {
		return Promise.reject(error);
	});

	const handleGetDetailsUser = async (id, token) => {
		const res = await UserService.getDetailsUser(id, token)
		dispatch(updateUser({ ...res?.data, access_token: token }))
		setIsLoading(false)
	}



	return (
		<div>
			<Loading isPending={isLoading}>
				<Router>
					<Routes>
						{routes.map((route) => {
							const Page = route.page
							const ischeckAuth = !route.isPrivate || user.isAdmin
							const Layout = route.isShowHeader ? DefaultComponent : Fragment
							return (
								<Route key={route.path} path={ischeckAuth ? route.path : undefined} element={
									<Layout>
										<Page />
									</Layout>
								} />
							)
						})}
					</Routes>
				</Router>
			</Loading>
		</div>
	)
}

export default App;
