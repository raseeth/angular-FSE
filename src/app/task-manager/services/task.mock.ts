import { Task } from '../models/task.model';

export class TaskMock {
    private tasks: Task[];
    private task: Task;

    constructor() {
        this.task = new Task(1, "Name", "Parent", 1, new Date("2019-01-16"), new Date("2019-01-16"), true);
        this.tasks = [
                new Task(1, "Name", "Parent", 1, new Date("2019-01-16"), new Date("2019-01-16"), true),
                new Task(1, "Name", "Parent", 1, new Date("2019-01-16"), new Date("2019-01-16"), true)
            ];
    }

    defaultTask(): Task {
        return this.task;
    }

    defaultTasks(): Task[] {
        return this.tasks;
    }
}
