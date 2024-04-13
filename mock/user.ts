// 用户信息数据
function createUserList() {
  return [
    {
      userId: 1,
      avatar: '123',
      username: 'admin',
      password: '111111',
      desc: '平台管理员',
      roles: ['平台管理员'],
      buttons: ['curse.detail'],
      routes: ['home'],
      token: 'Admin Token',
    },
    {
      userId: 2,
      avatar: '123',
      username: 'system',
      password: '111111',
      desc: '系统管理员',
      roles: ['系统管理员'],
      buttons: ['curse.detail'],
      routes: ['home'],
      token: 'System Token',
    },
  ]
}

//对外暴露一个数组：数组中包含连个接口
export default [
  // 用户登录接口
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      // 获取请求体携带过来的用户名与密码
      const { username, password } = body
      // 调用获取用户信息函数，用于判断是否有此用户
      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password,
      )
      // 没有用户返回返回失败信息
      if (!checkUser) {
        return { code: 201, data: { message: '账号或者密码不正确' } }
      }
      // 如果又返回成功信息
      const { token } = checkUser
      return { code: 200, data: { token } }
    },
  },
  // 获取用户信息
  {
    url: '/api/user/info',
    method: 'get',
    response: (request) => {
      // 获取请求头携带token
      const token = request.headers.token
      // 查看用户信息是否包含有次token用户
      const checkUser = createUserList().find((item) => item.token === token)
      // 没有返回失败信息
      if (!checkUser) {
        return { code: 201, data: { message: '获取用户信息失败' } }
      }
      // 有返回成功信息
      return { code: 200, data: { checkUser } }
    },
  },
]
