import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TaskSearchModel } from './task-search.model';

@Pipe({
    name: 'taskSearch',
    pure: false
})
export class TaskSearchFilterPipe implements PipeTransform {

    constructor(private datePipe: DatePipe) {}

    transform(items: any[], filter: TaskSearchModel): any {
        if (!items || !filter) {
            return items;
        }

        if (filter.task) {
            items = items.filter(item => item.name.toLowerCase().indexOf(filter.task.toLowerCase()) !== -1);
        }

        if (filter.parentTask) {
            items = items.filter(item => {
                return item.parentTask ?
                    item.parentTask.name.toLowerCase().indexOf(filter.parentTask.toLowerCase()) !== -1 : false;
            });
        }

        if (filter.priorityFrom) {
            items = items.filter(item => item.priority >= filter.priorityFrom);
        }

        if (filter.priorityTo) {
            items = items.filter(item => item.priority <= filter.priorityTo);
        }

        if (filter.startDate) {
            items = items.filter(item => this.datePipe.transform(item.startDate, 'yyyy-MM-dd') === filter.startDate);
        }

        if (filter.endDate) {
            items = items.filter(item => {
                return this.datePipe.transform(item.endDate, 'yyyy-MM-dd') === filter.endDate;
            });
        }
        
        return items;
    }   
}
