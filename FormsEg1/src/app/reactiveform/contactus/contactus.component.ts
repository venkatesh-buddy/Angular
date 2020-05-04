import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ContactModel } from '../../model/ContactModel';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactForm: FormGroup;
  //contactModel = new ContactModel();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['Test2', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['Test Message'],
      phone: [''],
      notification: ['email']
    });


   /*  this.contactForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      message: new FormControl()
    }); */

    // For setting the value for all fields
   /*  this.contactForm.setValue({
       name: 'Test1',
       email: 'Test1@email.com',
       message: 'Test Message'
    }); */
    /* this.contactForm.patchValue({
      name: 'Test1',
      email: 'Test1@email.com',
      //message: 'Test Message'
    }); */

  }

  checkNotification(value: string): void {
    const phoneControl = this.contactForm.get('phone');
    const emailControl = this.contactForm.get('email');
    if (value === 'text') {
      phoneControl.setValidators(Validators.required);
      emailControl.clearValidators();
    } else if (value === 'email') {
      emailControl.setValidators([Validators.required, Validators.email]);
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
    emailControl.updateValueAndValidity();
  }

}
