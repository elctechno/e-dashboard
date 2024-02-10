import '@/assets/scss/main.scss'
import {Icon}  from '@iconify/vue'
import { createApp } from 'vue'
import App from './App.vue'
import dayjs from 'dayjs'
const myApp = createApp(App)

myApp.component('Icon', Icon)
myApp.component('dayjs', dayjs)

myApp.mount('#app')
