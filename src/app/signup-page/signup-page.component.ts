import { Component } from '@angular/core';
import { UserService } from '../services/users/user.service';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {

  alert:boolean=false
  Register = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })
  
  constructor(private user:UserService,private router:Router) {}
  collection()
  {
    console.warn(this.Register.value)
    
    this.user.registerUser(this.Register.value).subscribe((result)=>{
       console.warn(result)
    })
    this.alert=true
    this.Register.reset({})
    this.router.navigate(['/']);
    this.user.show();
  }

  closealert()
  {
    this.alert=false
  }

}
