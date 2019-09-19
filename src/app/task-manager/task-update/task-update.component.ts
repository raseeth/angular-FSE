import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskApiService } from '../services/task.service';
import { takeUntil, map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../models/task.model';
import { DatePipe } from '@angular/common';

@Component({
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  updateTaskForm: FormGroup;
  parentTasks$: Observable<Task[]>;
  
  private taskId: number;
  
  constructor(private formBuilder: FormBuilder,
    private taskService: TaskApiService,
    private route: ActivatedRoute,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.initializeForm();

    this.getData();
  }

  onSubmit(): void {
    if (this.updateTaskForm.valid) {
      this.taskService.updateTask(this.updateTaskForm.value as Task).subscribe(() => {
        alert("Saved task successfully...");
      }, () => alert("Error whilst saving your data"));
    }
  }

  onReset(): void {
    this.updateTaskForm.reset();
  }

  private getData() {
    this.route.paramMap.subscribe(params => {
      this.taskId = parseInt(params.get("id"));
      this.taskService.getTaskById(this.taskId).subscribe((x: Task) => {
          x.startDate = this.datePipe.transform(x.startDate, 'yyyy-MM-dd');
          x.endDate = this.datePipe.transform(x.endDate, 'yyyy-MM-dd');
          this.updateTaskForm.patchValue(x);
        });
    });
  }

  private initializeForm() {
    this.parentTasks$ = this.taskService
      .get().pipe(map((x: TaskDetailViewModel[])=> x.filter(x=>x.id !== this.taskId)));
    
    this.updateTaskForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      parentTaskId: [''],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      id: ['', [Validators.required]]
    });
  }
}
