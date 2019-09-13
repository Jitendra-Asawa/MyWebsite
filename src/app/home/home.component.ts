import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  namePattern="[a-zA-Z ]+";
  genderPattern="[a-zA-Z]+";
  numberPattern="[0-9]+"
  formData:FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
    this.formData = new FormGroup({
      name: new FormControl("",
        Validators.compose([Validators.required, Validators.pattern(this.namePattern)])
      ),
      gender: new FormControl("",
      Validators.compose([Validators.required, Validators.pattern(this.genderPattern)])
      ),
      age: new FormControl("",
      Validators.compose([Validators.required,Validators.pattern(this.numberPattern)])
      )
    });
  }

  printData(formData){
    console.log(formData.name+" "+formData.gender+" "+ formData.age);
  }

}
