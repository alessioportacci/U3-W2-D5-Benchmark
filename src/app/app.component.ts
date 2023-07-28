import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'U3-W2-D5-Benchmark';
  public isTodosPage?:boolean
  public inputText:string = ""
  constructor(public srvTodos:TodosService)
  {}

  cambioPagina():void
  {
    this.isTodosPage = ! this.isTodosPage
  }
}
