import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/food';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/users/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   foods:Foods[]=[];
  constructor(private fs:FoodService,private route:ActivatedRoute,private user:UserService){}
  
  ngOnInit(): void {
       this.user.show();
    this.route.params.subscribe(params => {
      if(params['searchItem'])
     this.foods=this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
     else if(params['tag'])
     this.foods = this.fs.getAllFoodByTag(params['tag'])
     else
      this.foods = this.fs.getAll(); 
   
    })

  }
}
