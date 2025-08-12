import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../services/task-service';
@Component({
  selector: 'app-task-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.html',
  styles: ``,
})
export class TaskForm {

  taskService=inject(TaskService);

  taskForm = new FormGroup({
    task: new FormControl('', {
      nonNullable: true,
    }),
    status: new FormControl('todo', {
      nonNullable: true,
    }),
  });

  submitNow(){
    const rawValue=this.taskForm.getRawValue();
    this.taskService.addTask(rawValue.task,rawValue.status);
    
  }
}
