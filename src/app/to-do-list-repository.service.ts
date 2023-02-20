import { Injectable } from '@angular/core';
import { IToDo } from './interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class ToDoListRepositoryService {

  toDoList : IToDo[] = [
    {task: "Water the plants", completed: true},
    {task: "Walk the dog", completed: false},
    {task: "Cook dinner", completed: false},
    {task: "Finish Grand Circus Lab", completed: true},
  ]

  constructor() { }

  getToDoList(): IToDo[] {
    return this.toDoList
  }
}
