import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = "";

@Injectable()
export class TaskApiService {

  constructor(
    private http: Http
  ) {
  }

  public getAllTasks(): Observable<Task[]> {
    return this.http
      .get(API_URL + '/todos')
      .map(response => {
        const todos = response.json();
        return todos.map((todo) => new Task(todo));
      })
      .catch(this.handleError);
  }

  public createTask(todo: Task): Observable<Task> {
    return this.http
      .post(API_URL + '/todos', todo)
      .map(response => {
        return new Task(response.json());
      })
      .catch(this.handleError);
  }

  public getTaskById(todoId: number): Observable<Task> {
    return this.http
      .get(API_URL + '/todos/' + todoId)
      .map(response => {
        return new Task(response.json());
      })
      .catch(this.handleError);
  }

  public updateTask(todo: Task): Observable<Task> {
    return this.http
      .put(API_URL + '/todos/' + todo.id, todo)
      .map(response => {
        return new Task(response.json());
      })
      .catch(this.handleError);
  }

  public deleteTaskById(todoId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/todos/' + todoId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}