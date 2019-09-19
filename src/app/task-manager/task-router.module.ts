import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TASKROUTES } from "./task-routes";
import { TaskManagerComponent } from './task-manager.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskEditComponent } from './task-edit/task-edit.component';


const taskRoutes: Routes = [
    { path: TASKROUTES.HOME, component: TaskManagerComponent,
        children: [
          { path: TASKROUTES.ADD, component: TaskAddComponent },
          { path: TASKROUTES.VIEW, component: TaskViewComponent },
          { path: TASKROUTES.EDIT, component: TaskEditComponent }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(taskRoutes)],
    exports: [RouterModule]
})

export class TaskRouterModule {
}