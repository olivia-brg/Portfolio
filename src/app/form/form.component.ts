import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  emailForm: FormGroup;
  submitStatus: 'success' | 'error' | null = null;
  statusMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {}

  public sendEmail() {
    if (this.emailForm.valid) {
      const serviceID = 'service_g49j9h6';
      const templateID = 'template_r676l4g';
      const userID = 'KBXbTTF11_u7Vgg5b';
      
      emailjs.send(serviceID, templateID, {
        name: this.emailForm.get('name')?.value,
        email: this.emailForm.get('email')?.value,
        message: this.emailForm.get('message')?.value
      }, userID)
        .then((result: EmailJSResponseStatus) => {
          this.submitStatus = 'success';
          this.statusMessage = 'Votre message a été envoyé avec succès !';
          this.emailForm.reset();
        }, (error) => {
          this.submitStatus = 'error';
          this.statusMessage = "Une erreur s'est produite. Veuillez réessayer ou choisir un autre moyen de contact.";
        });
    }
  }
}