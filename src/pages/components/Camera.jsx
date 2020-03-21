import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonButton,
    IonIcon
} from "@ionic/react"
import React, { useState } from "react"
import { Plugins, CameraResultType } from "@capacitor/core"

const Camera = () => {
	const { Camera } = Plugins
	const [photo, setPhoto] = useState()
	const takePhoto = async () => {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: true,
            resultType: CameraResultType.Uri,
            saveToGallery:true
		})
		setPhoto(image.webPath)
	}
	return (<>
		{/* <IonContent className="ion-padding"> */}
			<img src={photo} />
			<IonButton onClick={takePhoto}>Take Photo</IonButton>
          
		 {/* </IonContent> */}
	</>)
}

export default Camera
