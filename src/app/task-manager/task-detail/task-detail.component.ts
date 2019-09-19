import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskDetailViewModel } from '../models/task-detail.model';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html'
})
export class TaskDetailsComponent {
  @Input() taskDetail: TaskDetailViewModel;
  @Output() onEndTask = new EventEmitter<TaskDetailViewModel>();

  constructor() { }

  endTask(taskDetail: TaskDetailViewModel): void {
    taskDetail.taskEnded = true;
    this.onEndTask.emit(taskDetail);
  }
}
