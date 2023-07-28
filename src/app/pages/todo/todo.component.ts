import { Component, Input } from '@angular/core';
import { TodosService } from './../../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  taskList:any
  constructor(public srvTodo:TodosService)
  {
    this.taskList = srvTodo.getTasks()
  }
}
