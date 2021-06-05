import React from '../react/index.js';
import ReactDOM from '../react-dom/index.js';


const ele = (
  <div className="box" title="hello" style={{color: '#d3d3d3'}}>
    <h3 className="title">Simple React</h3>
  </div>
)

// function ele() {
//   return (
//     <div title="hello">hello, react</div>
//   );
// }

console.log("ReactDOM", ReactDOM);

ReactDOM.render(ele, document.querySelector('#root'));
