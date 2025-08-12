import { Component, computed, inject, signal } from '@angular/core';
import { TaskForm } from './Components/task-form';
import { TaskList } from './Components/task-list/task-list';
import { TaskService } from './services/task-service';

@Component({
  selector: 'app-root',
  imports: [TaskForm, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  taskService = inject(TaskService);
  tasks = this.taskService.tasks;

  todoItem = computed(() => {
    const tasks = this.tasks();
    return tasks.filter((x) => x.status === 'todo');
  });
   inprogressItem = computed(() => {
    const tasks = this.tasks();
    return tasks.filter((x) => x.status === 'inprogress');
  }); 
  completedItem = computed(() => {
    const tasks = this.tasks();
    return tasks.filter((x) => x.status === 'completed');
  });
}
