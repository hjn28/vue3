// 统一管理用户相关的接口
import request from '@/utils/request'
import type { loginForm, loginResponseData } from './type'
// 统一管理接口 枚举
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}
// 暴露请求函数
// 登录接口方法 <any,loginResponseData> 第一个请求体类型，第二个是响应体类型  any无意义，只是给第二次参数占位
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)
// 获取用户信息接口方法
export const reqUserInfo = () => request.get(API.USERINFO_URL)
