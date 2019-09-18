import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TASKROUTES } from "./task-manager/task-routes";

const routes: Routes = [
    { path: "", redirectTo: TASKROUTES.HOME, pathMatch: "full" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RouteModule {
}