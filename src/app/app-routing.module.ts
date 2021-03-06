import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadFormComponent, DynamicFormComponent } from './components';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'upload',
    pathMatch: 'full',
  },
  {
    path: 'upload',
    component: UploadFormComponent,
  },
  {
    path: 'form/:formType',
    component: DynamicFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
