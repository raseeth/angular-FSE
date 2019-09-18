export class Task {
    static get EmptyTask(): Task {
      return new Task(undefined, undefined, undefined, undefined, undefined);
    }
    constructor(
        public id: number,
        public name: string,
        public parentName: string,
        public priority: number = 0,
        public startDate: Date,
        public endDate?: Date,
        public isComplete?: boolean) {
    }
}