import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { UserComponent } from './user/user.component';
import { canActivateGuardGuard } from './can-activate-guard.guard';
import { canDeactivateGuard } from './can-deactivate.guard';

export const routes: Routes = [
    {
        path: 'list',
        component: ListComponent,
        title: 'List',
        canActivate: [canActivateGuardGuard] //khai báo guard bảo vệ cho route hiện tại
        //typeGuard: [tenGuard]
    },
    {
        path: 'create',
        component: CreateComponent,
        title: 'Create',
        // canDeactivate: [canDeactivateGuard],
    },
    {
        //:tenParam
        path: 'detail/:user', 
        component: DetailComponent,
        title: 'Detail',
    },
    {
        path: 'edit/:project',
        component: EditComponent,
        title: 'Edit',
    },
    {
        path: 'admin',
        canActivateChild: [canActivateGuardGuard],
        children: [
            {
                path: 'projects',
                children: [
                    {
                        path: 'list',
                        component: ListComponent,
                    }
                ],
            },
            {
                path: 'users',
                component: UserComponent,
            }
        ]
    },
    {
        path: '**', //xử lý khi ng dùng nhập vào một route không hợp lệ
        component: NotFoundComponent,
    }
];
