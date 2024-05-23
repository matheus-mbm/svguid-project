import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import App from './App.js'
//import { Icon } from "@iconify/vue"
//import { Quasar } from 'quasar'
//import quasarLang from 'quasar/lang/pt-BR'

//import 'virtual:windi.css'
//import '@quasar/extras/material-icons/material-icons.css'
//import 'quasar/src/css/index.sass'

const app = createApp(App)
//app.component('Icon', Icon)
//app.use(Quasar, {
//    plugins: {}, // import Quasar plugins and add here
//})
app.mount('#app')
