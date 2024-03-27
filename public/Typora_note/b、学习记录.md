

```js
b站：
https://www.bilibili.com/video/BV1Zy4y1K7SH/?p=75&spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=62c2df9eae932d8af934804a7897b4db
0617 75 跳到78
```





```js
进行数据存储本地浏览器的时候，
```



```js
三个小时
一小时 看视频 联系
一小时 练习案例测试
一小时 进行安卓开发测试
```



```js
watch
进行深度监听
watch:{
    deep:true,
    handler(value){
        
    }
}
深度监听可对对象内部属性，进行监听
```



```js
销毁之后：
this.$destroy()
销毁当前的组件实例，销毁后所有的自定义事件都不会生效；
```



学习深浅拷贝的方式，及使用场景

```js
deep shallow copy method
js 的两种数据类型
1、基本数据类型：Number、String、null、undefined、Boolean
2、引用数据类型：Object、Array

对于基本数据类型，复制的是值，只有一层，叫浅拷贝；浅拷贝只能拷贝一层，更深层的只能拷贝地址，这就会造成修改拷贝后的值的时候，原来的数据可能也会变化，这就会破坏原数据。需要对数据进行深拷贝。

浅拷贝和深拷贝的概念；
浅拷贝只是拷贝一层，更深层次对象级别的只拷贝应用；
深拷贝拷贝多层，每一级别数据都会拷贝；


```



路由传参的集中样式



get post的请求区别

hash 

学习java的基础，学习一种流行的框架

抽时间了解太空 

学习数学和物理知识；储备大脑思维 保持理性的运转；



```js
动态添加响应式的列表数据；

需要使用this.$set('obj','属性','属性值');

用来获取get set方法，触发vue响应式

$nextTick；
本次操作dom元素之后，需要使用到修改后的dom元素时，需要使用nextTick，将本次使用放到下一次dom渲染后，执行；
hasOwnProperty() 判断obj对象是否包含该属性；
vue当中的消息订阅与发布实现的流程；
2 7 7 2 5.4 2 6.4 8 1.6 10 一个月 就可以了，减少时间分配；

网络请求：
xhr
Jquery 对xhr的封装，主要是80%操作dom
axios promise请求，请求拦截器 对于xhr的封装，减少对dom的操作
fetch promise请求	有2层 需要.then().then()才能获取到，与xhr平级，都是window上自带的，IE不兼容

vue当中使用axios
11 * 180 1980
3 3 3 3 4；
1980 7 06831 13860 75 180
2.3 75 2 11 22 7 154 

cors 造成跨域 请求已经发送，而且接收到了，也有返回，只是发送方收不到

cors 需要后端去配置，返回时 添加特殊的字段，就可以收到数据；这种会造成大家访问都可以拿到数据；
jsonp 处理跨域，是通过script当中的src去处理，采用的是同源策略；只能处理get请求，像delete这样的处理不了；
配置代理，解决跨域； proxy

ngnix 开启代理服务器
vue-cli
devSever:{
    proxy:'http://localhost:5000'
}
不完善的地方：只能配置一个代理，而且无法保证是否走了代理；
axios.get('请求地址').then(
    response =>{
        
    },
    error => {
        
    }
)
```

### 插槽

```js
slot
可以带name 指向分别的插槽

在引用的组件中 添加内容，

```

### vuex

```js
vuex 集中式状态 管理的 一个vue插件
vue.use() 使用插件
多个组件共享状态进行集中式管理 组件间通信的方式
全局事件总线实现

消息订阅与发布 全局事件总线
$bus.$on()
$bus.$emit()

$bus.$on()
多个组件依赖同一状态、来自不同的行为需要变更同一状态
共享
强制类型转换为 number
v-model.number=''
v-bind '1' ，内部全部以表达式的方式展示此时的1 展示出来的是数字1
建议使用强制类型 v-model.number = 'n';

const actions = {}
const mutation = {}
const state = {}

//创建暴露store
export default new Vuex.store({
    actions,
    mutations,
    state,
})


组件中读取veux的数据：$store.state.sum
组件中修改vuex的数据：$store.dispatch('action中的方法名',数据) 或$store.commit('mutation中的方法名',数据)
备注：若没有网络请求或其他业务逻辑，组件中也可以越过action，不用谢dispatch，直接调用commit
```

对返回数据的全部处理与优化，收到接口数据进行判断，防止出现为空



### 20240319

```js
数据类型：
Undefined	Null	String	Number	Boolean	Object	Symbol	BigInt
基本数据类型：
undefined	null	boolean	number	string
引用数据类型
object	array	function

判断数据类型的方法
typeof
 	返回的是数据类型
    typeof 2
	数组、对象、null使用typeof判断均为object
    []、{}、null => object
	
instanceof
	2 instanceof number
	返回的是布尔值
    只能判断引用数据类型 []、{}、function(){}
constructor
	两个作用，一是判断数据的类型，二是对象实例通过constructor对象访问
    如果创建一个对象来改变它的原型，constructor就不能用来判断了
    constructor 判断数据的类型 对象实例通过constructor对象访问
    
object.prototype.toString.call()




92.14.11.15
92.14.11.24
92.14.11.26
92.14.11.29
92.14.11.85
92.14.11.98
92.14.11.99
92.14.11.117

天津：
江西：苏昌强、和卫国、万智朋、赵国昌（环境）、冯天强（环境）
	18279260076短信登录
上海：王书超（甲）、门浩（中软）
```

### 20240320

```js
关于组件的封装：
https://blog.csdn.net/leoyongyuan/article/details/132707987
造轮子与写文档：
webpack打包原理

```



### 20240322

```js
回流与重绘的概念及触发条件
1、回流
当渲染树部分或者全部元素的尺寸、结构或者属性发生改变时，浏览器会重新渲染部分或者全部文档的过程成为回流。
导致回流的操作：
页面的首次渲染
浏览器的窗口大小发生改变
元素的内容发生改变
元素的尺寸或者位置发生改变
元素的字体大小发生变化
激活CSS伪类
查询某些属性或者调用某些方法
添加或者删除可见的DOM元素

5、如何避免回流和重绘
a、操作DOM时，尽量在低层级的DOM节点进行操作
b、不要使用table布局，一个小的改动可能会使珍格格table进行布局
c、使用css表达式
	1、节省时间：编写一次css，在多个html页面中可通过外部引入多次重复使用
    2、大大缩短页面代码，提高页面加载速度，缩减带宽成本
    3、易于维护
    4、多设备兼容性
    5、结构清晰，更方便搜索引擎的搜索
d、不要频繁操作元素的样式，对于静态页面，可以修改类名，而不是样式
e、使用absolute或者fixed，使元素脱离文档流，这样他们发生变化就不会影响其他元素
f、避免频繁操作DOM，可以创建一个文档片段，在它上面应用所有的DOM操作，最后再把它添加到文档中
g、将元素先设置为display：none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM曹组不会引发回流和重绘
h、将DOM的多个读操作放在一起，而不是读写操作穿插着写。浏览器的渲染队列机制。

浏览器针对页面的回流和重绘，进行了自身的优化--渲染队列
浏览器会将所有的回流、重绘的操作放在一个队列中，当队列中的操作到了一定的数量或者到了一定的时间间隔，浏览器就会对队列进行批处理。这样就会让多次的回流、重绘变成一次回流重绘。

6、优化动画 将动画的position属性设置为absolute或者fixed，将动画脱离文档流，这样他的回流就不会影响到页面了。
7、documentFragment 文档片段接口，一个没有父对象的最小文档对象
8、对节流和防抖的理解
	函数防抖是指在事件被触发n秒后再执行回调，如果在这n秒内事件又被触发，则重新计时，这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。
    函数节流是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。节流可以使用在sroll函数的事件监听上，通过事件节流来降低事件调用的频率。
    防抖函数的场景：
    按钮提交场景、防止多次提交按钮，只执行提交的一次
```

