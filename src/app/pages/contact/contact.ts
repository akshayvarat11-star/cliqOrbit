import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { inject } from '@angular/core';
import { ContactService } from '../../data/contact.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly contact = inject(ContactService);
  submitting = false;
  success = false;
  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    service: ['', [Validators.required]],
    message: ['', [Validators.required]]
  });
  readonly services = ['Programmatic Advertising','Email Marketing','Web Design & Development','Branding & Strategy','AI-Powered Marketing','General Enquiry'];

  submit() {
    if (this.form.invalid || this.submitting) { this.form.markAllAsTouched(); return; }
    this.submitting = true;
    this.contact.submit(this.form.getRawValue()).subscribe({
      next: () => { this.success = true; this.submitting = false; this.form.reset(); },
      error: () => { this.success = true; this.submitting = false; this.form.reset(); }
    });
  }
}
