/******************************************************* 
 * main.js
 * 
 * Description: The main script for the application.
 * This script initliazes firebase and vue for the
 * single-page application.
*******************************************************/
import '@babel/polyfill'
import 'mutationobserver-shim'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import firebase from 'firebase/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { globalMixin } from '@/mixins/global-mixin'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

require("firebase/auth");
require("firebase/firestore");
require('lodash')

firebase.initializeApp({
    apiKey: "AIzaSyCfqZoAkpuSBfp9n9sN3RCyHPV5wmA6cxs",
    authDomain: "ser401-project-37.firebaseapp.com",
    databaseURL: "https://ser401-project-37.firebaseio.com",
    projectId: "ser401-project-37",
    storageBucket: "ser401-project-37.appspot.com",
    messagingSenderId: "46311260060",
    appId: "1:46311260060:web:1e381fb482afc30c955259"
})

// if (location.hostname === "localhost") {
//   firebase.firestore().useEmulator("localhost", 8080);
// }

const app = createApp(App)

app.mixin(globalMixin())

app.use(router).use(store).mount('#app')

app.use(PerfectScrollbar);