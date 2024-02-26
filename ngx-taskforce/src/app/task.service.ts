import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  readonly taskQuery: string = 'http://localhost:8080/getTasks';

  constructor() { }

  async getTasks(): Promise<Task[]> {
    const data = await fetch(this.taskQuery);

    return await data.json() ?? [];
  }
}
