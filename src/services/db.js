import firebase from  "./firebase"
const db = firebase.firestore();
console.log("firestore oluşturuldu")

const getMeal= async(tarih)=>{

    return db.collection("yenibounappapiv1").doc(tarih).get().then((doc)=>{
         // console.log(doc.data())
         return doc.data()
     })
 
 }
 
export {db,getMeal}

