import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/food';
import { Tag } from 'src/app/shared/model/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {}

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }
    
  getAllFoodByTag(tag:string): Foods[]{
      
    if(tag == 'All')
    return this.getAll()
    else
    return this.getAll().filter(food => food.tags?.includes(tag))
    }

    getAllTag():Tag[]{
      return [
        { name: 'All', count: 8 },
        { name: 'Fastfood', count: 5 },
        { name: 'Pizza', count: 2 },
        { name: 'Lunch', count: 6 },
        { name: 'Humburger', count: 1 },
        { name: 'Fry', count: 2 },

      ]
    }
   

  getAll():Foods[]{
  
       return [
          {
            id:1,
            name:'Tomato Pizza',
            cookTime:'10-20',
            price:200,
            favorite:true,
            origins:['US'],
            star:5,
            imageUrl:'/assets/i1.jpg',
            tags:['Fastfood','Pizza','Lunch']
            
          },
          {
            id:2,
            name:'Meat Ball',
            cookTime:'10-20',
            price:300,
            favorite:false,
            origins:['Turkey'],
            star:4,
            imageUrl:'/assets/i2.jpg',
            tags:['Fastfood','Lunch','Fry']
            
          },
          {
            id:3,
            name:'Cheez Burger',
            cookTime:'5-10',
            price:250,
            favorite:false,
            origins:['US','India'],
            star:6,
            imageUrl:'/assets/i3.jpg',
            tags:['Fastfood','Breakfast','Humburger']
            
          },
          {
            id:4,
            name:'French Fries',
            cookTime:'5-10',
            price:100,
            favorite:false,
            origins:['italy','US'],
            star:3,
            imageUrl:'/assets/i4.jpg',
            tags:['Fastfood','Fry']
            
          },
          {
            id:5,
            name:'Pizza Pepperoni',
            cookTime:'15-20',
            price:500,
            favorite:true,
            origins:['US'],
            star:7,
            imageUrl:'/assets/i5.jpg',
            tags:['Fastfood','Pizza','Lunch']
            
          },
          {
            id:6,
            name:'Paneer Tikka',
            cookTime:'20-30',
            price:280,
            favorite:false,
            origins:['India','Pakistan'],
            star:6,
            imageUrl:'/assets/i6.jpg',
            tags:['Lunch','Dinner']
            
          },
          {
            id:7,
            name:'Chiken Curry',
            cookTime:'30-50',
            price:350,
            favorite:false,
            origins:['India'],
            star:7,
            imageUrl:'/assets/i7.jpg',
            tags:['Lunch','Dinner']
            
          },
          {
            id:8,
            name:'Chicken Biryani',
            cookTime:'50-60',
            price:399,
            favorite:true,
            origins:['India'],
            star:8,
            imageUrl:'/assets/i8.jpg',
            tags:['Lunch','Dinner']
            
          },
          {
            id:8,
            name:'Shev Bhaji',
            cookTime:'20-25',
            price:110,
            favorite:true,
            origins:['India'],
            star:8,
            imageUrl:'/assets/i11.jpg',
            tags:['Lunch','Dinner']
            
          }

       ]
  }
}
