export class Task {
    static get EmptyTask(): Task {
      return new Task(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    }
    constructor(
        public id: number,
        public name: string,
        public parentName: string,
        public priority: number = 0,
        public startDate: string,
        public endDate: string,
        public isComplete?: boolean) {
    }
}