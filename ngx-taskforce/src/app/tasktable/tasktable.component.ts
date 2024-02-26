import { Component, inject} from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasktable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasktable.component.html',
  styleUrl: './tasktable.component.css'
})
export class TasktableComponent {
  taskService: TaskService = inject(TaskService);
  tasks: Task[] = [];

  constructor() {
    this.taskService.getTasks().then((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  getDetails(taskId: number) {
    console.log('getDetails()', taskId);
  }

  deleteTask(taskId: number) {
    console.log('deleteTask()', taskId);
  }
}
