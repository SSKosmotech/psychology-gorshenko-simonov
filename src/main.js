import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import '@/assets/css/reset.scss'
import '@/assets/css/hamburger.scss'
// import '@/assets/css/fonts_style.css'
import '@/assets/css/contacts.scss'
import '@/assets/css/respons.scss'

createApp(App)
    .use(router)
    .mount('#app')
