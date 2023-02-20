import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IToDo } from '../interfaces/todo';
import { ToDoListRepositoryService } from '../to-do-list-repository.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {

  task : string = ""
  completed : boolean = false

  toDoList : IToDo[] = [];
  constructor(private toDoRepo: ToDoListRepositoryService) { }
  ngOnInit(): void {
    this.toDoList = this.toDoRepo.getToDoList();
  }

  addTask(form:NgForm){
    let newTask = form.form.value.task;
    
    this.toDoList.push({
      task: newTask,
      completed: false,
    });
  }

  completeTask(): void {
    this.completed = !this.completed;
  }

}
