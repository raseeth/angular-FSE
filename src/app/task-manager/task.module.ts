import { NgModule } from "@angular/core";
import { TaskManagerComponent } from "./task-manager.component";
import { TaskRouterModule } from "./task-router.module";

@NgModule({
    imports: [ TaskRouterModule ],
    declarations: [ TaskManagerComponent ],
    providers: [  ]
})

export class TaskModule {
}