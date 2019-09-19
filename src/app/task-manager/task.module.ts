import { NgModule } from "@angular/core";
import { TaskManagerComponent } from "./task-manager.component";
import { TaskRouterModule } from "./task-router.module";
import { TaskAddComponent } from './task-add/task-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { TaskApiService } from './services/task.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [ TaskRouterModule, ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule ],
    declarations: [ TaskManagerComponent, TaskAddComponent ],
    providers: [ TaskApiService ]
})

export class TaskModule {
}