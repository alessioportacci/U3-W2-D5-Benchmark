import { Injectable } from '@angular/core';
import { Todo } from './todo';

//Classe da cui creerò i vari oggetti ToDo
class TodoClass implements Todo
{
  id: number;
  title: string;
  completed: boolean;

  //Costruttore
  constructor(id:number, title:string, completed:boolean = false)
  {
    this.id = id
    this.title = title
    this.completed = completed
  }
}

@Injectable({
  providedIn: 'root'
})
export class TodosService
{
  readonly url:string =  "http://localhost:3000/data"
  public isLoaded:boolean

  //Costruttore
  constructor()
  {
    this.isLoaded = false
  }

  //Metodo per ottenere tutti i tasks
  async getTasks():Promise<TodoClass[]>
  {
    this.isLoaded = false
    return await fetch(this.url, {method: "GET"})
      .then(response =>
        {
          return response.json()
        })
      .then(json =>
        {
          this.isLoaded = true
          return json
        })
  }

  //Metodo per ottenere un tasks
  async getTask(id:number):Promise<TodoClass>
  {
    return await fetch(`${this.url}/${id}`, {method: "GET"})
      .then(response =>
        {
          return response.json()
        })
      .then(json =>
        {
          return json
        })
  }

  //Metodo per aggiungere un task restituisce una promise con TodoClass array
  async postTask(text:string):Promise<void>
  {
    let task:TodoClass = new TodoClass(0, text)
    await fetch(this.url,
          {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
          })
  }

  //Metodo per modificare un oggetto specifico
  async putTask(id:number, newTitle:string, completed:boolean = false):Promise<void>
  {
      const taskUpdate = new TodoClass(id, newTitle, completed)
      await fetch(`${this.url}/${id}`,
      {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskUpdate)
      })
  }

  //Metodo per eliminare un oggetto specifico
  async deleteTask(id:number):Promise<void>
  {
      await fetch(`${this.url}/${id}`,
      {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
      })
  }

}

