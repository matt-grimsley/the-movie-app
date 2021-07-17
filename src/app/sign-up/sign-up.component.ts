import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl,
      firstName: new FormControl,
      lastName: new FormControl,
      nickname: new FormControl,
      password: new FormControl,
      passwordConfirmation: new FormControl
    })
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

}
