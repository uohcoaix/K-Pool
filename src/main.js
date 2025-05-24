import { createApp } from "vue";
import App from "./App.vue";
import 'virtual:uno.css'
import '@unocss/reset/eric-meyer.css'
import { pinia } from "@/stores";
import router from "@/router"; // 引入路由
import { Window } from '@tauri-apps/api/window';

createApp(App)
    .use(pinia)
    .use(router) // 使用路由
    .mount("#app");

const appWindow = new Window('main');

// 应用启动时进入全屏模式
// window.addEventListener('DOMContentLoaded', () => {
//     setTimeout(async () => {
//         await appWindow.maximize();
//     }, 100);
// });

document
    .getElementById('titlebar-minimize')
    ?.addEventListener('click', () => appWindow.minimize());
document
    .getElementById('titlebar-maximize')
    ?.addEventListener('click', () => appWindow.toggleMaximize());
document
    .getElementById('titlebar-close')
    ?.addEventListener('click', () => {
        appWindow.close()
    });
