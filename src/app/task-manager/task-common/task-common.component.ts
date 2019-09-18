import { FormGroup, FormControl } from "@angular/forms";
import { Component, Input, OnInit } from "@angular/core";
import { Parent } from '../models/parent.model';
import { Observable, of } from "rxjs";

@Component({
  selector: "task-common",
  templateUrl: "./task-common.component.html"
})

export class TaskCommonComponent  implements OnInit {
    @Input() parents: Parent[] = [];
    @Input() isSubmitted: boolean;
    @Input() taskCommon: FormGroup;

    ngOnInit(): void {
    }

  get taskNameControl(): FormControl {
    return this.taskCommon.controls["name"] as FormControl;
  }

  get parentTaskNameControl(): FormControl {
    return this.taskCommon.controls["parentTaskName"] as FormControl;
  }

  get priorityControl(): FormControl {
    return this.taskCommon.controls["priority"] as FormControl;
  }

  get startDateControl(): FormControl {
    return this.taskCommon.controls["startDate"] as FormControl;
  }

  private getSourceAsObservable(taskName: string): Observable<any> {
    const filteredData = this.parents.filter((item: Parent) => {
      return item ? item.name.toLowerCase().indexOf(taskName) >= 0 : undefined;
    }).map(x => x.name);

    return of(filteredData);
  }
}