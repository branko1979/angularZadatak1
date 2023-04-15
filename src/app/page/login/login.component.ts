import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{

  loginForm: FormGroup;
  //loginForm!: FormGroup;
  constructor(private fb:FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username:["",[Validators.required, Validators.email]],
      password:["",[Validators.required ]]
   })
  }
  ngOnInit(): void {
  }

  login(){
    //console.log(this.loginForm.getRawValue())
    const data = this.loginForm.getRawValue();
    //console.log(data)
    if (this.loginForm.valid && data.username == 'office@angular.com' && data.password =='admin'){
      this.router.navigate(['/home'])
      console.log("Uspešna prijava")
      //console.log(data.username)
      //console.log(data.password)
      localStorage.setItem("username",data.username) // pamcenje u lokalnu memoriju koja ostaje i kada se ugasi brauzer
      //localStorage nije neophodan za ovaj zadatak sa avatarom
    }else{
      console.log("Greška prilikom prijave")
      //console.log(data.username)
      //console.log(data.password)
    }
  }



}
