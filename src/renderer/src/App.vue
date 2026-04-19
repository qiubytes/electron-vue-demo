<script setup lang="ts">
import { h, ref } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { MenuProps } from 'ant-design-vue';
import Versions from './components/Versions.vue'
import { useRouter } from 'vue-router'
// 获取路由实例
const router = useRouter();

const current = ref<string[]>(['mail']);
const items = ref<MenuProps['items']>([
  {
    key: 'home',
    icon: () => h(MailOutlined),
    label: '首页',
    title: '首页',
  },
  {
    key: 'writetxt',
    icon: () => h(AppstoreOutlined),
    label: '写入文件测试',
    title: '写入文件测试',
  },
  {
    key: 'about',
    icon: () => h(AppstoreOutlined),
    label: '关于',
    title: '关于',
  },
  {
    key: 'sub1',
    icon: () => h(SettingOutlined),
    label: '其它',
    title: '其它',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  }
]);




const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');

//按钮点击跳转
const menuClick = (item) => {
  console.log(item);
  switch (item.key) {
    case "home":
      router.push("/");
      break;
    case "about":
      router.push("/about")
      break;
    case "writetxt":
      router.push("/writetxt");
      break;
  }
}
</script>

<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" @click="menuClick" />
  <router-view /> <!-- 页面切换的内容会显示在这里 -->
  <!-- <div>
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link>
    </nav> 
  </div>  -->
  <div class="creator">Powered by electron-vite</div>
  <div class="actions">
    <div class="action">
      <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">Documentation</a>
    </div>
    <div class="action">
      <a target="_blank" rel="noreferrer" @click="ipcHandle">Send IPC</a>
    </div>
  </div>
  <Versions />
</template>
