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
	IonItemOption,
	IonPopover,
	IonButton,
	IonImg,
	IonModal,
	IonSlides,
	IonSlide,
	IonSpinner
} from "@ionic/react"
import {
	ellipse,
	square,
	triangle,
	pizzaOutline,
	partlySunny
} from "ionicons/icons"

import Background from "../assets/oglearka.png"

// const data = {
// 	ogunisim: "Öğlen",
// 	yemekler: {
// 		corba: [
// 			{
// 				ad: "Köfte",
// 				kalori: "100 Kcal",
// 				gorsel: "https://source.unsplash.com/random/200x100"
// 			}
// 		],
// 		anayemek: [
// 			{
// 				ad: "Köfte",
// 				kalori: "100 Kcal",
// 				gorsel: "https....link"
// 			}
// 		],
// 		alternatif: [
// 			{
// 				ad: "Köfte",
// 				kalori: "100 Kcal",
// 				gorsel: "https....link"
// 			}
// 		],
// 		pilav: [
// 			{
// 				ad: "Köfte",
// 				kalori: "100 Kcal",
// 				gorsel: ""
// 			},
// 			{
// 				ad: "armut",
// 				kalori: "100 Kcal",
// 				gorsel: "https://source.unsplash.com/random"
// 			}
// 		],
// 		salata: [
// 			{
// 				ad: "elma	",
// 				kalori: "100 Kcal",
// 				gorsel: "https://source.unsplash.com/random"
// 			},
// 			{
// 				ad: "armut",
// 				gorsel: "https://source.unsplash.com/random"
// 			},
// 			{
// 				ad: "armut",
// 				kalori: "100 Kcal",
// 				gorsel: "https://source.unsplash.com/random"
// 			}
// 		]
// 	}
// }

const logomap = {
	corba: pizzaOutline,
	anayemek: pizzaOutline,
	vejeteryan: pizzaOutline,
	yardimciyemek: pizzaOutline,
	secmeli: pizzaOutline
}

const MealBlock = ({ mealdata, ogunadi }) => {
	console.log("ogun blocku:",ogunadi,mealdata)
	const [data, setdata] = useState(mealdata)

	return (
		<IonCard style={{ backgroundImage: `url(${Background})` }}>
			<IonCardHeader>
				<IonCardSubtitle>Hava durmu gösterebilir</IonCardSubtitle>
				<IonCardTitle className="ion-text-center">
					{ogunadi}
					<IonIcon icon={partlySunny}></IonIcon>
				</IonCardTitle>
			</IonCardHeader>

			<IonCardContent style={{}}>
				{/* <IonList color="primary">
			<IonListHeader lines="inset">
				<IonLabel>Trending</IonLabel>
			</IonListHeader> */}
				<IonGrid>
					{Object.keys(data).map(item => {
						// console.log(item)

						return (
							<IonRow
								style={{ marginTop: "10px" }}
								key={item}
								class="ion-justify-content-start"
							>
								{/* <IonCol> */}
								<IonCol size="auto">
									<IonItem
										size="auto"
										lines="none"
										// color="medium"
										style={{
											borderRadius: "25px"
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

								{data[item].map((subitessm, subitem) => {
									// console.log(
									// 	data.yemekler[item][subitem]
									// )
									// <IonGrid key={item + subitem}>
									// 	<IonRow>

									// <IonItem
									// 		lines="none"
									// 		color="transparent"
									// 		// href="#"
									// 		// className="ion-activated"
									// 	>
									return (
										<IonCol
											key={item + subitem}
											size="auto"
											//  className="ion-align-self-start"
											// size={
											// 	10 /
											// 	(data.yemekler[item]
											// 		.length)
											// }
										>
											<MealItem
												meal={data[item][subitem]}
											/>
										</IonCol>
									)
								})}
							</IonRow>
						)
					})}
				</IonGrid>
			</IonCardContent>
		</IonCard>
	)
}

const MealItem = ({ meal }) => {
	const mealitem = {
		isim: meal.isim,
		gorsel: "tba",
		kalori: meal.more.kalori,
		icindekiler:meal.more.icindekiler
	}
	const [showPopover, setShowPopover] = useState(false)

	const [imageloaded, setimageloaded] = useState(false)
	const [imageerror, setimageerror] = useState(false)
	return (
		<div>
			<IonPopover
				isOpen={showPopover}
				onDidDismiss={e => setShowPopover(false)}
			>
				{!imageerror && (
					<img
						alt={mealitem.isim + "Görseli"}
						onLoad={() => {
							setimageloaded(true)
							console.log("yüklendi")
						}}
						onError={() => {
							setimageerror(true)
						}}
						src={mealitem.gorsel}
					/>
				)}{" "}
				{!imageloaded && !imageerror && (
					<IonSpinner className="ion-text-center" name="crescent" />
				)}
				{imageerror && <h1>Resim yüklenemedi.</h1>}
				<h1>{mealitem.isim}</h1>
				{mealitem.icindekiler.map((s)=><h4 key={s} >{s}</h4>)}
			</IonPopover>

			{/* <IonModal
				isOpen={showPopover}
				swipeToClose={true}
				// presentingElement={pageRef.current}
				onDidDismiss={() => setShowPopover(false)}
			>
				<p>This is modal content</p>
				<IonImg src={meal.gorsel} />
				<IonButton onClick={() => setShowPopover(false)}>
					Close Modal
				</IonButton>
			</IonModal> */}
			<IonItem
				onClick={() => setShowPopover(true)}
				lines="none"
				color="light"
				style={{
					borderRadius: "25px"
					// margin: "20px"
				}}
			>
				<IonLabel
					// class="ion-text-nowrap"
					className="ion-text-wrap"
					// position="fixed"
				>
					{mealitem.isim}

					{mealitem.kalori && (
						<IonBadge
							style={{
								marginLeft: "10px"
							}}
							color="tertiary"
						>
							{mealitem.kalori}
						</IonBadge>
					)}
				</IonLabel>
			</IonItem>
		</div>
	)
}

export default MealBlock
