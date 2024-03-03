import { Routes } from '@angular/router';
import { TasktableComponent } from './tasktable/tasktable.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    {
        path: '',
        component: TasktableComponent,
        title: 'Task table'
    },
    {
        path: 'details/:taskId',
        component: FormComponent,
        title: 'Task details'
    }
];
