import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddVideoComponent } from './components/add-video/add-video.component';

const routes: Routes = [{ path: 'add', component: AddVideoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
