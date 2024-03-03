import { Component, inject } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

    constructor(private router: Router) {
        this.getTasks();
    }

    getTasks() {
        this.taskService.getTasks().then((tasks: Task[]) => {
            this.tasks = tasks;
        });
    }

    getDetails(taskId: number) {
        this.router.navigate(['/', 'details', `${taskId}`]);
    }

    deleteTask(taskId: number) {
        this.taskService.deleteTask(taskId).then(() => {
            this.getTasks();
        })
    }
}
