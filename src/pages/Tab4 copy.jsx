import React from "react"
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton
} from "@ionic/react"
import ExploreContainer from "../components/ExploreContainer"
import "./Tab3.css"

const Tab3 = () => {
	return (
		<IonPage>
			<IonHeader  translucent>
				<IonToolbar>
					{/* <IonButtons slot="start">
						<IonBackButton defaultHref="/" />
					</IonButtons> */}

					<IonTitle>Tab ss3</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Taddb 3</IonTitle>
					</IonToolbar>
				</IonHeader>

				<h1>
					Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
					metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
					hurufat numune kitabı oluşturmak üzere bir yazı galerisini
					alarak karıştırdığı 1500'lerden beri endüstri standardı
					sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca
					varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden
					elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum
					pasajları da içeren Letraset yapraklarının yayınlanması ile
					ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri
					içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
					Neden Kullanırız? Yinelenen bir sayfa içeriğinin okuyucunun
					dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum
					kullanmanın amacı, sürekli 'buraya metin gelecek, buraya
					metin gelecek' yazmaya kıyasla daha dengeli bir harf
					dağılımı sağlayarak okunurluğu artırmasıdır. Şu anda birçok
					masaüstü yayıncılık paketi ve web sayfa düzenleyicisi,
					varsayılan mıgır metinler olarak Lorem Ipsum kullanmaktadır.
					Ayrıca arama motorlarında 'lorem ipsum' anahtar sözcükleri
					ile arama yapıldığında henüz tasarım aşamasında olan çok
					sayıda site listelenir. Yıllar içinde, bazen kazara, bazen
					bilinçli olarak (örneğin mizah katılarak), çeşitli sürümleri
					geliştirilmiştir. Nereden Gelir? Yaygın inancın tersine,
					Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45
					tarihinden bu yana klasik Latin edebiyatına kadar uzanan
					2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney
					College'dan Latince profesörü Richard McClintock, bir Lorem
					Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden
					biri olan 'consectetur' sözcüğünün klasik edebiyattaki
					örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm
					Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan "de
					Finibus Bonorum et Malorum" (İyi ve Kötünün Uç Sınırları)
					eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden
					gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve
					Rönesans döneminde çok popüler olmuştur. Lorem Ipsum
					pasajının ilk satırı olan "Lorem ipsum dolor sit amet"
					1.10.32 sayılı bölümdeki bir satırdan gelmektedir.
				</h1>
			</IonContent>
		</IonPage>
	)
}

export default Tab3
