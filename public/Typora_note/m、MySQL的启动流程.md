MySQL 安装完成之后会自动注册为系统服务，默认为启动状态，而且是开机自启的，如果想要停止 MySQL 可通过 win + R 打开运行，输入 services.msc 找到 MySQL 进行停止。

或者通过指令（需要以管理员的身份执行）去操作：

启动：net start mysql80
停止：net stop mysql80
————————————————
版权声明：本文为CSDN博主「多加点辣也没关系」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/xhmico/article/details/125029286



mysql的启动

```js
管理员进入命令提示符：
	启动mysql
	net start mysql80
    停止mysql
    net stop mysql80
配置好环境变量之后(可以使用系统指令打开mysql):
	mysql -u root -p

```

