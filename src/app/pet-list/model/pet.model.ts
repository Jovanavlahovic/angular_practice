import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';

   NgModule({
  providers: [DatePipe]
})

export class Pet{
    _id: number;
    name: string;
    category: string;
    breed: string;
    age: number;
    imageUrl: string;
    hobbies: string[];
     dateOfCreation: string;
     gender: string;

  

    constructor(obj?: any){
        this._id = (obj && obj._id) || null;
        this.name = (obj && obj.name) || null;
        this.category = (obj && obj.category) || null;
        this.breed = (obj && obj.breed) || null;
        this.age = (obj && obj.age) || null;
        this.imageUrl = (obj && obj.imageUrl) || null;
        this.hobbies = (obj && obj.hobbies) || null;
        this.gender = (obj && obj.gender) || null;
        let newDate = new DatePipe('en-US').transform(obj.dateOfCreation, 'yyyy-dd-MM');
        this.dateOfCreation = (obj && newDate) || null; 
    }
}