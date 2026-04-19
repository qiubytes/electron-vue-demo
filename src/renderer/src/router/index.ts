import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import WriteTxt from '../pages/WriteTxt.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/writetxt', component: WriteTxt },
]

const router = createRouter({
  // ⚠️ Electron 环境下务必使用 Hash 模式
  history: createWebHashHistory(),
  routes
})

export default router