import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { TaskApiService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  parents$: Observable<Task[]>;
  addTaskForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private service: TaskApiService) { }

  ngOnInit() {
    this.addTaskForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      parentTaskId: [''],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });

    this.parents$ = this.service.getAllTasks();
  }

  onSubmit(): void {
    if (this.addTaskForm.valid) {
      this.service.post(this.addTaskForm.value as TaskDetailViewModel).subscribe(() => {
        alert("Saved task successfully...");
        this.onReset();
      }, () => alert("Error whilst saving your data"));
    }
  }

  onReset(): void {
    this.addTaskForm.reset();
  }
}