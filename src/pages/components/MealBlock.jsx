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
	IonBadge,
	IonListHeader,
	IonItemSliding,
	IonItemOptions,
	IonItemOption
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
		<IonCard style={{ backgroundImage: `url(${Background})` }}>
			<IonCardHeader>
				<IonCardSubtitle>Hava durmu gösterebilir</IonCardSubtitle>
				<IonCardTitle className="ion-text-center">
					{data.ogunisim}
					<IonIcon icon={partlySunny}></IonIcon>
				</IonCardTitle>
			</IonCardHeader>

			<IonCardContent style={{}}>
				{/* <IonList color="primary">
			<IonListHeader lines="inset">
				<IonLabel>Trending</IonLabel>
			</IonListHeader> */}
				<IonGrid>
					{Object.keys(data.yemekler).map(item => {
						console.log(item)

						return (
							<IonRow class="ion-justify-content-start"

							>
								{/* <IonCol> */}
								<IonCol size="auto">
									<IonItem
									size="auto"
										lines="none"
										// color="medium"
										style={{
											borderRadius: "25px",
											// margin: "20px"
										}}
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

											// <IonItem
											// 		lines="none"
											// 		color="transparent"
											// 		// href="#"
											// 		// className="ion-activated"
											// 	>

											<IonCol size="auto"
											//  className="ion-align-self-start"
											// size={
											// 	10 /
											// 	(data.yemekler[item]
											// 		.length)
											// }
											>
												<IonItem
													lines="none"
													color="light"
													style={{
														borderRadius: "25px",
														// margin: "20px"
													}}
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
															<IonBadge style={{marginLeft:"10px"}} color="tertiary">
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
											// </IonRow>
											// </IonGrid>
										)
									}
								)}
								{/* </IonCol> */}
								{/* </IonItem> */}
							</IonRow>
						)
					})}
				</IonGrid>
				{/* </IonList> */}
			</IonCardContent>
		</IonCard>
	)
}

export default MealBlock
