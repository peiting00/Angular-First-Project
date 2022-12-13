import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent {
  // profileForm = new FormGroup({
  //   fName: new FormControl(''),
  //   lName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl(''),
  //   }),
  // });

  profileForm = this.fb.group({
    fName: ['test', Validators.required],
    lName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });

  onSubmit() {
    window.alert(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      fName: 'Nancy',
      lName: 'Choo',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  constructor(private fb: FormBuilder) {}

  //dynamic forms
  arrayForm = this.fb.group({
    username: ['', Validators.required],
    usertype: this.fb.group({
      admin: [''],
      user: [''],
      member: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });

  // get each instances,
  get aliases() {
    return this.arrayForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
