import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap"
import { initializeApp } from "firebase/app";
import  VueCookies  from 'vue-cookies';

const firebaseConfig = {
  apiKey: "AIzaSyD8rlu70CnPQNia7an3IMhcbrKJeJGAhkw",
  authDomain: "curso-vue-a2d9d.firebaseapp.com",
  projectId: "curso-vue-a2d9d",
  storageBucket: "curso-vue-a2d9d.appspot.com",
  messagingSenderId: "275079715046",
  appId: "1:275079715046:web:f2b1331c747959330fc327",
  measurementId: "G-0WE7LSKB34"
};

initializeApp(firebaseConfig);

const app =createApp(App)

app.use(router).use(VueCookies, {expires: '1d'}).mount('#app')  