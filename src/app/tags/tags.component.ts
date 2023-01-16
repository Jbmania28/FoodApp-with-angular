import { Component, Input } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { UserService } from '../services/users/user.service';
import { Tag } from '../shared/model/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  @Input()
  foodpagetags?:string[];
  @Input()
 justifyContent:string= 'center';
  tags?:Tag[] = [];
constructor(private fs:FoodService,public user:UserService){}

ngOnInit(): void {
  if(!this.foodpagetags)
  this.tags =this.fs.getAllTag();
  
}

}