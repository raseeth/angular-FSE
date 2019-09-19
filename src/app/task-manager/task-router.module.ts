import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TASKROUTES } from "./task-routes";
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskManagerComponent } from './task-manager.component';

const taskRoutes: Routes = [
    { path: TASKROUTES.HOME, component: TaskManagerComponent,
        children: [
          { path: TASKROUTES.ADD, component: TaskAddComponent },
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(taskRoutes)],
    exports: [RouterModule]
})

export class TaskRouterModule {
}