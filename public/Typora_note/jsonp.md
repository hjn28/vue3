jsonp

```js
文件放到utils下面
export function jsonp(url, callback, error) {
  const scriptTag = document.createElement('script');
  // scriptTag.src = `${url}&callback=${callback}`;
  scriptTag.src = `${url}&callback=${callback}`;
  scriptTag.onerror = () => {
    error && error();
  };
  scriptTag.onload = () => {
    callback && callback();
    if (isMSIE() || isIE11()) {
      scriptTag.removeNode(true);
    } else {
      scriptTag.remove();
    }
  };
  document.querySelector('head').appendChild(scriptTag);
}
jsonp方法，放到公共的reqeust.js里面吧，完事export 一下
棋手那个isMSIE 和 isIE11方法，是typeUtils.js中的

jsonp(
    '/test/test1/test2',
    async () => {
      const param = {
        nsrsbh: kpfnsrsbh,
        sfwzzfp: 'Y', // 是否为纸质发票
        fphm, // 发票号码
       
      };
      const res = await fpcxFpdyXml(param);
      const messageId = new Date().getTime();
      let type = fppzDm;
      if (dylx === 1) {
        type = 'xhqd';
      }
      console.log('1111111');
    },
    () => {
      const dialog = DialogPlugin.confirm({
        header: '错误提示',
        body: '请求菜单失败',
        confirmBtn: '确认',
        cancelBtn: null,
        theme: 'info',
        onConfirm() {
          dialog.hide();
        },
      });
    },
  );
};
示例用法
```

