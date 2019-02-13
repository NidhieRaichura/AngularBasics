import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.pattern(/^-?(0|[1-9]\d*)?$/)),
      dob: new FormControl(new Date()),
      address: this.formBuilder.group({
        houseno: new FormControl('', Validators.pattern(/^(0|[1-9][0-9]*)$/)),
        street: new FormControl(''),
        landmark: new FormControl(''),
        pincode: new FormControl('', Validators.pattern(/^-?(0|[1-6]\d*)?$/)),
        city: new FormControl(''),
        state: new FormControl('')
      }),
      alaises: this.formBuilder.array([
        this.formBuilder.control('')
      ]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmpassword: new FormControl('', [Validators.required])
    })
  }

  get alaises() {
    return this.signupForm.get('alaises') as FormArray;
  }

  addAlais() {
    this.alaises.push(this.formBuilder.control(''));
  }
}
