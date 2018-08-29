import React from 'react';

function ListItem(props){
  const listItems = props.todoItemList.map((item, index) => {
  let className = "todo-item"
  if (props.clicked[index]){className+= " strike-through"}
  return <li key={index} className={className}
  onClick={() => props.setClickedTrue(index)}>{item}</li>}
  )
  return listItems
}

class Display extends React.Component {  
  
  filterTodoItemList = (filterType) => {
    let todoItemList = this.props.todoItemList
    let clicked = this.props.clicked
    let filtered = []
    if (filterType === 'COMPLETED') {
      for (let index = 0; index < todoItemList.length; index++) {
        if(clicked[index]){
          filtered.push(todoItemList[index])
        }
      }
      return filtered
    }
    else if (filterType === 'REMAINING') {
      for (let index = 0; index < todoItemList.length; index++) {
        if(!clicked[index]){
          filtered.push(todoItemList[index])
        }
      }
      return filtered
    }
    else {
      return todoItemList
    }
  }

  render() {
    return (
      <div>
      <ul>
        <ListItem todoItemList={this.filterTodoItemList(this.props.filter)} setClickedTrue={this.props.setClickedTrue}
        clicked={this.props.clicked}/>
      </ul>
      </div>
    );
  }
}

export default Display;
