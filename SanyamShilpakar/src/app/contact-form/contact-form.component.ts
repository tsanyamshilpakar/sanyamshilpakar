import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  standalone: false,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  form = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  sendEmail() {
    const subject = `Message from ${this.form.firstName} ${this.form.lastName}`;
    const body = `
Name: ${this.form.firstName} ${this.form.lastName}%0D%0A
Email: ${this.form.email}%0D%0A
Phone: ${this.form.phone}%0D%0A
Message: ${this.form.message}
    `;

    const mailtoLink = `mailto:shilpakar.tsanyam@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }

  
}
