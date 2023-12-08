import { createApp } from 'vue'
import './reset.scss'
import { router } from "@/routrer/index";
import App from './App.vue'
import Header from '@/Layout/Header/index.vue';
import Footer from '@/Layout/Footer/index.vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

createApp(App).use(ElementPlus, {locale: zhCn,}).use(router).component('Header',Header).component('Footer',Footer).mount('#app')
