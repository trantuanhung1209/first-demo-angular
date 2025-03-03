import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'first-demo';
  // count = 0;
  // increase() {
  //   this.count++;
  // }
  // users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Jack' }];

  // name = "";


  // search //
  // searchText = "";
  // listItems = [
  //   { id: 1, name: 'John' },
  //   { id: 2, name: 'Jane' },
  //   { id: 3, name: 'Jack' },
  //   { id: 4, name: 'Jill' },
  //   { id: 5, name: 'James' },
  //   { id: 6, name: 'Jenny' },
  //   { id: 7, name: 'Jesse' },
  //   { id: 8, name: 'Jasmine' },
  //   { id: 9, name: 'Jared' },
  //   { id: 10, name: 'Jocelyn' },
  // ]
  // getResultsSearch() {
  //   if (this.searchText === "") {
  //     return [];
  //   } else {
  //     return this.listItems.filter(item => item.name.toLowerCase().includes(this.searchText.toLowerCase()));
  //   }
  // }
  // end search //



  // todo list //
  todoText = "";
  todoList: Todo[] = [];
 

  addTodo = () => {
    if (this.todoText !== "") {
      const todo: Todo = {
        id: this.todoList.length + 1,
        text: this.todoText,
        isDone: false
      }
      this.todoList.push(todo);
      this.todoText = "";
    }
  }

  removeTodo = (id: number) => {
    this.todoList = this.todoList.filter(todo => todo.id !== id);
  }

  updateTodo = (id: number) => {
    const todo = this.todoList.find(todo => todo.id === id);
    if (todo) {
      todo.isDone = !todo.isDone;
    }
  }

  editTodo = (id: number) => {
    const todo = this.todoList.find(todo => todo.id === id);
    if (todo) {
      this.todoText = todo.text;
      this.removeTodo(id);
    }
  }
  // end todo list //

}
