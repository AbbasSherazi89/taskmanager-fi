import { Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItem } from '../../models/task-item.model';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-task-list-item',
  imports: [CommonModule],
  templateUrl: './task-list-item.html',
  styles: ``,
})
export class TaskListItem {
  taskItem = input.required<TaskItem>();
  statusValues = ['todo', 'inprogress', 'completed'];
  taskService=inject(TaskService);
  action = computed(() => {
    const taskItemValue = this.taskItem();
    return this.statusValues.filter(x => taskItemValue.status !== x);
  });

  markAs(text: string, updatedStatus:string){
    this.taskService.markAsStatus(text, updatedStatus);
  }
}
