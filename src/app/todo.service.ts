import { Injectable } from '@angular/core';
import { Init } from './init-todos';
@Injectable({
  providedIn: 'root'
})
export class TodoService extends Init {

  constructor() { 
    super();
    console.log("service initiated");
    this.load();
  }
  getTodos(){
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }
  addTodo(newTodo){
    var todos = this.getTodos();
    // Add New Todos
    todos.push(newTodo);
    // Set New Todos
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  deleteTodo(todoText){
    var todos = this.getTodos();
    for(var i=0;i<todos.length;i++)
    {
      if(todos[i].text == todoText)
      {
        todos.splice(i,1);
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  updateTodo(oldText,newText){
    var todos = this.getTodos();
    for(var i=0;i<todos.length;i++)
    {
      if(todos[i].text == oldText)
      {
        todos[i].text = newText;
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}

