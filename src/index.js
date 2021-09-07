import React from '../react/index.js';
import ReactDOM from '../react-dom/index.js';


// const ele = (
//   <div className="box" title="hello" style={{color: '#d3d3d3'}}>
//     <h3 className="title">Simple React</h3>
//   </div>
// )

// function Main() {
//   return (
//     <div title="hello" style={{color: '#9adfc1'}}>hello, react</div>
//   );
// }

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      num: 0
    }
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick() {
    this.setState({
      num: this.state.num + 1
    })
  }

  render() {
    return (
      <div title="hello" style={{color: '#9adfc1'}}>
        Hello React <span>{this.state.num}</span> <button onClick={this.handleClick.bind(this)}>摸我</button>
      </div>
    )
  }
}


ReactDOM.render(<Main title="this title" />, document.querySelector('#root'))
