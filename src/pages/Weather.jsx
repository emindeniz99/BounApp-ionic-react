import React, { useState } from "react"
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
	IonItem,
	IonListHeader,
	IonButton
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

import BounAppLogo from "./assets/BounApp.svg"

import Camera from "./components/Camera"

import MealBlock from "./components/MealBlock"

import Weather from "./components/WeatherBlock"

const Tab3 = ({ darkMode, darkModeHandler }) => {
	const [comingsoonlist, setcomingsoonlist] = useState([
		"SineBU",
		"New Hall Çatı Yemek",
		"Etkinlikler",
		"Kısayollar",
		"İletişim",
		"Chat",
		"Notes",
		"Aylık Yemek Listesi",
		"Takvim",
		"Kahvaltı",
		"Hesap oluşturma",
		"Kilyos Özel Bölümü",
		"Otobüs Saatleri"
	])

	return (
		<IonPage>
			<IonHeader translucent>
				<IonToolbar>
					{/* <IonButtons slot="start">
						<IonBackButton defaultHref="/" />
					</IonButtons> */}
					<IonIcon icon={BounAppLogo} />
					<IonTitle>Boun.App</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Boun.App</IonTitle>
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
						<IonCol
							className="ion-align-self-center"
							sizeMd="6"
							offsetMd="3"
						>
							<IonItem lines="none">
								<h1>Yeni özellikler pek yakında</h1>
							</IonItem>
							<IonList>
								<IonListHeader>
									<IonLabel>Çok Yakındakiler</IonLabel>
								</IonListHeader>
								
									<IonItem>
										<IonLabel>gg</IonLabel>
									</IonItem>
							
							</IonList>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}

export default Tab3
