import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = "";

@Injectable()
export class TaskApiService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getAllTasks(): Observable<Task[]> {
    return this.httpClient.get(`${API_URL}/task`).pipe(map((response: Task[]) => response));
  }

  public createTask(task: Task): Observable<any> {
    return this.httpClient.post(`${API_URL}/tasks`, task);
  }

  public getTaskById(taskId: number): Observable<Task> {
    return this.httpClient.get(`${API_URL}/task/${taskId}`).pipe(map((response:Task) => response));
  }

  public updateTask(task: Task): Observable<any> {
    return this.httpClient.put(`${API_URL}/tasks/${task.id}`, task);
  }
}