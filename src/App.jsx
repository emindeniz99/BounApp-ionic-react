import React, { useState, useEffect } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import {
	IonApp,
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	IonToggle
} from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import {
	ellipse,
	square,
	triangle,
	airplane,
	contrastOutline,
	moonOutline,
	moon,
	contrast,
	settingsOutline,
	restaurantOutline,
	partlySunnyOutline,
	fileTrayFullOutline,
	constructOutline

} from "ionicons/icons"
import TodayMeal from "./pages/TodayMeal"
import Weather from "./pages/Weather"
import Notes from "./pages/Notes"
import Settings from "./pages/Settings"
import Soon from "./pages/Soon"
 

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css"

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css"
import "@ionic/react/css/float-elements.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/display.css"

/* Theme variables */
import "./theme/variables.css"

// dark mode
import "./dark-mode.css"

import "./Pages.css"


const App = () => {
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem("darkMode") === "true" ? true : false
	)

	const darkModeHandler = e => {
		localStorage.setItem("darkMode", !darkMode)
		setDarkMode(!darkMode)

		console.log("darkmode",!darkMode)
	}

	useEffect(() => {
		document.body.classList.toggle("dark", darkMode)
		// console.log(window.matchMedia('(prefers-color-scheme: dark)'));
		console.log(darkMode, localStorage.getItem("darkMode"))
	}, [darkMode])

	return (
		<IonApp>
			<IonReactRouter>
				<IonTabs>
					<IonRouterOutlet>
						<Route
							path="/meal"
							component={TodayMeal}
							exact={true}
						/>
						<Route path="/weather" component={Weather} exact={true} />
						<Route path="/notes" component={Notes} exact={true} />
						<Route path="/soon" component={Soon} exact={true} />
						<Route
							path="/settings"
							render={props => (
								<Settings
									{...props}
									darkMode={darkMode}
									darkModeHandler={darkModeHandler}
								/>
							)}
						/>

						<Route
							path="/"
							// component={TodayMeal}
							render={() => <Redirect to="/meal" />}
							exact={true}
						/>
					</IonRouterOutlet>
					<IonTabBar slot="bottom">
						<IonTabButton tab="meal" href="/meal">
							<IonIcon icon={restaurantOutline} />
							<IonLabel>Yemek</IonLabel>
						</IonTabButton>
						<IonTabButton tab="weather" href="/weather">
							<IonIcon icon={partlySunnyOutline} />
							<IonLabel>Hava Durumu</IonLabel>
						</IonTabButton>
						<IonTabButton tab="notes" href="/notes">
							<IonIcon icon={fileTrayFullOutline} />
							<IonLabel>Notlar</IonLabel>
						</IonTabButton>
						<IonTabButton tab="soon" href="/soon">
							<IonIcon icon={constructOutline} />
							<IonLabel>Yakında</IonLabel>
						</IonTabButton>
						<IonTabButton tab="settings" href="/settings">
							<IonIcon icon={settingsOutline} />
							<IonLabel>Settings</IonLabel>
						</IonTabButton>
						{/* <IonTabButton  onClick={darkModeHandler} tab="tab5">
							<IonToggle
								checked={darkMode}
								
							/>
							{darkMode?<IonIcon icon={contrastOutline} />:<IonIcon icon={contrast} />   }
							<IonLabel>dark mode</IonLabel>
						</IonTabButton> */}
					</IonTabBar>
				</IonTabs>
			</IonReactRouter>
		</IonApp>
	)
}
export default App
