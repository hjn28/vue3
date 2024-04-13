import { createApp } from 'vue'
import App from '@/App.vue'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import axios from 'axios'

// 接口测试
// axios({
//   url: '/api/user/login',
//   method: 'post',
//   data: {
//     username: 'admin',
//     password: '111111',
//   },
// })

// 获取应用实例对象
const app = createApp(App)
// 将应用挂载到挂载点上
app.use(ElementPlus, {
  locale: zhCn,
})

//svg插件需要配置代码
import 'virtual:svg-icons-register'

// 引入自定义插件对象；注册整个项目的全局组件
import GlobalComponent from '@/components'
// 安装自定义插件
app.use(GlobalComponent)

app.mount('#app')
