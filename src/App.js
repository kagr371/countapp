// import logo from './logo.svg';
import React from 'react';
// import Add from './components/Add';
// import ToDoList from './components/ToDoList';
// import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      value:'',
      todos:[],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //入力された文字列
  handleChange(e){
    this.setState({value: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.value.length === 0){
      return;
    }
    this.state.todos.push(this.state.value)
    this.setState({
      todos: this.state.todos,
      values: '',
      });
  }

  render(){
    return(
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input id="new-todo"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button>
            追加
          </button>
        </form>
        <ToDoList
        todos = {this.state.todos}
        handleRemove={this.handleRemove}
        />
    </React.Fragment>
    );
  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>
//           hello
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
