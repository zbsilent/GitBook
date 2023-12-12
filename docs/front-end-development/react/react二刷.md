# 1

## 2

### 3

#### 4

`真实DOM`

```js
document.getElementById("demo");
```

`虚拟DOM `

```js
const VDOM = (
  <div>
    <h1>React</h1>
    <p>React is a JavaScript library for building user interfaces.</p>
  </div>
);
```

:::tip
关于虚拟 DOM： <br/> 1.本质是 Object 类型的对象 （一般对象） <br/> 2.虚拟 DOM 比较“轻”， 真实 DOM 比较“重”， 因为虚拟 DOM 是 React 内部在用， 无需真实 DOM 上那么多的属性。<br/>
3 虚拟 DOM 最终会被 React 转化为真实 DOM，呈现在页面上。
:::

标签混入 js 表达式

```jsx{2}
    <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">

        // 读取变量
        const myId = 'atguigu';
        const myData = "React is a JavaScript library for building user interfaces"

        // const VDOM = (
        //     <div id="atguigu">
        //         <h1>React</h1>
        //         <p>React is a JavaScript library for building user interfaces.</p>
        //     </div>
        // );
        const VDOM = (
            <div id={myId}>
                <h1>React</h1>
                <p>{myData}</p>
            </div>
        );
        ReactDOM.render(VDOM, document.getElementById('root'));

```

:::tip
jsx 语法规则：<br/> 1.定义虚拟 DOM 时，不要写引号。<br/> 2.标签中混入 JS 表达式时要用{}。<br/> 3.样式的类名指定不要用 class， 要用 className。ES6 关键字 <br/> 5.只有一个根标签<br/> 6.标签必须闭合<br/> 7.标签首字母<br/>
  （1）.若小写字母开头，则将改标签转为 htm1 中同名元素，若 htm1 中无该标签对应的同名元素，则报错。 <br/>
  （2）.若大写字母开头，react 就 去渲染对应的组件，若组件没有定义，则报错。
:::

:::danger
定注意区分：[js语句（代码）]与[js表达式]<br/>
1.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方<br/>
  下面这些都是表达式：<br/>
    (1). a<br/>
    (2). a+b<br/>
    (3). demo(1)<br/>
    (4).arr.map()<br/>
    (5). function test () {}<br/>
2.语句（代码）：<br/>
  下面这些都是语句（代码）：<br/>
    (1).if(){}<br/>
    (2).for(){}<br/>
    (3).switch(){case:xxxx}<br/>
:::

:::danger
  (1)map()会分配内存空间存储新数组并返回，forEach()不会返回数据。<br/>
  (2)forEach()允许callback更改原始数组的元素。map()返回新的数组
:::