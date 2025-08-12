import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItem } from '../../models/task-item.model';
import { TaskListItem } from "../task-list-item/task-list-item";

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, TaskListItem],
  templateUrl: './task-list.html',
  styles: ``
})
export class TaskList {
  heading=input.required<string>();
  tasks=input.required<TaskItem[]>();
}
