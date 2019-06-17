import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertPopupComponent } from './popups/alert-popup/alert-popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AlertPopupComponent
  ],
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  exports: [
    NgbModule.forRoot().ngModule,
    AlertPopupComponent,
  ]
})
export class SharedModule { }
