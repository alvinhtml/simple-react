import Component from './component'

const React = {
  createElement,
  Component
}

function createElement(tag, attrs, ...children) {
  return {
    tag,
    attrs,
    children
  }
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
