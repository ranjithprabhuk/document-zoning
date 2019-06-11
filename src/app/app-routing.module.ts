import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadFormComponent, MedicalFormComponent } from './components';

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
    path: 'medical-form',
    component: MedicalFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [
    UploadFormComponent,
    MedicalFormComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
