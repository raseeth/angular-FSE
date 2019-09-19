import { Component, OnInit } from '@angular/core';
import { TaskApiService } from '../services/task.service';
import { TaskMock } from '../services/task.mock';
import { TaskDetailViewModel } from '../models/task-detail.model';
import { Observable, of } from 'rxjs';
import { TaskSearchModel } from '../task-search/task-search.model';

@Component({
  templateUrl: './task-view.component.html'
})
export class TaskViewComponent implements OnInit {

  taskFilter = new TaskSearchModel();

  taskDetails$: Observable<TaskDetailViewModel[]>;

  constructor(private taskService: TaskApiService, private taskMock: TaskMock) {
  }

  ngOnInit() {
    this.taskDetails$ = of(this.taskMock.defaultTasks());
  }

  onEndTask(task: TaskDetailViewModel): void {
    this.taskService.updateTask(task).subscribe();
  }
}
