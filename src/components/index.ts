// 引入全局组件
import { App } from 'vue';
import SvgIcon from './Svg.vue'
// 全局对象
const allGlobalComponent = {SvgIcon}
export default {
  // 使用install方法
  install(app: App) {
    console.log(allGlobalComponent);
    // 注册项目的全局组件
    Object.keys(allGlobalComponent).forEach(key => {
      console.log(key);
      // 注册为全局组件
      app.use(key, allGlobalComponent[key])
    })
  }
}