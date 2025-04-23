import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import UI from '@vue-monorepo/ui'
import '@vue-monorepo/ui/dist/ui.css'

const app = createApp(App)

app.use(router)
app.use(UI)

app.mount('#app')
