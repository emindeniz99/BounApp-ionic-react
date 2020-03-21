import React,{useState} from "react"
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
    IonToolbar,
    IonAlert,
    IonButton,
    IonInput,
    IonToast
} from "@ionic/react"

const Asd = () => {

    const [alertstatus, setalertstatus] = useState(false)

    const [text, settext] = useState(null)

    const [counter, setcounter] = useState(10)

    React.useEffect(() => {
        counter > 0 && setTimeout(() =>{ setcounter(counter - 1)
        // setalertstatus(false) 
        // setalertstatus(true)
    }, 1000);
      }, [counter]);
    
	return(
        <>

<IonButton onClick={() => setalertstatus(true)} expand="block">Show Alert</IonButton>
        {/* <IonAlert
          isOpen={alertstatus}
          onDidDismiss={() => setalertstatus(false)}
          header={'Alert'}
          subHeader={'Subtitle'}
          message={'This is an alert message.'}
          buttons={['OK']}
        /> */}
      
      <IonInput value={text} placeholder="Enter Input" onIonChange={e => settext(e.detail.value)}></IonInput>
      <IonToast
            //   duration={2000}
        isOpen={alertstatus}
        onDidDismiss={() => setalertstatus(false)}
        message={"Click to Close, in close: "+counter}
        position="top"
        buttons={[
          {
            side: 'start',
            icon: 'star',
            text: 'Favorite',
            handler: () => {
              console.log('Favorite clicked');
            }
          },
          {
            text: 'Done',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]}        
      />
      <h1>time {counter}</h1>

        </>
    )
}

export default Asd