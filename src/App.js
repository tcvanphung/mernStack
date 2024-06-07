
import React, { Fragment } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './redux/slices/counterSlice'
// import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'

function App() {
	return (
		<div>
			<Router>
				<Routes>
					{routes.map((route) => {
						const Page = route.page
						const Layout = route.isShowHeader ? DefaultComponent : Fragment
						return (
							<Route key={route.path} path={route.path} element={
								<Layout>
									<Page />
								</Layout>
							} />
						)
					})}
				</Routes>
			</Router>

		</div>
	)
}

export default App;
