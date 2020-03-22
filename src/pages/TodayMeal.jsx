import React, { useState, useEffect } from "react"
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
	IonText
} from "@ionic/react"
import ExploreContainer from "../components/ExploreContainer"
import { ellipse, square, triangle, pizzaOutline } from "ionicons/icons"

import BounAppLogo from "./assets/BounApp.svg"

import Camera from "./components/Camera"

import MealBlock from "./components/MealBlock"

import Weather from "./components/WeatherBlock"

const Tab3 = () => {
	const [dateshown, setdateshown] = useState(null)

	useEffect(() => {
		setdateshown(new Date())
	}, [])

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
					<IonRow class="ion-align-items-center">
						<IonCol size="auto">
							<IonText >sadas</IonText>
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
