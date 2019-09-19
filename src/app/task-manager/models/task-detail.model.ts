export class TaskDetailViewModel {
    constructor(
        public name: string,
        public parentTask: any,
        public priority: number,
        public startDate: string,
        public endDate: string,
        public taskEnded: boolean,
        public id?: number,
        public parentTaskId?: number
    ) {}
}
