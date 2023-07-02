import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD8rlu70CnPQNia7an3IMhcbrKJeJGAhkw",
  authDomain: "curso-vue-a2d9d.firebaseapp.com",
  projectId: "curso-vue-a2d9d",
  storageBucket: "curso-vue-a2d9d.appspot.com",
  messagingSenderId: "275079715046",
  appId: "1:275079715046:web:f2b1331c747959330fc327",
  measurementId: "G-0WE7LSKB34"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
createApp(App).use(router).mount('#app')
