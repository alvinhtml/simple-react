import React from '../react/index.js';
import ReactDOM from '../react-dom/index.js';


// const ele = (
//   <div className="box" title="hello" style={{color: '#d3d3d3'}}>
//     <h3 className="title">Simple React</h3>
//   </div>
// )

function Main() {
  return (
    <div title="hello" style={{color: '#9adfc1'}}>hello, react</div>
  );
}


ReactDOM.render(<Main title="this title" />, document.querySelector('#root'))
