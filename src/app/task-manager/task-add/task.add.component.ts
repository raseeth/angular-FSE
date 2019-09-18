import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { FormGroup, FormBuilder } from "@angular/forms";

import { TaskCommonModel } from "../models/task-common.model";
import { Task } from "../models/task.model";
import { TaskApiService } from "../services/task.service";
import { Parent } from "../models/parent.model";

@Component({
    templateUrl: "./add-task.component.html"
})

export class AddTaskComponent implements OnInit {

    addForm: FormGroup;
    formSubmitted = false;

    parentTasks$: Observable<Parent[]>;

    constructor(
      private fb: FormBuilder,
      private taskService: TaskApiService) {
      this.addForm = this.fb.group({"task": this.fb.group(new TaskCommonModel(Task.Default)) });
    }

    get taskForm(): FormGroup {
      return this.addForm.get("task") as FormGroup;
    }

    ngOnInit(): void {
      this.parentTasks$ = this.taskService.getAllTasks();
    }

    add(parentTasks: Parent[]): void {
      this.formSubmitted = true;

      if (!this.addForm.valid) {
        return;
      }

      const task = this.getTask(this.taskForm.value);

      this.taskService.post(task, parentTasks).subscribe(() => {
          this.parentTasks$ = this.taskService.getParentTasks();
          this.formSubmitted = false;
          this.reset();
        },
        (error) => {
          
      });
    }

    reset(): void {
      this.taskForm.reset();

      this.taskForm.controls["priority"].setValue(0);
    }

    private getTask(formValue: Task): Task {
      return new Task(
              undefined,
              formValue.name,
              formValue.parentTaskName,
              +formValue.priority,
              formValue.startDate ? new Date(formValue.startDate) : undefined,
              formValue.endDate ? new Date(formValue.endDate) : undefined);
    }
}
