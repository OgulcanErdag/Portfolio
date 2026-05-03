import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslationsService } from '../../services/translations.service';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  http = inject(HttpClient);
  translationData = inject(TranslationsService);

  isChecked = false;
  showCheckboxError = false;
  successMail = false;
  mailTest = false;

  placeholders = {
    name: '',
    email: '',
    message: '',
  };

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  ngOnInit() {
    this.resetPlaceholders();
  }

  @ViewChild('messageInput') messageInput!: ElementRef;

  focusTextArea(inputElement: HTMLElement) {
    inputElement.focus();
  }

  focusInput(inputElement: HTMLInputElement) {
    inputElement.focus();
  }

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      this.showCheckboxError = false;
    }
  }

  isEmailValid(email: string): boolean {
    const pattern = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
    return pattern.test(email);
  }

  post = {
    endPoint: 'https://ogulcan-erdag.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (!this.isChecked) {
      this.showCheckboxError = true;
      return;
    }

    if (!ngForm.valid) {
      this.showFormErrors(ngForm);
      return;
    }

    if (ngForm.submitted && ngForm.form.valid) {
      this.processFormSubmission(ngForm);
    }
  }

  processFormSubmission(ngForm: NgForm) {
    if (!this.mailTest) {
      this.submitForm(ngForm);
    } else {
      this.handleSubmitSuccess(ngForm);
      ngForm.resetForm();
    }
  }

  submitForm(ngForm: NgForm) {
    this.http
      .post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: () => {
          this.handleSubmitSuccess(ngForm);
          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  }

  showFormErrors(ngForm: NgForm) {
    if (ngForm.controls['name']?.invalid) {
      this.placeholders.name = this.translationData.getTranslation('CONTACTS.ERROR_NAME_REQUIRED');
    }
    if (ngForm.controls['email']?.invalid) {
      const hasPatternError = ngForm.controls['email'].errors?.['pattern'];
      this.placeholders.email = hasPatternError
        ? this.translationData.getTranslation('CONTACTS.ERROR_INVALID_EMAIL')
        : this.translationData.getTranslation('CONTACTS.ERROR_EMAIL_REQUIRED');
      this.contactData.email = '';
    }
    if (ngForm.controls['message']?.invalid) {
      this.placeholders.message = this.translationData.getTranslation('CONTACTS.ERROR_MESSAGE_REQUIRED');
    }
  }

  handleSubmitSuccess(ngForm: NgForm) {
    this.contactData = { name: '', email: '', message: '' };
    this.resetPlaceholders();
    this.successMail = true;
    this.isChecked = false;
    ngForm.resetForm();

    setTimeout(() => {
      this.successMail = false;
    }, 2000);
  }

  private resetPlaceholders() {
    this.placeholders.name = this.translationData.getTranslation('CONTACTS.PLACEHOLDER1');
    this.placeholders.email = this.translationData.getTranslation('CONTACTS.PLACEHOLDER2');
    this.placeholders.message = this.translationData.getTranslation('CONTACTS.PLACEHOLDER3');
  }

  getTranslation(key: string): string {
    return this.translationData.getTranslation(key);
  }

  scrollToInput(inputId: string) {
    const inputElement = document.getElementById(inputId);
    if (!inputElement) return;

    inputElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

    setTimeout(() => {
      inputElement.focus();
      inputElement.classList.add('highlight');
      setTimeout(() => {
        inputElement.classList.remove('highlight');
      }, 2000);
    }, 500);
  }
}
