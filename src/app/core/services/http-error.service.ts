import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertPopupComponent } from 'src/app/shared/popups/alert-popup/alert-popup.component';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {
  private errors = new BehaviorSubject<string[]>([]);

  constructor(private _ngbModal: NgbModal) { }

  showError(errors: string) { 
    const modalRef = this._ngbModal.open(AlertPopupComponent);
    modalRef.componentInstance.errorMessage = errors;
  }
}
