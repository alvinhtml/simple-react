# Simple React

## 使用 Parcel 打包

1. 安装 Parcel

```bash
npm install -D parcel@next
```

2. 安装 bable

```sh
npm @babel/core @babel/preset-env @babel/plugin-transform-react-jsx -D
```

3. 配置 .babelrc 支持 Jsx 语法

```json
{
  "presets": ["@babel/preset-env"],
  "plugins": [
    ["@babel/plugin-transform-react-jsx", {
      "pragma": "React.createElement"
    }]
  ]
}
```

## 将 JSX 转化为 DOM 对象

React 的代码从 `ReactDOM.render()` 方法开始，render 方法接收两个参数，第一个是虚拟 DOM 对象，第二个是根节点

```js

const ele = (
  <div title="hello">Hello React!</div>
)

ReactDOM.render(ele, document.querySelector('#root'))
```

上面这段代码，JSX 语法经过 Babel 转换后，变为 React.createElemen() 语法:

```js
const ele = React.createElement("div", {
  title: "hello"
}, "Hello React!")
```

代码中所有的 JSX 语法，都会被转换成这种语法，所以我们需要实现一个 `React.createElement` 方法， 这个方法返回一个虚拟 DOM 对象，这个对象有以下属性，其中 key 会在 diff 的时候用到

```js

function createElement(tag, attrs, ...children) {
  attrs = attrs || {}
  return {
    tag,
    attrs,
    children,
    key: attrs.key || null
  }
}
```

这样，`ReactDOM.render` 接收到的参数，就变成了一个虚拟 DOM 对象（以下用 `vnode`指代）

```js
ReactDOM.render({
  tag: 'div',
  attrs: {
    title: 'hello'
  },
  children: ,
  key: null
}, document.querySelector('#root'))
```

render 方法要做的事情就是将虚拟 DOM 对象渲染成 DOM 节点并插入到根节点，实际上，在此之前要先进行对比，也就是 diff, 只有发现真实 DOM 和 vnode 不一样的时候，才进行重新渲染。

## Diff

```js
function render(vnode, container, dom) {
  diff(dom, vnode, container)
}

export function diff(dom, vnode, container) {
  const result = diffNode(dom, vnode)

  if (container) {
    container.appendChild(result)
  }

  return result
}

function diffNode(dom, vnode) {
  // ...
}
```

diffNode 的总体思路是：

1. 如果 vnode 是字符串或数字，更新或创建新的文本节点
2. 如果 vnode 是函数或组件，更新或创建 Component
3. 非文本 DOM 节点，更新或创建对应 DOM
4. 对比子节点
