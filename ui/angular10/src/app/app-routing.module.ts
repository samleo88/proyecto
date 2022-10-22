import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import{ EmployeeComponent} from './employee/employee.component';
import{ DepartmentComponent} from './department/department.component';

import{ AlbumesComponent} from './albumes/albumes.component';
import{ FotosComponent} from './fotos/fotos.component';

const routes: Routes = [
{path:'albumes',component:AlbumesComponent},
{path:'fotos',component:FotosComponent},
{path:'employee',component:EmployeeComponent},
{path:'department',component:DepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
