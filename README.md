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

## 实现 React.createElemen 和 ReactDOM.render

React 的代码从 `ReactDOM.render()` 方法开始，render 方法接收两个参数，第一个是虚拟 Dom 对象，第二个是根节点，render 方法需要将虚拟 Dom 对象插入到根节点：

```js

const ele = (
  <div title="hello">Hello React!</div>
)

ReactDOM.render(ele, document.querySelector('#root'));
```

Jsx 语法经过 Babel 转换后，变为 React.createElemen() 语法:

```js
const ele = React.createElement("div", {
  title: "hello"
}, "Hello React!");
```

我们需要实现一个 React.createElement 方法，将 ele 转换成 Dom 对象，并实现一个 ReactDOM.render 方法，将 ele 对象插入到根节点。


```js
const React = {
  createElement
}

function createElement(tag, attrs, ...children) {
  const element = document.createElement(tag)

  // 设置属性
  setAttrs(element, attrs)

  // 追加子节点
  children.forEach((child) => {
    if (typeof child === 'string') {
        element.innerText = child
    } else {
      element.appendChild(child)
    }
  });
  return element
}

function setAttrs(element, attrs) {
  for (let key in attrs) {
    const value = attrs[key]

    // 处理 style 属性
    if (key === 'style') {
      if (typeof value === 'string') {
        element.style = value
      } else {
        for(let k in value) {
          element.style[k] = typeof value[k] === 'number' ? value[k] + 'px' : value[k]
        }
      }
    } else {
      element[key] = attrs[key]
    }
  }
}
```
>>>>>>> 0de7cf7... react-dom creactEelment
