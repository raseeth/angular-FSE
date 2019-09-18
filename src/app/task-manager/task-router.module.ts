import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TASKROUTES } from "./task-routes";
import { TaskManagerComponent } from './task-manager.component';

const taskRoutes: Routes = [
    { path: TASKROUTES.HOME, component: TaskManagerComponent,
        children: [
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(taskRoutes)],
    exports: [RouterModule]
})

export class TaskRouterModule {
}