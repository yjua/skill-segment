
## 获取 URL 上的参数

```javascript
/**
 *  name 参数名称
 *  url 需要获取的url
 **/
function getQueryParams(name,url){
    let url = url || window.location.href;
  	let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = url.substr(url.indexOf('?')).substr(1).match(reg);
    return r != null ? unescape(r[2]) : '';
}
```



## 日期格式化

```javascript
function Format(date, fmt) {
  var o = {
    "M+": date.getMonth() + 1, //月份 
    "d+": date.getDate(), //日 
    "h+": date.getHours(), //小时 
    "m+": date.getMinutes(), //分 
    "s+": date.getSeconds(), //秒 
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
    "S": date.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}
```

```javascript
function parseTime(time, cFormat) {
    if (arguments.length === 0) {
      return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
      date = time
    } else {
      if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
        time = parseInt(time)
      }
      if ((typeof time === 'number') && (time.toString().length === 10)) {
        time = time * 1000
      }
      date = new Date(time)
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }
    const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
      const value = formatObj[key]
      // Note: getDay() returns 0 on Sunday
      if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
      return value.toString().padStart(2, '0')
    })
    return time_str
}
```



## 哈希code

> 根据不同的string参数生成不同的哈希值，保证每个string返回一个唯一值。返回数字 有可能为负数

```javascript
function hashCode(s){
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
}
```



## JSONP实现



```javascript
// url 请求的url
// data 请求的数据
//success 请求成功调用的url
//bl 布尔值 加载成功后是否删除
function dynamicScript(url,data,success,bl){
    var dataString = '';
    //处理calback
    var jsonpcallback = "jsonpcallback" + (Math.random() + "").substring(2);
    if (typeof data == "object" && data != null) {
        if(typeof success == 'function'){
            window[jsonpcallback] = function(){
                success();
            }
            data['callback'] = jsonpcallback;
        };
        for (var p in data) {
            dataString = dataString + "&" + p + "=" + data[p];
        }
    }
    if (url.indexOf("?") > 0) {
        url = url + "&" + dataString;
    } else {
        url = url + "?" + dataString;
    }
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    script.onload = function(){
        if(bl){
            head.removeChild(script);
        }
    }
    var head = document.getElementsByTagName('head').item(0);
    head.appendChild(script);
}
```



## 字节长度



```javascript
var getByteLen = function (val) {
  var len = 0;
  for (var i = 0; i < val.length; i++) {
    if (val[i].match(/[^x00-xff]/ig) != null) //全角
    	len += 2;
    else
    	len += 1;
  };
  return len;
}

getByteLen('汉字长度') // 8  绝大多数汉字有2个字节构成
```



## 快速递增数组

```javascript
var cards = Array(62).fill().map((_,i)=>i+1);
```



## HSL转RGB

```javascript
function hslToRgb(H, S, L) {
    var R, G, B;
    if (+S === 0) {
        R = G = B = L; // 饱和度为0 为灰色
    } else {
        var hue2Rgb = function(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        var Q = L < 0.5 ? L * (1 + S) : L + S - L * S;
        var P = 2 * L - Q;
        R = hue2Rgb(P, Q, H + 1 / 3);
        G = hue2Rgb(P, Q, H);
        B = hue2Rgb(P, Q, H - 1 / 3);
    }
    return [Math.round(R * 255), Math.round(G * 255), Math.round(B * 255)];
}
```



## RGB转HSL

```javascript
function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return [Math.floor(h*100), Math.round(s*100)+"%", Math.round(l*100)+"%"];
}
```



## 交换变量

```javascript
//第一种
a = a^b
b = a^b
a = a^b

//第二种
a = a+b;
b = a-b;
a = a-b;
```

