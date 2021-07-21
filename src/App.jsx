/* 
 * Copyright Hillstone Finance - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Jasper Lee <dev@hillstone.finance>, July 2021
 */

import "./App.css"
import Header from './component/Header'
import Overlap from './component/Overlap'
import Deposit from './component/Deposit'
import { ThemeProvider } from './component/themeContext'

import { Route, Redirect, Switch } from "react-router-dom";

export default function App() {
	return (
		<ThemeProvider>
			<Overlap />
			<div className="absolute z-20 w-screen">
				<Header />
				<Switch>
					<Route exact path="/"> <Redirect to="/deposit/all" /> </Route>
					<Route exact path="/deposit/all" component={Deposit} />
					<Route exact path="/deposit/mypage" component={Deposit} />
					<Redirect from="*" to="/" />
				</Switch>
			</div>
		</ThemeProvider>
 	)
}