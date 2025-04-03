// src/app/services/modal.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private contactModalState = new BehaviorSubject<boolean>(false);
  contactModalOpen$ = this.contactModalState.asObservable();

  openContactModal() {
    this.contactModalState.next(true);
  }

  closeContactModal() {
    this.contactModalState.next(false);
  }
}