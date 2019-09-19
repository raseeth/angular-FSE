import { NgModule } from "@angular/core";
import { TaskManagerComponent } from "./task-manager.component";
import { TaskRouterModule } from "./task-router.module";
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskDetailsComponent } from './task-detail/task-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { TaskApiService } from './services/task.service';
import { TaskSearchFilterPipe } from './task-search/task-search.filter';
import { HttpClientModule } from '@angular/common/http';
import { TaskMock } from './services/task.mock';

@NgModule({
    imports: [ TaskRouterModule, ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule ],
    declarations: [ TaskManagerComponent, TaskAddComponent, TaskViewComponent, TaskSearchFilterPipe, TaskDetailsComponent ],
    providers: [ TaskApiService, DatePipe, TaskMock ]
})

export class TaskModule {
}