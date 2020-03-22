import React from "react"
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonButtons,
	IonBackButton,
	IonIcon,
	IonGrid,
	IonRow,
	IonCol,
	IonLabel,
	IonToggle,
	IonList,
	IonItemDivider,
	IonItem
} from "@ionic/react"
import ExploreContainer from "../components/ExploreContainer"
import {
	ellipse,
	square,
	triangle,
	pizzaOutline,
	contrast,
	contrastOutline
} from "ionicons/icons"

import BounAppLogo from "./assets/SVG/Asset1.svg"

import Camera from "./components/Camera"

import MealBlock from "./components/MealBlock"

import Weather from "./components/WeatherBlock"

const Tab3 = ({ darkMode, darkModeHandler }) => {
	return (
		<IonPage>
			<IonHeader translucent>
				<IonToolbar>
					{/* <IonButtons slot="start">
						<IonBackButton defaultHref="/" />
					</IonButtons> */}
					<IonIcon icon={BounAppLogo} />
					<IonTitle>Boun.App Yemek</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Boun.App Yemek</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonGrid fixed>
					{/* <IonRow onClick={darkModeHandler}>
						{darkMode ? (
							<IonIcon icon={contrastOutline} />
						) : (
							<IonIcon icon={contrast} />
						)}
						<IonLabel>dark mode</IonLabel>
					</IonRow> */}
					<IonRow className="ion-align-items-center">
						<IonCol className="ion-align-self-center" sizeMd="6" offsetMd="3">
							<IonList>
								<IonItemDivider>Default Toggle</IonItemDivider>
								<IonItem>
									<IonLabel>
										Checked: {JSON.stringify(darkMode)}
									</IonLabel>
									<IonToggle
										checked={darkMode}
										onIonChange={darkModeHandler}
									/>
								</IonItem>

								<IonItemDivider>Disabled Toggle</IonItemDivider>
								<IonItem>
									<IonToggle disabled />
								</IonItem>

								<IonItemDivider>Checked Toggle</IonItemDivider>
								<IonItem>
									<IonToggle checked />
								</IonItem>

								<IonItemDivider>Toggle Colors</IonItemDivider>
								<IonItem>
									<IonToggle color="primary" />
								</IonItem>
								<IonItem>
									<IonToggle color="secondary" />
								</IonItem>
								<IonItem>
									<IonToggle color="danger" />
								</IonItem>
								<IonItem>
									<IonToggle color="light" />
								</IonItem>
								<IonItem>
									<IonToggle color="dark" />
								</IonItem>

								<IonItemDivider>
									Toggles in a List
								</IonItemDivider>
								<IonItem>
									<IonLabel>Pepperoni</IonLabel>
									<IonToggle value="pepperoni" />
								</IonItem>

								<IonItem>
									<IonLabel>Sausage</IonLabel>
									<IonToggle
										value="sausage"
										disabled={true}
									/>
								</IonItem>

								<IonItem>
									<IonLabel>Mushrooms</IonLabel>
									<IonToggle value="mushrooms" />
								</IonItem>
							</IonList>
						</IonCol>
					</IonRow>
					<IonRow>
						{[0, 1, 3].map(i => (
							<IonCol key={i} size="12" size-md="6">
								<MealBlock></MealBlock>
							</IonCol>
						))}

						<IonCol size="12" size-md="6">
							ion-col
						</IonCol>
						<IonCol size="12" size-md="6">
							ion-col
						</IonCol>
						<IonCol size="12" size-md="6">
							ion-col
						</IonCol>
					</IonRow> 
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}

export default Tab3
