目前开发进度：

静态页面的基础完成，涉及到一些页面的补充完善。

任务：

胡家能：实现了侧边栏切换的实现，iframe布局的调试，

​		目前在进行登录功能的联调，tab页当中的进行tab的添加测试

连茹欣：实现了首页内容区域的展示，搜索框的添加

​		目前在进行的是整合一下侧边栏传数据，里面的拼接

宋浩楠：实现了首页头部区域的展示，大部分的样式整理，

​		目前在进行的是tab切换时被选取的tab单个状态的样式改动



# 待完善的功能

```js
表格的边框设计 根据ui走
登录框 ：点击其他状态隐藏

```

# 需要完成的

```js

1、组件的封装，通过npm传到npm官网，可供下载，并下载测试；
2、通过webpack进行代码的压缩处理，实现npm上传和下载；
3、crypto和worker进行数据安全的处理；
4、在封装组件时，出现所需要的依赖包应该要自行安装，但未安装成功，需要全局注册;
```

临时复制/粘贴

```js
1、修改了侧淡蓝展开和收缩对搜索输入框的可否点击事件的触发；
2、书写了对于respose返回的数据，进行多层嵌套的数据，取最后一个data的数据；
Bus事件的解绑；

1、更改导航栏的指针样式；
2、优化用户的个人操作界面当中的点击其他操作；
3、熟悉vue组件，自定义开发指令；
4、维护门户功能；

1、熟悉sword框架，实现表单提交，表格初始化，下拉树，弹框的案例；

1、处理预生产总局待办事宜数据未加载问题；
2、排查sword项目上表单当中的禁用使用不生效问题；


1、消息 推一版；
2、业务卡片替换
3、我的功能 点击跳转，进行地址为空 判断
4、配置文件处理



1、自定义有空白允许添加 拖拽忽略此问题；
2、支持拖拽
3、超出边界 禁止保存

一户式调用的 使用位置：
1、登录时 登录接口
2、退出时 退出接口
3、身份切换 空白页调一次一户式退出接口
4、进入之后先调一次退出接口 、 进入时在请求一次登录接口


1、消息接口替换
2、拖拽

```

#### 日报计划：

```js
12/11
ie8、ie9浏览器调整为跳转到金三，代码接口优化处理
12/12
门户引入外部卡片，讨论规范
12/13
进行ie11、ie10样式调整

```



```js
税收优惠概览优化以及内控内生化消息提醒模板更新(样例)
需求/问题/用例编号：无
需求/问题来源：内部联调测试发现
修改内容： 
【问题简述】税收优惠概览优化以及内控内生化消息提醒模板更新。
【调整内容】税收优惠概览优化以及内控内生化消息提醒模板更新。
【期望结果】实现需求。
所涉及的应用：nsrgl-service，nsrgl-web
关联系统影响：无
集成服务变更：税收优惠概览优化以及内控内生化消息提醒模板更新。
数据模型变更：无
测试用例变更：无
系统参数变更：无
数据推送或初始化：无
其他：无 

zhswjg-service：
zhswjg-ctrl：
zhswjg-web：
sjfn-service:
skzs-web:master-pro-20240127-144818
skzs-ctrl:master-pro-20240127-092819
skzs-service:master-pro-20240131-094000

mh-service-jd:master-20240124-144259
mh-service-jd：master-20240130-195103
mh-ctrl-jd:master-20240120-161342
mh-ctrl-jd:master-20240124-144259
mh-ctrl-jd：master-20240130-194358
mh-front-jd-web:master-20240120-170337
mh-front-jd-web:master-20240124-150400
mh-front-jd-web:master-20240125-161258
mh-front-jd-web:master-20240126-200039
mh-front-jd-web:master-20240127-145552
mh-front-jd-web:master-20240131-095107
mh-front-jd-web:master-20240201-143721

xxzx-front-jd-web : master-20231227-151657
xxzx-front-jd-web : master-20240122-160434
xxzx-front-jd-web :master-20240124-105621
xxzx-front-jd-web :master-20240125-202637
xxzx-front-jd-web :master-20240130-100838
xxzx-front-jd-web :master-20240131-093128
xxzx-front-jd-web : master-20240131-153025
xxzx-ctrl-jd :master-20231227-154305
xxzx-ctrl-jd :master-20240124-113627
xxzx-ctrl-jd :master-20240129-170143
xxzxjd-service : master-20231227-165008
xxzxjd-service : master-20240104-215555
xxzxjd-service : master-20240105-160959
xxzxjd-service : master-20240113-170417
xxzxjd-service : master-20240117-171724
xxzxjd-service : master-20240129-170136

mh-front-jd-web:master-20240120-170337
mh-ctrl-jd:master-20240120-161342
mh-service-jd:master-20240124-144259
mh-ctrl-jd:master-20240124-144259
mh-front-jd-web:master-20240124-150400
mh-front-jd-web:master-20240125-161258
mh-front-jd-web:master-20240126-200039
mh-front-jd-web:master-20240127-145552
mh-service-jd：master-20240130-195103
mh-ctrl-jd：master-20240130-194358
mh-front-jd-web:master-20240131-095107
mh-front-jd-web:master-20240201-143721

mh-front-jd-web  申请一般版本, ci_build_id:373498,img_ver:master-20240202-162117, 无application-special配置文件，不需要导入API清单
mh-service-jd  申请一般版本, ci_build_id:373483,img_ver:master-20240202-161240, 无application-special配置文件，不需要导入API清单
mh-ctrl-jd  申请一般版本, ci_build_id:373484,img_ver:master-20240202-161240, 无application-special配置文件，不需要导入API清单

mh-front-jd-web:master-20240202-162117
mh-service-jd:master-20240202-161240
mh-ctrl-jd:master-20240202-161240
```

