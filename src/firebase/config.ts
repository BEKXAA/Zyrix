import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Replace with your actual Firebase config
  apiKey: "AIzaSyBzslBuhllS48g-jgxFVmIzrO7MHKRNErw",
  authDomain: "zyrixtrade11.firebaseapp.com",
  projectId: "zyrixtrade11",
  storageBucket: "zyrixtrade11.firebasestorage.app",
  messagingSenderId: "929825470816",
  appId: "1:929825470816:web:0216b558166040a9528605",
  measurementId: "G-WKV2DT0PDZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;