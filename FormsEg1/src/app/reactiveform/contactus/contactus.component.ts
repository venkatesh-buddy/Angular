import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { ContactModel } from '../../model/ContactModel';
import { of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactForm: FormGroup;
  mapErrormsg = new Map();

  //contactModel = new ContactModel();
  private validationStartMessages = {
    required: 'Please enter the start dates.'
  };
  private validationEndMessages = {
    required: 'Please enter the end dates.',
    match: 'start date cannot be less than end date'
  };
  dateStartErrorMsg: string;
  dateEndErrorMsg: string;
  messageError: string;
  availabilityDates: Date[] = new Array<Date>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['Test2', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
      phone: [''],
      notification: ['email'],
      rating: ['', [this.ratingRange(2, 5)]],
      availability: this.fb.group({
        startDte: ['', Validators.required],
        endDte: ['', Validators.required]
      }
        //, { validator: this.dateCompare }
      ),
      sendCatalogue: true,
      addresses: this.fb.array([this.constructAdress()])
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

    this.contactForm.get('notification').valueChanges.subscribe(value =>
      this.checkNotification(value));


    const strtDate = this.contactForm.get('availability.startDte');
    const endDate = this.contactForm.get('availability.endDte');

    strtDate.valueChanges.subscribe(
      v => {
        this.setMessage(strtDate, 'start');
        // this.availabilityDates.push(v);
        this.mapErrormsg.set('stDte', v);
      }
    );

    endDate.valueChanges.subscribe(
      v => {
        this.setMessage(endDate, 'end');
        // this.availabilityDates.push(v);
        // this.dateCompare(endDate);
        this.mapErrormsg.set('edDte', v);
        // this.dateCompare1(this.availabilityDates);
        this.dateCompare2();
      }
    );
    const msg = this.contactForm.get('message');

    msg.valueChanges.pipe(debounceTime(500)).subscribe(m => {
      console.log('msg::' + m);
      if (m != null && m !== '' && m.length < 10) {
        this.messageError = 'Please enter the message of max 10 characters';
      } else {
        this.messageError = '';
      }
    });
  }


  setMessage(c: AbstractControl, field: string): void {
    this.dateStartErrorMsg = '';
    this.dateEndErrorMsg = '';
    console.log('c value::' + c.value);
    let v: string;
    v = c.value;
    if (field === 'start') {
      if ((c.touched || c.dirty || c.pristine) && (c.value == null || c.value === '' || (v.length < 10))) {
        this.dateStartErrorMsg = Object.keys(c.errors).map(
          key => this.validationStartMessages[key]).join(' ');
      }
    } else {
      if ((c.touched || c.dirty || c.pristine) && (c.value == null || c.value === '' || (v.length < 10))) {
        this.dateEndErrorMsg = Object.keys(c.errors).map(
          key => this.validationEndMessages[key]).join(' ');
      }
    }
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

  ratingRange(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (c.value !== null && (isNaN(c.value) || c.value < 2 || c.value > 5)) {
        return { 'ranges': true };
      }
      return null;
    };
  }

  dateCompare(c: AbstractControl): { [key: string]: boolean } | null {
    let startControl = c.get('startDte');
    let endControl = c.get('endDte');
    if (startControl.value > endControl.value) {
      console.log('Not equal');
      return { 'match': true };
    }
    return null;

  }

  dateCompare1(dt: Date[]) {
    if (dt.length === 2) {
      if (dt[0] > dt[1]) {
        console.log('Not equal');
        this.dateEndErrorMsg = this.validationEndMessages.match;
        // return { 'match': true };
      }
    }
  }

  dateCompare2() {
    if (this.mapErrormsg.size > 0) {
      const stDt = this.mapErrormsg.get('stDte');
      const eDt = this.mapErrormsg.get('edDte');
      if (stDt > eDt) {
        this.dateEndErrorMsg = this.validationEndMessages.match;
      }
    }
  }

  constructAdress(): FormGroup {
    return this.fb.group({
      addressType: 'Home',
      st1Adr: '',
      st2Adr: '',
      pincode: ''
    })
  }

  get addresses(): FormArray {
    return this.contactForm.get('addresses') as FormArray;
  }

  addAddress() {
    this.addresses.push(this.constructAdress());
  }
}
