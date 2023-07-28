import { Component } from '@angular/core';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent {
  taskList:any
  constructor(public srvTodo:TodosService)
  {
    this.taskList = srvTodo.getTasks()
  }
}
