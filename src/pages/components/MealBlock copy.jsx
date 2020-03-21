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
	IonCard,
	IonItem,
	IonLabel,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonCardContent,
	IonList,
	IonNote,
	IonText,
	IonBadge
} from "@ionic/react"
import {
	ellipse,
	square,
	triangle,
	pizzaOutline,
	partlySunny
} from "ionicons/icons"

import Background from "../assets/oglearka.png"

const data = {
	ogunisim: "Öğlen",
	yemekler: {
		corba: [
			{
				ad: "Köfte",
				kalori: "100 Kcal",
				gorsel: "https....link"
			}
		],
		anayemek: [
			{
				ad: "Köfte",
				kalori: "100 Kcal",
				gorsel: "https....link"
			}
		],
		alternatif: [
			{
				ad: "Köfte",
				kalori: "100 Kcal",
				gorsel: "https....link"
			}
		],
		pilav: [
			{
				ad: "Köfte",
				kalori: "100 Kcal",
				gorsel: "https....link"
			},
			{
				ad: "armut",
				kalori: "100 Kcal",
				gorsel: "https....link"
			}
		],
		salata: [
			{
				ad: "elma	",
				kalori: "100 Kcal",
				gorsel: "https....link"
			},
			{
				ad: "armut",
				gorsel: "https....link"
			},
			{
				ad: "armut",
				kalori: "100 Kcal",
				gorsel: "https....link"
			}
		]
	}
}

const logomap = {
	corba: pizzaOutline,
	anayemek: pizzaOutline,
	alternatif: pizzaOutline,
	pilav: pizzaOutline,
	salata: pizzaOutline
}

const MealBlock = () => {
	return (
		<IonCard
		
		style={{ backgroundImage: `url(${Background})` }}
		
		>
			<IonCardHeader>
				<IonCardSubtitle>Hava durmu gösterebilir</IonCardSubtitle>
				<IonCardTitle className="ion-text-center">
					{data.ogunisim}
					<IonIcon icon={partlySunny}></IonIcon>
				</IonCardTitle>
			</IonCardHeader>

			<IonCardContent>
				{/* <IonList color="transparent"> */}

				{Object.keys(data.yemekler).map(item => {
					console.log(item)

					return (
						<IonGrid key={item}>
							<IonRow

							// className="ion-align-items-start"
							>
								{/* <IonCol> */}

								<IonCol size="auto">

								<IonItem
									lines="none"
									color="transparent"
									// href="#"
									// className="ion-activated"
								>
									<IonIcon
										icon={logomap[item]}
										// slot="start"
									/>
								</IonItem>

								</IonCol>

								{data.yemekler[item].map(
									(subitessm, subitem) => {
										console.log(
											data.yemekler[item][subitem]
										)
										return (
											// <IonGrid key={item + subitem}>
											// 	<IonRow>
											<IonCol
											//  className="ion-align-self-start"
											// size={
											// 	10 /
											// 	(data.yemekler[item]
											// 		.length)
											// }
											size="auto"
											>
												<IonItem
													lines="none"
													color="transparent"
													// href="#"
													// className="ion-activated"
												>
													<IonLabel

													// class="ion-text-nowrap"
													// className="ion-text-wrap"
													// position="fixed"
													>
														{
															data.yemekler[item][
																subitem
															].ad
														}

														{data.yemekler[item][
															subitem
														].kalori && (
															<IonBadge color="tertiary">
																{
																	data
																		.yemekler[
																		item
																	][subitem]
																		.kalori
																}
															</IonBadge>
														)}
													</IonLabel>
												</IonItem>
											</IonCol>
											// 	</IonRow>
											// </IonGrid>
										)
									}
								)}
								{/* </IonCol> */}
							</IonRow>
						</IonGrid>
					)
				})}
				{/* </IonList> */}
			</IonCardContent>
		</IonCard>
	)
}

export default MealBlock
