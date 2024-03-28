import { createApp } from 'vue'
import App from '@/App.vue'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 获取应用实例对象
const app = createApp(App)
// 将应用挂载到挂载点上
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')
