## 插槽slot

### 基础插槽

```js
//简单的插槽就是子组件保留一个
<slot></slot>
//父组件直接调用子组件，组件标签中间存放东西，就会在字组件插槽位置生成所传递的组件
```

### 具名插槽

```js
//子组件：son-test.vue
<slot name="center">默认插槽1</slot>
//父组件
//引入子组件 sonTest
  <son-test>
    <template slot:center>
      <t-button>测试slot按钮</t-button>
    </template>
  </son-test>
```

```js
1、在定义好slot插槽后，在需要展示的标签中加上 slot=“name”，即可在指定的位置上显示需要显示的内容
2、同时需要注意的是，此方法的插槽数据源game是在App父组件中提供的，而不在子组件自身提供。为了减少冗余，可通过作用域插槽将数据存储在定义slot插槽的组件自身
```

### 作用域插槽

```js
//要求将要展示的数据放在定义插槽的组件中
//父组件只是根据数据生成结构，而数据是在定义slot的组件中提供的

//1、字组件配置的只需接收标题头，准备两个作用域插槽并携带要展示的数据
//2、使用者使用数据并设置结构

```

### keep-alive

```js

```



### $nextTick

```js
vue当中dom渲染，当修改dom的值时，是将其进入到了类似排队当中，数据是在异步之后，才获得修改；

· 在vue生命周期的created()钩子函数进行的dom操作一定要放在vue.nextTick()的回调函数中
在created()钩子函数执行的时候DOM其实并未进行任何渲染，而此时进行DOM操作无异于徒劳，所以此处一定要将dom操作的js代码放在Vue.nextTick（）的回调函数中。与之对应的就是mounted()钩子函数，因为该钩子函数执行时所有的DOM挂载和渲染已经完成，此时在该钩子函数中都不会出现问题；
在数据变化后执行的某个操作，而这个数据需要使用数据变化而改变的dom结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中。

官方解释:
vue异步执行dom更新，只要观察到数据变化，vue将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。如果同一个watcher被多次触发，只会被推入到队列一次。这种在缓冲时去除重复数据对于避免不必要的计算和dom操作上非常必要。然后在下一个的事件循环‘tick’中，vue刷新队列并执行实际（已去重的）工作。vue在内部尝试对异步队列使用原生的promise.then和MessageChannel，如果执行环境不支持，会采用setTimeout（fn,0）代替。
```



### vue生命周期

```js
八个阶段
创建前后 载入前后 更新前后 销毁前后
beforeCreate() : 在new一个vue实例后，只有一些默认的生命周期和钩子事件，其他的东西都还没创建；在此生命周期执行的时候，data和methods中的数据都还没有初始化，不能在这个阶段使用data中的数据和methods当中的方法；
created() : data和methods初始化完成，可以调用
beforeMount() : 在内存中已经编译好了模板，但是还没有挂载到页面中，此时，页面还是旧的
mounted() : vue实例初始化完成，此时组件进入到了运行阶段，可以在这个阶段操作dom
beforeUpdate() ： 页面中显示的数据还是旧的，data当中的数据更新后，页面还没有和最新的数据保持同步
updated() : 页面显示的数据和data当中的数据保持同步
beforeDestroy() : Vue实例从运行阶段进入到销毁阶段，这个时候所有的data和methods，指令，过滤器...都是可用的状态，还没有真正销毁
destroyed() : 这个时候所有的data和methods，指令，过滤器... 都是处于不可用状态，组件已经被销毁了

常用的钩子函数：
create ： 可以获取this、ajax加载、开启定时器
mounted： （内容渲染完毕） 可以获取dom节点
beforeDestroy： 清除定时器、移除监听事件
```



### 脚手架的配置

```js
//导出配置文件
vue inspect > output.js

vue.config.js 
moudle.exports={}	=> commonjs  webpack 当中使用的是node.js	所以vue在使用的时候，会将vue.config.js与webpack当中的配置整合在一起；

lintOnSave:false; //关闭语法检查

this.$set(target,key,value)
target 要更改的数据源	key:要更改的具体数据	value:重新赋的值

```



### 学习视频创建项目新增的知识点

```js
唯一标识的生成：
npm i nanoid
在存在服务器的情况下，数据库会自动生成id；
生成唯一的标识 可以通过uuid，全球唯一的；
简单点的 nanoid生成id 可以单机使用；

# vertical-algin:middle; 区分 处理图片和文字不对齐的情况
https://blog.csdn.net/qq_42681882/article/details/106934546

vue兄弟之间传值：
	最基础的是通过父级来传给两个孩子；
    vuex 也可以实现
    事件总线也可以实现
    消息的订阅和发布来实现
最基础的实现逻辑是：父传子通过props传递的数据，里一个孩子调用父传子的一个方法，通过props传递过来，调用父元素的方法，处理先前传递的数据，从而实现兄弟之间的传值；

对于处理if判断语句的时候 采用return返回错误项；尽量不使用if else 
```

### 操作class

```js
读取class
动态设置class
:class = {active:true,show:false}	通过操作属性的真假，进行class的判断；
读取class的方法	是在clssList当中读取，通过add、remove来进行增删 使用includes来判断是否包含
```

