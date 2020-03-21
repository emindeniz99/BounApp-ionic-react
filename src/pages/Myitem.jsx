import React, { useState } from "react"
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonAlert,
	IonButton,
	IonInput,
	IonToast,
	IonRow,
  IonCol,
  IonGrid
} from "@ionic/react"

const Asd = () => {
	return (
		<>
			<IonGrid fixed>
				<IonRow>
					<IonCol size="12"  size-md="6" >ion-col</IonCol>
					<IonCol size="12" size-md="6" >ion-col</IonCol>
					<IonCol size="12" size-md="6"  >ion-col</IonCol>
					<IonCol size="12" size-md="6"  >ion-col</IonCol>
				</IonRow>

				
			</IonGrid>
		</>
	)
}

export default Asd
