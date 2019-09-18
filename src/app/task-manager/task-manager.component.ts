import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { TASKROUTES } from "./task-routes";

@Component({
    templateUrl: "./task.component.html"
})

export class TaskManagerComponent {

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    addTask(event: any): void {
        this.router.navigate([TASKROUTES.ADD], { relativeTo: this.route });
    }

    viewTask(event: any): void {
        this.router.navigate([TASKROUTES.VIEW], { relativeTo: this.route });
    }
}