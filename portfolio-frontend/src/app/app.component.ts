// src/app/app.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ModalService } from './services/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ModalComponent, ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'reach-me-portfolio';
  isContactModalOpen = false;
  private subscription = new Subscription();
  
  constructor(private modalService: ModalService) {}
  
  ngOnInit() {
    this.subscription.add(
      this.modalService.contactModalOpen$.subscribe(isOpen => {
        this.isContactModalOpen = isOpen;
      })
    );
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  closeContactModal() {
    this.modalService.closeContactModal();
  }
}