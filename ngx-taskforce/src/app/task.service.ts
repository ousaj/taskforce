import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  readonly GET_TASKS_QUERY: string = 'http://localhost:8080/getTasks';
  readonly GET_TASK_QUERY: string = 'http://localhost:8080/getTask?id=';
  readonly DELETE_TASK_QUERY: string = 'http://localhost:8080/deleteTask?id=';

  async getTasks(): Promise<Task[]> {
    const data = await fetch(this.GET_TASKS_QUERY);

    return await data.json() ?? [];
  }

  async deleteTask(taskId: number) {
    const deletionQuery = `${this.DELETE_TASK_QUERY}${taskId}`;

    await fetch(deletionQuery, { method: 'DELETE' });
  }

  async getDetails(taskId: number): Promise<Task> {
    const getTaskQuery = `${this.GET_TASK_QUERY}${taskId}`;
    const data = await fetch(getTaskQuery);

    return await data.json() ?? null;
  }
}
