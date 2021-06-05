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


export default React
