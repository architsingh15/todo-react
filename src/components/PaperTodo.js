import React from 'react';
import AddBar from "./AddBar";
import Display from "./Display";
import './PaperTodo.css'
import Reset from './Reset';
import Filter from './Filter';
import Summary from './Summary';

function Heading(props) {
  return <h1>{props.heading}</h1>;
}

class PaperTodo extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      todoItems: [],
      clicked: [],
      filter: null,
    }
    this.addTodoItem = this.addTodoItem.bind(this)
    this.setClickedTrue = this.setClickedTrue.bind(this)
    this.resetTodoItemsList = this.resetTodoItemsList.bind(this)
  }

  addFilter = (filter) => {
    this.setState({filter})
  }

  addTodoItem = (todoItem) => {
    let todoItems = this.state.todoItems
    let clicked = this.state.clicked
    todoItems.push(todoItem)
    clicked.push(false)
    this.setState({todoItems})
    this.setState({clicked})
  }

  setClickedTrue = (index) => {
    let clicked = this.state.clicked
    clicked[index] = !clicked[index]
    this.setState({clicked})
  }

  resetTodoItemsList = () => {
    let todoItems = this.state.todoItems
    todoItems = []
    this.setState({todoItems})
  }

  countItems = () => {
    let remaining = 0;
    let completed = 0;
    for (let index = 0; index < this.state.clicked.length; index++) {
      if(this.state.clicked[index]){
        completed++;
      }
      else if(!this.state.clicked[index]){
        remaining++;
      }
    }
    return [remaining, completed]
  }

  render() {
    return (
      <div>
      <Heading heading="Paper Todo"/>
      <Summary count={this.countItems()}/>
      <AddBar addTodoItem={this.addTodoItem}/>
      <Display todoItemList={this.state.todoItems} setClickedTrue={this.setClickedTrue}
      clicked={this.state.clicked} filter={this.state.filter}/>
      <Reset resetTodoItemsList={this.resetTodoItemsList}/>
      <Filter addFilter={this.addFilter}/>
      </div>
    );
  }
}

export default PaperTodo;
