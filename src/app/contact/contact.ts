import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

interface ContactForm {
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  form: ContactForm = {
    message: '',
  };

  send() {
    emailjs
      .send(
        'service_7ixyg7s',
        'template_bb1m979',
        { ...this.form },
        {
          publicKey: 'owLQs_xuL2eob_FWG',
        },
      )
      .then(() => {
        alert('Message Sent!');
      });
  }
}
