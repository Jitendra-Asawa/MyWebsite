import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData: FormGroup;
  passwordPattern = "[a-zA-Z0-9]+"
  emailPattern = "[a-zA-Z.]+@[a-zA-Z]+.(com)";
  constructor(private router: Router) { }

  ngOnInit() {
    this.formData = new FormGroup({
      email: new FormControl("",
        Validators.compose(
          [Validators.required, Validators.pattern(this.emailPattern)]
        )),
      password: new FormControl("",
        Validators.compose(
          [Validators.required, this.validatePassword, Validators.pattern(this.passwordPattern)]
        ))
    });
  }
  validatePassword(formcontrol) {
    if (formcontrol.value.length < 8) {
      return { "password": true };
    }
  }
  loginClick(formData) {
    console.log(formData.email + " " + formData.password);
    if (formData.email === "jasawa@infoobjects.com" && formData.password === "password") {
      alert('Login Successful');
      this.router.navigate(['home']);
    } else{
      alert('Incorrect Password');
    }
  }
  forgotPassword() {
    alert('Password: password');
  }
}
