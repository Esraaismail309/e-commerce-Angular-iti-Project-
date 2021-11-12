import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  addressForm = new FormGroup({});
  address: FormArray;
  constructor(private fb: FormBuilder) { }
  registerForm = new FormGroup({})

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nameInput: ['', [Validators.required, Validators.minLength(3)]],
      emailInput: ['', [Validators.required, Validators.email]],
      userNameInput: ['', [Validators.required, Validators.pattern("^[a-zA-Z\-_]{0,30}$")]],
      passwordInput: ['', [Validators.required, Validators.minLength(8)],
        Validators.pattern("^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$")],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      address: this.fb.array([])

    }, { validator: this.passwordsMatched })
  }
  // confirm password fun
  passwordsMatched(fm: FormGroup) {
    return fm.controls['passwordInput'].value == fm.controls['confirmPassword'].value ? null : { mismatch: true }
  }

  // formsArray validation
  addItem(): void {
    this.address = this.registerForm.controls.address as FormArray;
    this.address.push(this.fb.group({
      address: ['', [Validators.required, Validators.pattern("/^\S+@\S+\.\S+$")]],
      street: ['', [Validators.required, Validators.pattern("/^[a-zA-Z][0-9]{1,}?$")]],
      country: ['', [Validators.required, Validators.pattern("^[a-zA-Z]{1,}$")]],
      city: ['', [Validators.required, Validators.pattern("^[a-zA-Z]{1,}$")]]
    }));

  }
  createAddress() {
    this.address.value;
  }

  // getters
  get registerFormControls() {
    this.registerForm.controls.address;
    return this.registerForm.controls;
  }
  submitRegisterForm() {
    this.registerForm.value;

  }

  deleteAddress(item) {
    let addValue = this.registerForm.controls.address as FormArray
    addValue.removeAt(item)
  }
}

