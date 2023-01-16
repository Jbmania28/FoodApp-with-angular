import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { login } from 'src/app/data-type';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  visible:boolean;
  invalidUserAuth = new EventEmitter<boolean>(false)
  url="http://localhost:3000/restaurants"
  rooturl="http://localhost:3000/"
 
  constructor(private http:HttpClient,private router:Router) {
             this.visible=true;
   }
     
   //hide show nav bar in some components
   hide() { this.visible = false; }

   show() { this.visible = true; }
 
   toggle() { this.visible = !this.visible; }
 
   doSomethingElseUseful() { }
 


  getlist()
  {
   return this.http.get<any[]>(this.url)
  }

  registerUser(data:any)
  {
    return this.http.post(this.rooturl+"users",data)
    
  }

  userlogin(data:login)
   {
    this.http.get<login[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`
    , {observe:'response'}).subscribe((result)=>{
      if(result && result.body?.length)
      {
          this.invalidUserAuth.emit(false)
        sessionStorage.setItem('user',JSON.stringify(result.body[0]));
        this.router.navigate(['/']);
      }else{
           
        this.invalidUserAuth.emit(true)
      }

    })
   }
}
