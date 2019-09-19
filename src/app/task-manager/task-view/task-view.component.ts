import { Component, OnInit } from '@angular/core';
import { TaskApiService } from '../services/task.service';
import { TaskDetailViewModel } from '../models/task-detail.model';
import { Observable } from 'rxjs';
import { TaskSearchModel } from '../task-search/task-search.model';

@Component({
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  taskFilter = new TaskSearchModel();

  taskDetails$: Observable<TaskDetailViewModel[]>;

  constructor(private taskService: TaskApiService) {
  }

  ngOnInit() {
    this.taskDetails$ = this.taskService.getAllTasks();
  }

  onEndTask(task: TaskDetailViewModel): void {
    this.taskService.updateTask(task).subscribe();
  }
}
