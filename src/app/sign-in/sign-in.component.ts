import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private usersService: UserService) { }

  ngOnInit(): void {
      this.signinForm = new FormGroup ({
        email: new FormControl,
        password: new FormControl
      })
  }

  onSubmit(){
    debugger
    // console.log(this.signinForm.value)
    // console.log(this.signinForm.value['email'], this.signinForm.value['password1'])
    this.usersService.login(this.signinForm.value['email'], this.signinForm.value['password'])
  }

  logout() {
    this.usersService.logout()
    console.log('logout!')
  }

}
