import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDeEr7iJUmqW-pK55HSDwM_RHanJOg8OKM",
  authDomain: "portfolio-b2149.firebaseapp.com",
  projectId: "portfolio-b2149",
  storageBucket: "portfolio-b2149.appspot.com",
  messagingSenderId: "945087199230",
  appId: "1:945087199230:web:c22dab0ca8c0b77bc9f2af",
  measurementId: "G-WB9N6WK28Q"
};

const app = initializeApp(firebaseConfig);

const isGaSupported = isSupported();

const analytics = isGaSupported ? getAnalytics(app) : null;

export const logGa = (eventName, eventParams = {}) => {
  isGaSupported ? logEvent(analytics, eventName, eventParams) : console.log(eventName, eventParams);
};
