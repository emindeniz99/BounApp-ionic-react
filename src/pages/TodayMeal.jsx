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

import { db, getMeal } from "../services/db"

const Tab3 = () => {
	const [dateshown, setdateshown] = useState(null)

	const [dailymealdata, setdailymealdata] = useState(null)

	useEffect(() => {
		setdateshown(new Date())
		getMeal("2020-03-24").then(d => {
			console.log("veri çekildi",d)
			setdailymealdata(d)
		})
	}, [])

	return (
		<IonPage>
			<IonHeader translucent>
				<IonToolbar>
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
							<IonText>
								Tarih seç: (select gelecek buraya)
							</IonText>
						</IonCol>
					</IonRow>
					<IonRow>
						{dailymealdata ? (
							Object.keys(dailymealdata)
								.filter(i => i !== "gun")
								.map(i => (
									<IonCol key={i} size="12" size-md="6">
										<MealBlock
											mealdata={dailymealdata[i]}
											ogunadi={i}
										></MealBlock>
									</IonCol>
								))
						) : (
							<IonCol size="12" size-md="6">
								Bugün için yemek bulunamadı.( internet bağlantınızı kontrol edin) ( Eğer
								telefonunuzun tarihi hatalıysa düzeltiniz)
							</IonCol>
						)}
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}

export default Tab3
