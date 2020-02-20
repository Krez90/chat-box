import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCsij6p2CY6eh5OgSzehecIRkNPzfEsHQ0",
  authDomain: "chatbox-app-22bda.firebaseapp.com",
  databaseURL: "https://chatbox-app-22bda.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
