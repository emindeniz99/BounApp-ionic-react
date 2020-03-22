import React, { useEffect, useState } from "react"
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

const Weather = () => {
	const [weather, setweather] = useState({})
	// weather.dataseries[0]-> init day 6 am
	// weather.dataseries[1]-> init day 9 am
	// weather.dataseries[x]-> (init+((x+2)/8  ) day ((x+2)%8)*3 am


    const getwet=(date)=>{

        let today=new Date().getDate()
        //  (date.day-today)*8-2
        console.log(today.getDate())
        // weather.dataseries[]
    }

    const WT=()=>{
        let arr=[]
        let today=new Date().getDate()
        if(!weather.dataseries) return <h1>yükleniyor</h1>
        for(let i=0;i<weather.dataseries.length;i++){
            let datum= weather.dataseries[i]
            arr.push(<IonRow key={i}>
                {today+Math.floor((i+2)/8) + " gün "+ ((i+2)%8)*3 + "saat "} 
                --> C: {datum.temp2m}
                W: { datum.weather}

            </IonRow>)
        }

        return arr
    }

	useEffect(() => {
		fetch(
			"https://cors-anywhere.herokuapp.com/http://www.7timer.info/bin/civil.php?lon=29.046808&lat=41.085228&ac=0&unit=metric&output=json&tzshift=0"
		)
			.then(d => d.json())
			.then(data => {
				console.log(data)
                setweather(data)
                // getwet()
			})

	},[])
	return <>
    
    <WT></WT>
    
    </>
}

export default Weather