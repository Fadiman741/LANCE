import { Component, OnInit } from '@angular/core';
import {EmailService } from '../service/email.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formData = {
    name: '',
    email: '',
    message: ''
  };
  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }
  submitForm() {
    // Call the email service to send the email
    this.emailService.sendEmail(this.formData).subscribe(
      response => {
        console.log('Email sent successfully:', response);
        // Handle success, show a success message, etc.
      },
      error => {
        console.error('Failed to send email:', error);
        // Handle errors, show an error message, etc.
      }
    );

    // Optional: Clear the form fields after submission
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }

}
