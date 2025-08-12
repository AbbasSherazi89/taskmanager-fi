import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItem } from '../../models/task-item.model';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styles: ``
})
export class TaskList {
  heading=input.required<string>();
  tasks=input.required<TaskItem[]>();
}
