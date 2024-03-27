



## sword1.0项目启动

```js
调试代码：
http://127.0.0.1:8080/sword?ctrl=
http://127.0.0.1:8080/sword?ctrl=AllcheckCtrl_init

```

## sword2.0项目启动

```js
调试代码：
http://127.0.0.1:8080/sword?ctrl=HjnTestCtr_init

http://127.0.0.1:8091/sword?ctrl=FileDemoCtrl_initForm


http://127.0.0.1:8091/sword?ctrl=AllcheckCtrl_init

http://127.0.0.1:8080/sword?ctrl=AllcheckCtrl_init

http://127.0.0.1:8080/sword?ctrl=PullTreeTest_initTree

http://127.0.0.1:8091/sword?ctrl=SwordMoveCtrl_init

http://127.0.0.1:8091/sword?ctrl=SwordMoveSearchCtrl_init

http://127.0.0.1:8080/sword?ctrl=SwordMoveCtrl_init

http://127.0.0.1:8080/sword?ctrl=SwordMoveSearchCtrl_init

http://127.0.0.1:8080/sword?ctrl=SwordMoveCtrl_init

项目名称：
电子发票开发推广一期二包
统一工作云平台
新电局
```



sword2.0

![image-20230817200544332](C:\Users\HJN\AppData\Roaming\Typora\typora-user-images\image-20230817200544332.png)



![image-20230817200710827](C:\Users\HJN\AppData\Roaming\Typora\typora-user-images\image-20230817200710827.png)

## sword问题汇总

```js
1、swrod框架支持，通过js直接请求servlet的写法么？
	支持；
	自行控制请求地址和数据
	不要用sword框架的提交组件
	否则数据格式，后端servlet还得自己处理
	自己写ajax请求，不要依赖sword框架
```

vscode配置

```js
D:\hujianeng\sword-project\ZR_Sword-web_0328\hcgl_devtest\src\main\webapp\WEB-INF\classes

D:\hujianeng\sword-project\sword-web-1.0\ZR_Sword-web_0328\hcgl_devtest\src\main\webapp\WEB-INF\classes
-ui 目录只到webAPP
D:\hujianeng\sword-project\sword-web-1.0\ZR_Sword-web_0328\hcgl_devtest\src\main\webapp
```

配置图

![1686188762575](C:\Users\HJN\AppData\Local\Temp\1686188762575.png)



### 访问网址 sword2.0

```js
http://127.0.0.1:9999/sword?ctrl=SelectTestCtrl_test1

360安全浏览器版本13.1.6320.0

http://127.0.0.1:8090/sword?ctrl=SelectTestCtrl_test1

本地测试的类
http://127.0.0.1:8090/sword?ctrl=FormHjnTestCtrl_test2


## 进行初始化的界面
FormInitTest
http://127.0.0.1:8090/sword?ctrl=FormInitTest_init

// 基础属性的验证 地址
http://127.0.0.1:8090/sword?ctrl=HjnTestCtr_init

// 表格的接口详解测试


HjnTest_init
TreeTestCtrlHjn_initGrid

表格组件 扩展示例
动态拼组表格组件
http://127.0.0.1:8090/sword?ctrl=DtpzbgzjCtrl_init

http://127.0.0.1:8090/sword?ctrl=XialaSelectCtrl_init
XialaSelectCtrl
DtpzbgzjCtrl
```

360安全浏览器版本13.1.6320.0

sword 2.0  是 sword-ui

项目部署在sword test上



### sword查找问题 3次

```js
1、文本框显示 根据个数不同显示不出来；
是由于异步处理的时候，数据没有进行深拷贝，导致数据丢失一条；
2、文本框的个数显示问题；

两次问题的解决位置，没有确切的找到；
如何在代码调试的时候，查找到问题的根源；
```



### sword北京环境

登录北京环境排查 域名一样的 sword.js 进行替换

```js
登录地址：
http://scsso.tax.cn:9007/js_sso_server/login?service=http%3A%2F%2Fscportal.tax.cn%3A8001%2Fwelcome.html

录入退抵税费
#sword.js 路径  sword项目2.0的js
D:\Program\Workspaces\sword-web-parent\ui\src\main\resources\META-INF\resources\swordweb\core\jsimport\sword.js
# sword项目 2.0
D:\Program\Workspaces\sword-web-parent\ui\src\main\resources\META-INF\resources\swordweb\widgets\SwordPopUpBox\SwordPopUpBox.js

## sword.js sword 1.0
D:\Program\Workspaces\swordweb1.0\webapp\swordweb\core\jsimport\sword.js


## sword.js 和 sword.min.js 互换名称，采用未打包的体积较小的使用，命名为sword.js

## sword项目 1.0环境上的jar包的sword.js （非压缩的）
D:\hujianeng\a-sword-tiaoshi\sword-webjsp-1.0\META-INF\resources\swordweb\core\jsimport\sword.js

## 压缩的 Sword-cs.js
D:\hujianeng\a-sword-tiaoshi\sword-webjsp-1.0\META-INF\resources\swordweb\core\jsimport\sword-cs.js
结论：线上的压缩的js弹框空白，问题复现；非压缩的js弹框显示正常；

使用压缩的sword.js 测试 2.0
D:\hujianeng\a-sword-tiaoshi\yasuo-js\xiangmu-2\Sword12_min.js

使用压缩的sword.js 测试 1.0
D:\hujianeng\a-sword-tiaoshi\yasuo-js\xiangmu-1\Sword-genggai.js


## 测试账号：
1、14406820198登录北京生产环境
身份选择“高乃明”
2、搜索：录入退抵税费
3、录入识别号：440605202203182，
受理税务事项选择：入库减免退抵税
4、提退税金类型：先征后退
退抵税(费)依据文书字号：资源综合利用产品及劳务增值税即征即退2022-03-01至2022-05-31
退抵税费原因类型：资源综合利用产品及劳务增值税即征即退
然后点击“查询”按钮
5、票证种类：税收缴款书（银行经收专用）
税费所属期起：2022-03-01
税费所属期止：2022-05-31
然后点击“查询”按钮
6、点击“确定”按钮
7、弹出声明框，此时点击“不同意”，然后可以继续点击“查询”按钮  反复操作
我发现全选退抵税费明细列没有问题   但勾选某一条明细  再点“确定”，弹出声明框就是空白的
勾选两条明细，声明框也能显示内容，唯独勾一条  就显示不了
```

####  测试流程

```js
代码块替换：
sword1.0中的替换
1、
EXACT:http://schxqd.tax.cn:8002/swordweb/core/jsimport/Sword.js
替换为
D:\hujianeng\a-sword-tiaoshi\weiyasuo-js\xiangmu-1\sword.js
2、
EXACT:http://schxqd.tax.cn:8002/swordweb/widgets/SwordGrid/SwordTable.EventDele.js
替换为
D:\hujianeng\a-sword-tiaoshi\sword-webjsp-1.0\META-INF\resources\swordweb\widgets\SwordGrid\SwordTable.EventDele.js
3、
EXACT:http://schxqd.tax.cn:8002/swordweb/widgets/SwordBigTree/SwordBigTree.Draw.js
替换为
D:\hujianeng\a-sword-tiaoshi\sword-webjsp-1.0\META-INF\resources\swordweb\widgets\SwordBigTree\SwordBigTree.Draw.js

sword2.0中的替换
1、
EXACT:http://schxqd.tax.cn:8002/swordweb/core/jsimport/Sword.js
替换为
D:\hujianeng\a-sword-tiaoshi\weiyasuo-js\xiangmu-2\sword.js
2、
EXACT:http://schxqd.tax.cn:8002/swordweb/widgets/SwordGrid/SwordTable.EventDele.js
替换为
D:\hujianeng\a-sword-tiaoshi\sword-webjsp-1.0\META-INF\resources\swordweb\widgets\SwordGrid\SwordTable.EventDele.js
3、
EXACT:http://schxqd.tax.cn:8002/swordweb/widgets/SwordBigTree/SwordBigTree.Draw.js
替换为
D:\hujianeng\a-sword-tiaoshi\sword-webjsp-1.0\META-INF\resources\swordweb\widgets\SwordBigTree\SwordBigTree.Draw.js
```

宽度计算统计

```js
0 input x的位置 1097
选中 0 个
o 为 input,o._getPosition().x: 1097
VM21985:2066 $(document.body).getScrollWidth() 1523
VM21985:2067 t为div,t.getWidth() 0
VM21985:2070 p0: -426
VM21985:2071 scanX: 1523

选中 1 个
o 为 input,o._getPosition().x: 808.1111145019531
VM22317:2066 $(document.body).getScrollWidth() 1523
VM22317:2070 p0: -714.8888854980469
VM22317:2071 scanX: 1523

```

已测试10次 未出现 内容空白

测试结果

```js
# sword项目2.0 的sword.js 显示一条数据存在数据
测了十来次
# sword项目1.0 的sword.js 显示一条数据存在数据
每次都清浏览器缓存 测试 勾选一次的时候都显示数据；

2.0 压缩包 代码运行报错
1.0 压缩包 重现问题 弹框无内容
```



idea 重新编辑前端代码

![1680083433143](C:\Users\HJN\AppData\Local\Temp\1680083433143.png)

![1680083460255](C:\Users\HJN\AppData\Local\Temp\1680083460255.png)



### 项目流程测试项

1、提交组件数据的传递，数据传给后台之后，后台再反馈到前端界面；

2、下拉列表、下拉树、弹框

3、文件上传

4、表单表格的使用

5、熟悉框架



熟悉操作数据库的操作：

操作的创建java

![1681379336277](C:\Users\HJN\AppData\Local\Temp\1681379336277.png)

生成的class类的位置：

![1681379178603](C:\Users\HJN\AppData\Local\Temp\1681379178603.png)



![1681379525706](C:\Users\HJN\AppData\Local\Temp\1681379525706.png)

#### 数据库链接成功

已成功链接数据库，并且可以读取数据库中的数据，至于往数据库中添加数据，删除数据先不做；开始尝试所有表单组件涉及到的应用实例；了解其中的含义； 

### 表格demo测试

```js
待测试:
后台分页的链接数据库测试，切换下一页的时候，已触发的请求不再次触发；

后台计算表格合计值 待详细测试

console当中的curPageData allNoDeleteData allData 要结合ctr使用 --待测试

type为label的时候，是不可以更改的 disabled禁用状态的时候 等同于label；
```

​                                                                                                                               

压缩加密文件

```js
zip 加密压缩软件
7-zip 加密压缩文件
今天待完成的任务 ：
文件的上传与下载的测试；
```



电脑的需要删除的文件：

游戏、向日葵、WeGame；录制的视频；都在文档当中，接收的文件清理；一只猫；

回头再重新下载下来；

浏览器标签的导出                                                                                                                                                                                                                         



```js
碰到的问题：
     onAfterCreateRow="test23();"
     onAfterCreateCell="testCell();"
当进行初始化加载页面的时候，swordAlert 会重复出现，关闭不了；

关于idea使用过程中，出现的问题：
通过build Artifacts -> Build 构建完成后，页面不会刷新，需要重新启动才可以实现 页面的重新加载
```



### sword1.0

```js
测试 ctrl
XialaSelectCtrl_init

http://127.0.0.1:8090/sword?ctrl=XialaSelectCtrl_init

http://127.0.0.1:8090/sword?ctrl=DtpzbgzjCtrl_init

http://127.0.0.1:8090/sword?ctrl=XialaSelectCtrl_init

```

### 问题总结描述：

```js
1、
问题描述：预生产总局待办事宜的数据未展示问题
造成原因：返回的数据当中有部分数据未传输过来，未对其进行判空处理
解决方案：增加对返回数据是否存在的判断
2、
问题描述：预生产省局调用关闭当前tab页的方法，出现不能调用的情况
造成原因：其使用者未做跨域处理
解决方案：让使用者增加跨域处理
```

### test

```js
1. 页面有个提交按钮，有个表单或表格
2. 按钮点击事件：
var sub = new SwordSubmit();
	sub.setCtrl("/sword?ctrl=GridTestCtrl_init");
	//sub.setCtrl("SelectTestCtrl_sendRedirect");
	sub.pushData($w("students1").getAllGridData());
	swordAlertIframe("",{
		submit:sub,
		width:1000,
		height:500
	});
3. SwordPopUpBox.js文件alertIframe方法；
4. 后端java获取表格数据：List temp = req.getTableData("students1");

使用 
http://127.0.0.1:8090/sword?ctrl=HjnTestCtr_init

http://127.0.0.1:3000/sword?ctrl=ClientCacheTestCtrl_initClientCache

initClientCache

http://127.0.0.1:8080/sword?ctrl=UploadCtrl_imgFileUpload

UploadCtrl

FormHjnTestCtrl

http://127.0.0.1:8090/sword?ctrl=FormHjnTestCtrl_test2

    http://127.0.0.1:3000/sword?ctrl=XialaSelectCtrl_init

http://127.0.0.1:3000/sword?ctrl=HjnTestCtr_init
```

访问接口ctrl

```js

http://127.0.0.1:8090/sword?ctrl=FormHjnTestCtrl_test2

http://127.0.0.1:8090/sword?ctrl=HjnTestCtr_init


```

### sword测试访问记录

```js
一、
1、北京预生产环境
登录地址：
http://scsso.tax.cn:9007/js_sso_server/login?service=http%3A%2F%2Fscportal.tax.cn%3A8001%2Fwelcome.html
账号 14406820198 Abcd1234   身份   高乃明
2、搜索：录入退抵税费
3、录入识别号：440605202203182，
受理税务事项选择：入库减免退抵税
4、提退税金类型：先征后退
退抵税(费)依据文书字号：资源综合利用产品及劳务增值税即征即退2022-03-01至2022-05-31
退抵税费原因类型：资源综合利用产品及劳务增值税即征即退

然后点击“查询”按钮

5、票证种类：税收缴款书（银行经收专用）
税费所属期起：2022-03-01
税费所属期止：2022-05-31
然后点击“查询”按钮
6、点击“确定”按钮
7、弹出声明框，此时点击“不同意”，然后可以继续点击“查询”按钮  反复操作
我发现全选退抵税费明细列没有问题   但勾选某一条明细  再点“确定”，弹出声明框就是空白的
勾选两条明细，声明框也能显示内容，唯独勾一条  就显示不了

二、
北京预生产环境
账号 14406820198 Abcd1234   身份   高乃明
在办任务当中的 选项卡 选中，回选发现选项卡选中的数据变成了一个；
打开一次 在打开的时候，弹框的位置发生偏移；
```

待完成任务

```js
26号下午完成
coding扫描任务 当中的致命问题和错误问题 清零

```



```js
AllcheckCtrl
http://127.0.0.1:8090/sword?ctrl=AllcheckCtrl_init

```

hu1548236617 hu17836920840

## 修改问题

```js
row 32 
row 46
44 

身份切换的逻辑：前端点击身份切换按钮，向后端发送请求，后端返回身份切换的页面到前端的iframe当中的弹框里；在iframe弹框操作身份切换，点击确定按钮，后端指向一个前端提供的空白页面，去做处理，重定向到index首页。
如果iframe弹框里点击身份切换的确定按钮，后端返回的页面直接重定向，会在iframe当中直接返回到首页；所以借用了一个空白页；前端在这个空白页，添加了一个postMassage事件，通知首页去做重定向；

前台 -> 后台 -> 可信 -> 后台

前台(发送请求) ->后台() 




门户严重问题（6个）：window.loacation的使用是直接取值；document.domain是赋值；二者与用户操作无关，无需修改；
门户高危问题（5个）：docker问题（2个），属于环境构建问题，无法修改；window.loacation的使用是直接取；document.domain是赋值；

Header Manipulation: Cookies


mh-front-jd-web:
严重漏洞（6）：Cross-Site Scripting: SOP Bypass
	无法修复：原因是window.location是直接取值，document.domain是赋值操作；二者与用户操作无关。
高危漏洞（2）：Dockerfile Misconfiguration
	无法修复：docker问题配置组创建的基础镜像的文件，dockerfile基础镜像是腾讯提供的；
高危漏洞（3）：Header Manipulation: Cookies
	无法修复：document.cookie是赋值操作；
描述：


严重漏洞（6）：Cross-Site Scripting: SOP Bypass
	问题描述：可能存在用户直接修改document.domain;
	解决方案：document.domain，不存在用户在控制台输入可以修改的现象；增加对document.domain赋值前的判断，符合['tax.cn','tax','sat.tax']当中的任一项，才能进行document.domain赋值;
高危漏洞（2）：Dockerfile Misconfiguration
	问题描述：Dockerfile 将容器设置为以 root 用户身份运行；检索使用非特定版本的生成依赖项会使编译系统容易受到恶意二进制文件的攻击或导致系统出现意外行为
    解决方案：Dockerfile是配置组创建的基础镜像的文件，Dockerfile基础镜像是腾讯提供的；
高危漏洞（3）：Header Manipulation: Cookies
	问题描述：在 Cookies 中包含未验证的数据会引发 HTTP 响应头文件操作攻击；
	解决方案：在相关的文件中，取消对cookie的删除操作；
    
    
严重漏洞（6）：Cross-Site Scripting: SOP Bypass
	已修复
高危漏洞（2）：Dockerfile Misconfiguration
	问题描述：Dockerfile 将容器设置为以 root 用户身份运行；检索使用非特定版本的生成依赖项会使编译系统容易受到恶意二进制文件的攻击或导致系统出现意外行为
    解决方案：Dockerfile是配置组创建的基础镜像的文件，Dockerfile基础镜像是腾讯提供的；该问题需要配置组解决。
高危漏洞（3）：Header Manipulation: Cookies
	已修复
```



```js
postMassage 在同一个域下，使用window的方法 来跳转；使用 .top来调用
```

11

### 0609

```js
排查checkbox的 全选问题，以及操作源代码
查找实现checkbox的逻辑，全选根据所有选项选中后，自动选取


if(type == 'checkbox' && allchk != 'false')
    
单个check对应的为：sGrid_data_row_item_checkbox

更新元素：
updateCell

onAllCheckClick

配套的东西要保留，不要轻易去动；

http://127.0.0.1:8091/sword?ctrl=AllcheckCtrl_init

sGrid_data_div
```



电子签章

```js
利用图像处理技术将电子签名操作转化为与纸质文件盖章操作相同的可视效果，同时利用电子签名技术保障电子信息的真实性和完整性以及签名人的不可否认性

1、什么场景下必须使用电子签章？
	合同或文件是以电子文件的形式表现和传递的，
    
  应用场景：金融证券、电子政务、教育、医疗卫生
  
  电子签章是电子签名的一种表现形式，利用图像处理技术将电子签名操作转化为与纸质文件盖章操作相同的可视效果，同时利用电子签名技术保障电子信息的真实性和完整性以及签名人的不可否认性
  
  
  政务服务

在政务办公、公共管理和社会公共服务活动中，一方面，管理单位面临需审阅、收集、监管个人及企业填报的大量文件，另一方面，企业和个人经常因为某个人无法现场签字或公章遗落在单位等原因无法及时申报、提交相关文件。尤其随着互联网和无纸化的发展，国家和各地政府都在积极推动数字政府建设，以通过“一网通办”、“跨省通办”等方式来建设一体化政务服务体系，全面提升政务服务规范化、便利化水平。以电子印章代表的电子认证技术作为数字经济的可信基础设施，也正在成为数字政府建设的重要抓手。在政务办公、公共管理和社会公共服务中，电子印章可以有效帮助企业简化开办过程、帮助群众减少盖章流程，进一步提供便民利民服务，实现“少跑腿”，零见面审批，商事全程线上办理，既提高了工作效率，也能降低服务经营成本。

企业办公

电子签名是企业数字化的“基础设施”，因其降本提效、安全可靠、方便快捷等特点备受企业青睐。尤其受疫情影响受，原来的签署工具和方式已经无法满足需求，以电子印章、电子合同为代表的签署方式刚好解决疫情中远程办公、居家办公的签署痛点。在企业管理、运营、办公等环节中，各种内部文件、商务合同等需要签字盖章，不仅体量大、类别多、难管理、打印存储成本高、流程繁杂而冗长，而且还会面临着公章“出差”、丢失、假冒等问题，而电子印章、电子合同等签署方式刚好能完美解决这些痛点问题。通过对电子印章、电子合同的全方位、全过程、智能化的管理，让一份文件签署从发起开始，到内容确认、人员审批、查询、追溯、管理等诸多环节都能在线进行、无需等待、真实有效、安全保障。

医疗场景

医疗是电子印章应用最应该全面落地的场景之一，因为现在的医疗场景中，医院与医院之间还没有完全打通壁垒，病人的过往病历和相关信息无法从一个医院调入另一个医院，一旦病人换了一个医院就诊，往往还需要浪费医疗资源和金钱再去做同样的检查。再者医疗物资采购、各种医院证明、医保报销、医疗检测报告等方方面面的医疗场景都需要签署盖章，依靠传统的签署模式，流程多、效率低、难管理、难追责、冒签冒领等诸多问题。通过区块链等技术融合，电子印章以全流程智能化、安全真实、防篡改、易查询、可溯源等特点为各种医疗场景提供高效安全有保障的签署服务。

物流场景

物流是经济的血脉，是畅通国民经济循环的重要环节，物流通畅是保障人们正常生活、促进产业链供应链稳定的必要前提。可以说，优化物流场景，就是优化民生，优化经济。物流场景中，有许多签署环节，如承运协议、货运单、出库单、发货单、签收单、各种文件合同等，如果单靠人力运作，效率不高、成本损耗，还有可能弄虚作假面临追责等问题。再遇上疫情这样的情况发生，合同协议盖不了章、货单单据签不了字、司机路上防疫证明无法开具等，对物流来说就是致命的打击。电子印章以其方便、快捷、高效等特点可以实现物流场景中所需的各种在线签署、货单管理、远程防疫管理等各种需求，助力物流行业高效节能、智能安全、降本增效。
```



```js
电子印章使用场景最常见的无外乎于电子商务、互联网金融、旅游、教育、人力资源、物流等领域，除此之外，房地产、汽车、保险、第三方支付、医疗、供应链等行业以及政府机构也开始采用电子印章，并产生了丰富的行业案例。 实际上，除了法律规定必须使用传统合同的情况，其他情况都可以使用电子印章，这也是互联网时代的大势所趋。对于企业来说，电子印章的作用不仅仅是确保电子文书具有法律效力，还应该助力企业由传统办公模式向信息化办公模式转型。因此，大到企业对外签订的各种商业合同，如采购合同、购销合同、供应商合同、运输合同等，小到企业对内的各种合同及证明文件，如劳动合同、保密协议、离职证明、员工入职表等，均可以采用电子印章在线进行签约。


```

电子签章：

```js
引用领域：
https://www.idpi.cn/peixunxindetihui/571577.html
```



```js
1、 电子报告
各行业都会涉及电子报告，为了保证报告真实不被篡改，在生成报告的过程中即可加入电子签章服务，从而减少事后纠纷。例如：生物公司检测报告；医院的体检报告/病例诊断报告/药物领取单等等。

2、 证书电子版固化

目前各种纸质证书较多，包含各种检测报告，学历、证书等，此类文件电子化也是必然趋势，但是此类文件必须要有较强的防篡改性，采用电子证书的形式可以做到对文件保全，篡改后电子证书即会失效，保障了此类文件的合法有效性。

3、 企业工作流审批
目前很多企业已经开始进行线上的办公操作，包括采用OA、CRM等系统加快企业工作的效率，目前主要的使用场景就是企业内部的工作流，工作流会涉及到各种不同角色的使用者进行审批操作，每一步审批如果配合上电子签名/签章，对审批的节点进行数字证书的固化，可以更好的保障审批文件的有效性。

4、 电商订单存证
目前电子商务发展
迅猛，消费者在和线上商店/商城进行交易的过程中，会出现各种情况的纠纷，虽然线上商城目前均有订单的记录和保存，但是一旦出现了纠纷，难免会出现消费者、甚至于司法机构对于出具的订单记录存疑，毕竟此类单据目前仅仅是线上商城自身出具的文件，没有电子证书的加持，无法保障时间和数据的真实准确性。

5、 系统单据保全

现在所有的企业和个人的工作生活中都会接触到各种系统，这些系统在运行的过程中出现了大量的单据凭证，这部分文件最佳的形式也需要通过数字证书的加持和保障。

6、 知识/文件版权保护

知识产权的保护的意识越来越强，随着国家律法的加强和大家思想上的升级，目前对于版权、著作权等相关的意识越来越强，采用数字证书和版权保护结合，就能更好的解决产权数字文件的保障，时间戳可以保障文件的保护时间、数字证书可以保障文件的一致性和不可篡改性，极大推动只是产权保护的进程。
```



```js
# 电子签章的使用场景？
金融、保险、第三方支付、旅游、房地产、物流、B2B、B2C、HR等各行各业都可以使用电子签章；

# 使用场景：
	合同或文件是以电子文件的形式表现和传递的时候必须使用电子签章；常用的场景有电子报告、证书电子版固化、企业工作流审批、电商订单存证、系统单据保全、知识/文件版权保护；
不使用有哪些危害：
	1、
    
优势：
	存储电子合同更加便捷、提升合同签署、流转等方面的效率、应用电子签章签订合同能够节省时间、应用电子签章的合同多重备份均有法律效力、更有效防止信息被篡改、提升存储的安全性、节省快递费用成本和纸张成本、提升企业形象、线上存储电子合同节省物理空间、助力企业互联网化转型、响应上级领导要求，满足领导移动签名的需求、标杆企业/合作伙伴的成功案例推动等
风险：
	身份认证阶段被冒用、签署验证阶段被冒用、认证机构失信
# 不使用电子签章的危害：
	实体签章易伪造和文件内容易篡改；
    
    
电子签章是以数字形式存在的签章，通常由加密技术生成，具有独特的身份识别信息。与传统实体签章相比，电子签章具有以下优势：

难以伪造：电子签章采用了加密技术，使得伪造变得异常困难。它们具有复杂的加密算法和数字签名机制，确保签章的真实性和完整性。

轻松验证：电子签章可以通过数字签名进行验证，从而确保签署者的身份和文件的完整性。验证过程简单高效，不需要传统的实体签章和纸质文件。

方便快捷：使用电子签章可以实现远程签署和多方合作，无需面对面的签署和邮寄文件。这大大提高了合同签署的效率和便利性

```





```js
1. 身份认证阶段被冒用

这种情形下，电子印章形式上是张三的，但是实际上是李四申请的。出现的原因可能是因为李四通过非法手段取得了张三的身份证，使用该身份证并且欺骗了银行、通信运营商，从而办理了银行卡和手机sim卡，然后完成身份认证。之后利用以上非法手段获得的电子印章进行使用。

2. 签署验证阶段被冒用

这种情形下，电子印章是张三申请的，但是实际上是李四使用的。出现的原因可能是因为李四通过非法手段取得了张三的手机，并且知悉了张三的手机密码，从而使用张三的手机登录平台，并且在使用电子印章签署时还可以同步获得验证码完成签署。

3. 认证机构失信

这是一种非常极端的情形，在这种情形下，认证机构及其工作人员可能自行或者与他人勾结伪造电子印章，“签名属性”里的信息将无法信赖
电子签章：利用图像处理技术将电子签名操作转化为与纸质文件盖章操作相同的可视效果，同时利用电子签名技术保障电子信息的真实性和完整性以及签名人的不可否认性。
```



```js


电子签章定义:使用电子印章签署电子文件的过程。电子签章可实现与纸质文件盖章操作相似的可视效果，可保障数据来源的真实性、数据完整性以及签名人行为的不可否认性。

使用场景：合同或文件是以电子文件的形式表现和传递的时候必须使用；常用的场景有电子报告、证书电子版固化、企业工作流审批、电商订单存证、系统单据保全、知识/文件版权保护；

使用的优势和危害：
	优势：
	存储电子合同更加便捷、提升合同签署、流转等方面的效率、应用电子签章签订合同能够节省时间、应用电子签章的合同多重备份均有法律效力、更有效防止信息被篡改、提升存储的安全性、节省快递费用成本和纸张成本、提升企业形象、线上存储电子合同节省物理空间、助力企业互联网化转型、响应上级领导要求，满足领导移动签名的需求、标杆企业/合作伙伴的成功案例推动等
    危害：
    身份认证阶段被冒用、签署验证阶段被冒用、认证机构失信
    
不使用的危害：实体签章易伪造和文件内容易篡改；
```



```js
电子签章的应用领域的特点就是有愈加频繁且庞大数据传输的需求，对于这些领域数据交换的安全性、保密性、完整性，电子签章系统的作用是不言而喻的。电子签章系统主要运用于 B2B、B2C电子商务安全交易管理、证券、贸易、招投标、电子政务、企业内部办公等等各种领域的电子签章。

    电子签章主要应用领域的几种基本类型：

B2B电子商务

    电子签章系统首先应用与电子商务交易，为保证企业之间的交易与支付的的安全性、有效性、保密性等，防范交易欺诈；电子签章系统开发的安全认证系统可以为企业建立一种信息交换的网上信任机制，解决了在线订单、数据交换、合同管理等的安全问题。

政府政务处理

    由于政府部门的办公自动化建设，政府机关之间的电子公文交换和互联网平台的文件交换信息化的实施，因为这政府文件的机密性，更加要保证其安全传输，电子签章系统通过电子印章、签名、数字签名、数字证书等安全信息技术，保证政府政务信息的完整性与不可篡改性、不可伪造性。

审计办公应用

    电子签章系统开发对于审计办公的实际应用，有很强大的技术支持，在增加了审计机关政务系统办公所需部分功能，保证能够满足审计办公需求。

政府与企业信息交换

    政府与企业之间存在大量的信息交换，，比如：网上缴费、网上缴税、行政审批网上申报、网上工商、电子海关等方面。电子签章系统能够从签章的法律效力和信息交换的技术可靠性上保证相互之间信息安全，以提高网上办公的效率和服务水平

企业办公

    对于多层级划分的企业或集团内部，企业总部与分支机构之间、上下级之间信息交换也频繁发生，比如：财务报表、销售报表等等，运用电子签章系统能够保证网络信息的安全性，实现企业内部的协同办公，提高信息处理效率、提高办公效率。适用于制造业、金融、电信、建筑等各行各业的信息安全交换。

    随着社会信息化的逐步深入，互联网通讯技术的发展，各行各业对于信息交换的需求也越来越大，电子签章系统的应用不仅越来越深入，电子签章的应用领域也在不断拓展，为实现现代化安全办公提供强有力的支持。
```

### 0620

```js
组件中使用：
      <t-upload
        :tips="tips"
        v-model="files"
        action="/dev/api/upload/v1/testBigFile"
        @fail="handleFail"
        @success="onSuccess"
        :onProgress="readOnprogress"
        :showUploadProgress="true"
        theme="file-input"
        placeholder="未选择文件"
        size="200"
        unit="MB"
      ></t-upload>

<t-upload/> 中使用 :onProgress="readOnprogress"可以获取前端的上传进度
方法中调用，可展示出来前端的上传进度：
methods: {
    readOnprogress(e){
       // 通过type === real 来判断真实上传进度，type === mock 来判断虚拟上传进度
      if(e.type === "real"){
        console.log(e.percent);
      }
    }
    },
        
测试结果是可以使用，目前可以读取的是前端上传的真实进度，后端的进度没有显示进度条，目前娶不到后端的进度，还差一个前端和后端上传进度的对比；
```

---

```js
    ,resetByNames:function(names,nohidden){
    	if($chk(names)){
    		var isNH=nohidden===true;
    		var resets = $type(names)=="string"?new Array(names):names;
    		resets.each(function(name){
    			var item = this.getFieldEl(name);
    			var type=item.get("type"),name=item.get("name"),widget=item.get("widget"); 
    			if(isNH&&type=="hidden"){
        			return;
        		}else{
        			item.set('value', '');
                    item.set('realvalue', '');
                    if(item.get('oValue')){item.set('oValue', '');}
                    if(item.get('code'))item.set("code", "");
                    if(type=="label"||type=="textarea"){
                    	item.set("text","");
                    }else if(type=="radio"||type=="checkbox"){
                    	var els=item.getElements(".formselect-list-item");
        				els.each(function(itemEl){
        					itemEl.removeClass("formselect-selected").getElement("input").set("checked",false);
        				});
                    }else if(widget=="pulltree" || widget=="pullbigtree"){
                    	var treeObj = this.getField(name);
                    	if(treeObj) treeObj.clearCheckedStatus();
                    }else if(widget=="select"){
                    	item.set('allDb',null);
                    	if(item.retrieve('allDb')){
                    		item.store('allDb', null);
                    	}
                    }else if(widget=="file"){
                    	var fileObj = this.getField(name);
                    	if(fileObj) fileObj.reset();
                    }
                    var defValue = item.get("defValue");
   	             	if(defValue != null){
	                	this.setValue(name, defValue);
   	             	}
                    this.Vobj.clearElTip(item);
        		}
    		}.bind(this));
    	}
    }
```



0710

```js
丹姐，7月15号（周六），计划休个假，回北京一趟，我的驾照由于在北京办理过摩托增驾（尚未考完），导致无法在广州这边办理期满换证，要回北京才能办理；然后趁着回去换证的时间，约了一场21号的考试，把摩托增驾也考出来；7月23日（周日）回广州；；
上一次休假是4月27号-5月4号
```

