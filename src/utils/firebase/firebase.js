import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBh-hGMnKM8WK_tnKnFV1ACGV8S5qK7NTw',
  authDomain: 'quicktask-c79ef.firebaseapp.com',
  projectId: 'quicktask-c79ef',
  storageBucket: 'quicktask-c79ef.appspot.com',
  messagingSenderId: '103757904688',
  appId: '1:103757904688:web:b900c3f900cdda9bfb26f5',
  measurementId: 'G-BZWSCLGT0S',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
