import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  myForm:FormGroup

  constructor(private fb:FormBuilder) {
    this.myForm = this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(8),Validators.maxLength(30)]]
    })
   }

   //aca tengo que meter la funcion para hacer un metodo post en mi base de datos de usuarios.
   ingresar(){
     console.log(this.myForm.value)
   }

  ngOnInit(): void {
  }

}
