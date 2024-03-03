import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  readonly taskQuery: string = 'http://localhost:8080/getTasks';
  readonly deletionQueryTemplate: string = 'http://localhost:8080/deleteTask?id=';

  async getTasks(): Promise<Task[]> {
    const data = await fetch(this.taskQuery);

    return await data.json() ?? [];
  }

  async deleteTask(taskId: number) {
    const deletionQuery = `${this.deletionQueryTemplate}${taskId}`;

    await fetch(deletionQuery, { method: 'DELETE' });
  }
}
