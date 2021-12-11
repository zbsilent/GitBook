---
tags:
  - 查看原型
  - 箭头函数
  - this指向
---

# ECMAScirpt6

---

### 认识 ES6

- HTML5 标准，JavaScript 是实现

- 目前只有 JavaScript 实现了 ECMA 标准，ECMAScript `like` JS

---

### 声明变量

_x_

#### var 声明

- 可以重复声明
- 无法限制修改
- 没有块级作用域

```html
<scirpt> 
    if(true){ var name ="monkey'; }
    console.log(name)
</scirpt>
```

> 输出：monkey

- 函数闭包中有作用域

```html
<scirpt>
    function myfun{ var name ="monkey'; } 
    console.log(name) 
</scirpt>
```

> 输出：tt is not defined

```html
var btns = document.getElementsByTagName('button'); 
for (var i = 0; i < btns.length; i++) { 
    (function (i) { 
        btns[i].addEventListener('click', function() { 
            console.log(i) })
     })(i)
}
```

* 变量提升

```js
console.log(a)
var a;
```
---
#### let声明

* 块级作用域
```html
{
    let a = 6;
}
let a = 8;
```
> 输出： Identifier 'a' has already been declared
* 不支持变量提升
---
#### const

* 只读，常量值不能改变
* const命令声明对符合类型的数据，指向内存地址
* const需要给常量必须先赋值 对比`let`[<font color="lime">指向对内存地址不可改变</font>](#F01)[_Reference_]

---
#### 箭头函数


```js
function funName(x){
    return x*2;
}
funName(2)
```
> _return_: 4
* 如果没有参数，或者有多个参数需要用()来顶一参数列表
* 如有1个参数可以不用()
* 函数体如果只有一个条语句，可以不用{},retrn会自动增加<sub>[_箭头函数_]</sub> 
::: danger
这里注意this问题，回调函数问题 箭头函数里没有构造器<br/>
普通函数this指向调用者，如果没有调用者,那就指向window<br/>
箭头函数指向箭头函数定义时所处对对象，而不是调用者，默认找父级的this<br/>
<font color="red">综上：箭头函数没有自己的this,它的this是继承而来，默认指向在定义它时所处的对象(宿主对象)</font>
:::
```html
<body>
let arr = [1, 3, 99, 4, 77, 5]

console.log(arr.sort((a, b) => a - b))

arr.sort(function(a,b){
    return a - b;
})
```
> _return_: (6) [1, 3, 4, 5, 77, 99]

```js
<style>
    #box {
        width: 100px;
        height: 50px;
        background: red;
    }

    #box.bgcolor {
        background: yellow;
    }
</style>
<div id="box"></div>
<script>
    console.log("=====")
    const box = document.getElementById('box');

    // box.onclick = function () {

    //     const obj = this; //这里将this指向obj

    //     //setTimeOut是window定义的对象 function函数是由setTimeOut去调用的
    //     setTimeout(function () {
    //         //console.log(this);
    //         obj.className = 'bgcolor'
    //     }, 3000)

    // }

    box.onclick = function () {
        //定义时所处的对象的上一级 this
        setTimeout(() => {
            console.log(this);
            this.className = 'bgcolor';
        }, 3)
    }
</script>
</body>
```

* 简化回调函数
* 表达式简洁
---
#### 数组的高阶用法

* filter 过滤器
* map 映射
* reduce 汇总


```js
<script>
    const map = [30, 50, 80,43,21];
   
    const arry = map.filter(value => value > 40).map(v => v * 0.5).reduce((previousValue, currentValue) => {
        //第一次回调函数的返回值，
        console.log(`第一元素:${previousValue}`, `第二元素:${currentValue}`)
        return previousValue + currentValue;
    })
    //链式编程
    const newArray = map.filter(value => value > 40).map(v => v * 0.5).reduce((previousValue, currentValue) => previousValue + currentValue)

    console.log(arry, newArray)
</script>
```
:::tip
查看原型<br/>
Object.getPrototypeOf(mp)<br/>
.__proto_
:::
---
#### 结构赋值

```js
<script>
    let abc = {
        name: 'li', age: 10, sex: 'nv', tt: {
            car: ['bc', 'bm'],
            w: 'a'
        }
    }
    console.log(abc)
    let { name, age, sex, tt } = abc;
    console.log(tt)
    const { car, w } = tt;
    console.log(name)
    console.log(car)
</script>

```

:::danger
解构赋值这里注意对象必须key同名
:::

---

#### 扩展运算符

```js{10,20}
<script>
    console.log(`...`)
    let arrs = [1, 2, 3]
    //这里相当于把arrs展开后填入对应位置 扩展运算符
    let arra = [19, 20]
    let arrs1 = [...arrs, 7, 8, 9, ...arra]
    console.log(`...${arrs1}`)

    //这里可变参数
    function show(a, b, ...array) {
        console.log(`前两个参数${a},${b}`);
        array.forEach((arr, index) => {
            console.log(`参数变为数组开始循环${index}次，值是${arr}`);
        })

    }
    let unit = [4, 5]
    let uarray = [3, 5, 7, 9]
    //做参数用
    show(...unit, ...uarray)
</script>
```

---

#### 类、JSON

```js{2,13,29,31}
<script>
    //类
    class Person {
        //构造方法
        constructor(name, sex) {
            this.name = name;
            this.sex = sex;
        }
        toString() {
            return `${this.name}-${this.sex}`
        }
    }
    //支持继承
    class Student extends Person {
        constructor(name, sex, age) {
            super(name, sex);
            this.age = age;
        }
    }
    const stu = new Student('张三', '男', 18);
    const per = new Person('李强', '男');

    console.log(x, y)
    console.log(stu.toString())
    //对象 变量和值一样可以省略
    let x = "x坐标";
    let y = "y坐标"
    let jsonObj = { x, y }
    //字符串 串行化字符串
    console.log(JSON.stringify(jsonObj))
    //反串形化
    console.log(JSON.parse(JSON.stringify(jsonObj)).x)
</script>
```

---
#### 模块化

* 封装到模块里 

```html
<script src="xxx.js" type="module"/>
```

* 这里需要从js文件导出


```js
/*export*/let a = 'xxx;
/*export*/function myFun(){
    return a+'ce';
}
//可以一起导出，也可以单个导出 导出就可以起别名
export {a /*as usea*/,b,myFun}
//缺省 不指定任何名字 但是只可以一个
exprot defalut funciton(){
    return "";
}
```

:::danger 注意:
缺省 不指定任何名字 但是每个文件、模块只可以一个
:::

* 导入

```js
import {myFun} from './xxx.js'
//可以别名处理
import {myFun as myfun} from './xxxx.js'
//缺省导入
import print from './xxxx.js'
//全部导入
import * as one from './one.js'
//use 可以用任何一个导出的
one.add() 
```

---
[_箭头函数_]:.././webpack/01-Core.md
[_回调函数_]:.././webpack/01-Core.md