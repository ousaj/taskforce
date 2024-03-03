import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-form',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './form.component.html',
    styleUrl: './form.component.css'
})
export class FormComponent {

    taskService: TaskService = inject(TaskService);
    taskId: number = 0;
    task: Task | undefined;

    constructor(
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.taskId = Number(this.route.snapshot.paramMap.get('taskId'));
        this.getDetails(this.taskId);
    }

    getDetails(taskId: number) {
        this.taskService.getDetails(taskId).then((task: Task) => {
            this.task = task;
            console.log('task', this.task);
        });
    }
}
