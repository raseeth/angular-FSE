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

  parents: Observable<Task[]>;
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: TaskApiService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      parentTaskId: [''],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });

    this.parents = this.service.getAllTasks();
  }

  onReset(): void {
    this.addForm.reset();
  }

  onSubmit(): void {
    if (this.addForm.valid) {
      this.service.updateTask(this.addForm.value as Task).subscribe(() => {
        this.onReset();
      }, () => alert("Error"));
    }
  }

  
}