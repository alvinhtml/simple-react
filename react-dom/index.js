const ReactDOM = {
  render(ele, root) {
    console.log("root",ele, root);
    root.appendChild(ele)
  }
}

export default ReactDOM
