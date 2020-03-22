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
	IonLabel,
	IonToggle,
	IonList,
	IonItemDivider,
	IonItem,
	IonListHeader,
	IonButton,
	IonItemOption,
	IonItemOptions,
	IonItemSliding,
	IonNote,
	IonCheckbox,
	IonInput,
	IonTextarea,
	IonAlert
} from "@ionic/react"
import ExploreContainer from "../components/ExploreContainer"
import {
	ellipse,
	square,
	triangle,
	pizzaOutline,
	contrast,
	contrastOutline,
	heart,
	createOutline,
	trashOutline,
	sendOutline,
	saveOutline
} from "ionicons/icons"

import BounAppLogo from "./assets/BounApp.svg"

import Camera from "./components/Camera"

import MealBlock from "./components/MealBlock"

import Weather from "./components/WeatherBlock"

const Tab3 = () => {
	const [notes, setNotes] = useState([
		{
			note: "first note",
			lastedit: Date("Sun, 22 Mar 2020 17:48:55 GMT+3"),
			isDone: false
		}
	])

	const [newNote, setNewNote] = useState(null)

	const [alert, setAlert] = useState(false)

	useEffect(() => {
		let localnotes = JSON.parse(localStorage.getItem("notes"))

		console.log("effect çalışıyor")
		if (localnotes&&localnotes.length) setNotes(localnotes)

		return () => localStorage.setItem("notes", JSON.stringify(notes))
	}, [])

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes))
	}, [notes])

	const addNote = note => {
		let noteobj = {
			note: note,
			lastedit: new Date(),
			isDone: false
		}
		console.log(noteobj)

		setNotes(notes.concat(noteobj))
		setNewNote("")
	}

	const changeDone = id => {
		let note = notes.find(item => item.lastedit.valueOf() === id)
		let changedNote = { ...note, isDone: !note.isDone }
		setNotes(
			notes.map(item =>
				item.lastedit.valueOf() === id ? changedNote : item
			)
		)
	}
	const deleteNote = id => {
		setNotes(notes.filter(item => item.lastedit.valueOf() !== id))
	}
	const updateNote = (id, editedNote) => {
		// let note = notes.find(item => item.lastedit.valueOf() === id)
		let changedNote = { note: editedNote, lastedit: new Date(), isDone: false }
		setNotes(
			notes.map(item =>
				item.lastedit.valueOf() === id ? changedNote : item
			)
		)
	}

	return (
		<IonPage>
			<IonHeader translucent>
				<IonToolbar>
					{/* <IonButtons slot="start">
						<IonBackButton defaultHref="/" />
					</IonButtons> */}
					<IonIcon icon={BounAppLogo} />
					<IonTitle>Boun.App Notlarım</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Boun.App Notlarım</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonGrid fixed>
					{/* <IonRow onClick={darkModeHandler}>
						{darkMode ? (
							<IonIcon icon={contrastOutline} />
						) : (
							<IonIcon icon={contrast} />
						)}
						<IonLabel>dark mode</IonLabel>
					</IonRow> */}
					<IonRow className="ion-align-items-center">
						<IonCol
							className="ion-align-self-center"
							sizeMd="6"
							offsetMd="3"
						>
							{/* <IonItem lines="none">
								<h1>Notlarım</h1>
							</IonItem> */}
							<IonList>
								{/* <IonListHeader>
									<IonLabel>Notlarım</IonLabel>
								</IonListHeader> */}
								{notes.map((note, index) => (
									<Note
										key={note.lastedit.valueOf()}
										id={note.lastedit.valueOf()}
										note={note}
										changeDone={changeDone}
										deleteNote={deleteNote}
										updateNote={updateNote}
									/>
								))}
								<IonItem>
									<IonTextarea
										autofocus
										value={newNote}
										onIonChange={e =>
											setNewNote(e.detail.value)
										}
										autoGrow
										position="floating"
										placeholder="Notunuzu giriniz"
									></IonTextarea>
									<IonButton
										onClick={() => addNote(newNote)}
										size="medium"
									>
										<IonIcon
											slot="icon-only"
											icon={sendOutline}
										></IonIcon>
									</IonButton>
								</IonItem>

								<IonItem>
									<IonButton
										slot="end"
										// onClick={() => setAlert(true)}
									>
										Order by [TODO]
									</IonButton>
									<IonButton
										slot="end"
										onClick={() => setAlert(true)}
									>
										Clear
									</IonButton>
									<IonAlert
										isOpen={alert}
										onDidDismiss={() => setAlert(false)}
										header={"Tümünü Sil"}
										message={
											"Tüm notları silmek istediğine emin misin?"
										}
										buttons={[
											{
												text: "Hayır",
												role: "cancel",
												cssClass: "secondary",
												handler: blah => {
													// console.log('Confirm Cancel: blah');
												}
											},
											{
												text: "Evet, Sil",
												handler: () => {
													setNotes([])
												}
											}
										]}
									/>
								</IonItem>
							</IonList>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}

const Note = ({ note, changeDone, id, deleteNote, updateNote }) => {
	console.log(note);
	const [editedNote, setEditedNote] = useState(note.note)
	const [editMode, setEditMode] = useState(false)

	return (
		<>
			{/* Multi-line sliding item with icon options on both sides */}

			{editMode ? (
				<IonItem>
					<IonTextarea
						autofocus
						value={editedNote}
						onIonChange={e => setEditedNote(e.detail.value)}
						autoGrow
						position="floating"
						placeholder="Notunuzu giriniz"
					></IonTextarea>
					<IonButton
						onClick={() => {
							updateNote(id, editedNote)
							setEditMode(false)
						}}
						size="medium"
					>
						<IonIcon slot="icon-only" icon={saveOutline}></IonIcon>
					</IonButton>
				</IonItem>
			) : (
				<IonItemSliding>
					<IonItem>
						<IonCheckbox
							color="tertiary"
							checked={note.isDone}
							slot="start"
							onIonChange={() => changeDone(id)}
						></IonCheckbox>
						<IonLabel class="ion-text-wrap">
							<h2
								style={{
									whiteSpace: "pre-line",
									textDecoration: note.isDone
										? "line-through"
										: ""
								}}
							>
								{note.note}
							</h2>
							<p>Last Edit:{new Date(note.lastedit).toLocaleString()}</p>
							{/* <p>A new message in your network</p>
						<p>Oceanic Next has joined your network</p> */}
						</IonLabel>
						{/* <IonNote slot="end">10:45 AM</IonNote> */}
					</IonItem>

					<IonItemOptions side="start">
						<IonItemOption onClick={() => setEditMode(true)}>
							<IonIcon
								slot="icon-only"
								icon={createOutline}
							></IonIcon>
						</IonItemOption>
					</IonItemOptions>

					<IonItemOptions side="end">
						<IonItemOption color="light">
							<IonIcon
								slot="icon-only"
								icon={createOutline}
							></IonIcon>
						</IonItemOption>
						<IonItemOption
							onClick={() => deleteNote(id)}
							color="danger"
						>
							<IonIcon
								slot="icon-only"
								icon={trashOutline}
							></IonIcon>
						</IonItemOption>
					</IonItemOptions>
				</IonItemSliding>
			)}
		</>
	)
}

export default Tab3
