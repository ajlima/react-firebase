import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
	apiKey: "AIzaSyDHGQAq3HvtkyoNRc1vFAeRjC1kb91zQnc",
    authDomain: "react-firebase-ae6e5.firebaseapp.com",
    databaseURL: "https://react-firebase-ae6e5.firebaseio.com",
    projectId: "react-firebase-ae6e5",
    storageBucket: "react-firebase-ae6e5.appspot.com",
	messagingSenderId: "303503588758",
	appId: "1:303503588758:web:d909b1d41127c52b"
}

class Firebase {

	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}

	addQuote(quote) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}

		return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
			quote
		})
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

	async getCurrentUserQuote() {
		if (this.auth.currentUser) {
			const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
			return quote.get('quote')
		} else {
			return ""
		}
	}
}

export default new Firebase()