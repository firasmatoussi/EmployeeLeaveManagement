import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { DetailsComponent } from './details/details.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesComponent,
    data: { title: 'Liste des employées' }
  },
  {
    path: 'employee-details/:id',
    component: DetailsComponent,
    data: { title: 'détails de l'+'employé' }
  },
  {
    path: 'employee-add',
    component: EmployeeAddComponent,
    data: { title: 'Ajouter un employé' }
  },
  {
    path: 'employee-edit/:id',
    component: EmployeeEditComponent,
    data: { title: 'Modifier cet employé' }
  },
  { path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
