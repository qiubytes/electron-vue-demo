# electron-vue-demo

An Electron application with Vue and TypeScript

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
## 脚手架创建
```
npm create @quick-start/electron@latest
```
## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
### 安装路由 
```
npm install vue-router
```
- 创建两个页面
```
<!-- Home.vue -->
<template>
  <div>首页</div>
</template>

<!-- About.vue -->
<template>
  <div>关于页面</div>
</template>
```
- 配置路由（src/router/index.ts）
```
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = createRouter({
  // ⚠️ Electron 环境下务必使用 Hash 模式
  history: createWebHashHistory(),
  routes
})

export default router
```
- 在 main.ts 中注册路由
```
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```
- 在 App.vue 中添加导航和路由出口
```
<template>
  <div>
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link>
    </nav>
    <!-- 页面切换的内容会显示在这里 -->
    <router-view />
  </div>
</template>
```
## 使用ant design vue
- 清空 assets 中的 base.css main.css  ,main.ts 不引用
- 安装 ant-design-vue
```
npm install ant-design-vue
```
- 全局注册组件
```
// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

createApp(App).use(router).use(Antd).mount('#app')

```