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
	IonCol
} from "@ionic/react"
import ExploreContainer from "../components/ExploreContainer"
import "./Tab3.css"
import { ellipse, square, triangle, pizzaOutline } from "ionicons/icons"

import BounAppLogo from "./assets/SVG/Asset1.svg"

import Camera from "./components/Camera"

import MealBlock from "./components/MealBlock"

const Tab3 = () => {
	return (
		<IonPage>
			<IonHeader translucent>
				<IonToolbar>
					{/* <IonButtons slot="start">
						<IonBackButton defaultHref="/" />
					</IonButtons> */}
					<IonIcon  icon={BounAppLogo} />
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
