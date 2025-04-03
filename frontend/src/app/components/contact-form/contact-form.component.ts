// src/app/components/contact-form/contact-form.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ModalService } from '../../services/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  formSubmitted = false;
  submitSuccess = false;
  submitError = false;
  private subscription = new Subscription();
  
  constructor(
    private fb: FormBuilder, 
    private contactService: ContactService,
    private modalService: ModalService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  ngOnInit() {
    // Subscribe to modal status
    this.subscription.add(
      this.modalService.contactModalOpen$.subscribe(isOpen => {
        // If modal is closed, reset form validation but keep the values
        if (!isOpen && this.formSubmitted) {
          this.resetFormValidation();
        }
      })
    );
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  // New method to reset only validation, not values
  resetFormValidation() {
    this.formSubmitted = false;
    
    // Mark all form controls as "untouched"
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsUntouched();
    });
    
    // Reset success and error messages
    this.submitSuccess = false;
    this.submitError = false;
  }
  
  onSubmit() {
    this.formSubmitted = true;
    
    if (this.contactForm.invalid) {
      return;
    }
    
    // Call the actual API now
    this.contactService.sendContactForm(this.contactForm.value)
      .subscribe({
        next: () => {
          this.submitSuccess = true;
          this.contactForm.reset();
          this.formSubmitted = false;
          
          // Reset success message after 5 seconds
          setTimeout(() => {
            this.submitSuccess = false;
          }, 5000);
        },
        error: (error) => {
          console.error('Error submitting form:', error);
          this.submitError = true;
          
          // Reset error message after 5 seconds
          setTimeout(() => {
            this.submitError = false;
          }, 5000);
        }
      });
  }
  
  // Helper functions for form validation in the template
  get nameControl() { return this.contactForm.get('name'); }
  get emailControl() { return this.contactForm.get('email'); }
  get subjectControl() { return this.contactForm.get('subject'); }
  get messageControl() { return this.contactForm.get('message'); }
}