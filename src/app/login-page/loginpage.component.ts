import { Component } from '@angular/core';
import { UserService } from '../services/users/user.service';
import { login } from '../data-type';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  constructor(public user:UserService) {}
  ngOninit(): void {
          this.user.getlist();
          console.warn()
  }

  login(data:login)
  {
    this.user.userlogin(data)
    this.user.invalidUserAuth.subscribe((result)=>
     {
        if(result){
        alert("Invalid User") 
     }
   
  })
    
  }

}
