import { Routes } from '@angular/router';
import { TasktableComponent } from './tasktable/tasktable.component';

export const routes: Routes = [
    {
        path: '',
        component: TasktableComponent,
        title: 'Task table'
    }
];
