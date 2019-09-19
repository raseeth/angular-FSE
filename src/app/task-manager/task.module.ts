import { NgModule } from "@angular/core";
import { TaskManagerComponent } from "./task-manager.component";
import { TaskRouterModule } from "./task-router.module";
import { TaskAddComponent } from './task-add/task-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

@NgModule({
    imports: [ TaskRouterModule, ReactiveFormsModule, FormsModule, CommonModule ],
    declarations: [ TaskManagerComponent, TaskAddComponent ],
    providers: [  ]
})

export class TaskModule {
}