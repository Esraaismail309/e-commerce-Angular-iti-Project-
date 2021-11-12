import { LogInService } from './../../log-in.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private logInService: LogInService) { }
  loginForm: { emailInput: string, passwordInput: string } = {
    emailInput: '',
    passwordInput: ''
  }
  ngOnInit(): void {

  }
  submitData(loginForm) {
    alert(`you are logged in successfully`);
    this.logInService.setIsLogIn(true)

  }

}
