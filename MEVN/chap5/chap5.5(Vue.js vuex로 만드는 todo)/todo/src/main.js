import { createApp } from 'vue'
import App from './App.vue'
import 'material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.json'
import store from './store'
import router from './router'

createApp(App)
.use(router)
.use(store).mount('#app')
