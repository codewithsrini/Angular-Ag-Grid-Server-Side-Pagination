import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsHomeComponent } from './reports-home/reports-home.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/services/auth.guard';

// Routing
const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    component: ReportsHomeComponent
  }
]

@NgModule({
  declarations: [ReportsHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReportsModule { }
