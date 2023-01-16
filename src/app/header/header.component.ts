import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { UserService } from '../services/users/user.service';
import { Tag } from '../shared/model/tag';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchItem:string =' ';
  userName:string='';
constructor(private route:ActivatedRoute,private router:Router,public users:UserService){}

ngOnInit(): void {
  this.route.params.subscribe(params =>{
    if(params['searchItem'])
    this.searchItem = params['searchItem'];
  })
 if(sessionStorage.getItem('user'))
 {
  let userstore=sessionStorage.getItem('user')
  let userdata=userstore && JSON.parse(userstore)
  this.userName = userdata.name;
 }
}

  search(): void {
        if(this.searchItem)
        {
          this.router.navigateByUrl('/search/'+this.searchItem)
        }     
  }
logout()
{
  sessionStorage.clear();
  this.router.navigate(['/']);
  this.userName= ' ';
}



}
