import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

import {ContactMessageModel} from './contact-message.model';
import {ContactService} from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  wasFormSubmitted = false;
  isLoading = true;
  private contactMessage: ContactMessageModel;
  contactMessageStatus: string;

  @ViewChild('contactForm', {static: false}) form: NgForm;


  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
  }

  onClickBackdrop() {
    this.wasFormSubmitted = !this.wasFormSubmitted;
    this.contactMessageStatus = '';
  }

  onSubmit() {
    // check form validity - uncheck after test
    if (this.form.invalid) {
      return;
    }

    // display modal, backdrop and loading animation
    this.wasFormSubmitted = true;
    this.isLoading = true;

    this.setupContactFormMessage();

    this.contactService.sendContactEmail(this.contactMessage)
      .subscribe((responseData) => {
          const response = responseData.message;
          this.isLoading = false;
          this.contactMessageStatus = response;
        },
        error => {
          // todo del
          // console.log(error);
          this.setupErrorResponseMessage(error);
        });

    this.form.reset();
  }

  setupContactFormMessage() {
    // todo validate values? validate on server side and send response?
    this.contactMessage = new ContactMessageModel(
      this.form.value.name,
      this.form.value.email,
      this.form.value.subject,
      this.form.value.message
    );
  }

  private setupErrorResponseMessage(error) {
    const isBackendConnectionError = error.status === 0;
    const couldNotConnectToBackendEndpoint = error.status === 404;
    if (isBackendConnectionError || couldNotConnectToBackendEndpoint) {
      this.setupServerConnectionErrorMessage();
      return;
    }
    const errorInformation = error.error.message;
    this.isLoading = false;
    this.contactMessageStatus = errorInformation;

  }

  private setupServerConnectionErrorMessage() {
    this.isLoading = false;
    this.contactMessageStatus = 'Could not connect to server.';
  }
}
