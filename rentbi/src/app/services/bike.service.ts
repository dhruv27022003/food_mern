import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { sample_foods, sample_tags } from 'src/data';
import { FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL, FOOD_BY_ID_URL } from '../shared/constants/urls';
import { Bike } from '../shared/models/Bike';
import { Tag } from '../shared/models/Tag';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
// export class FoodService {
  // getAll(): Bike[] {
  //   throw new Error('Method not implemented.');
  // }

  // constructor(private http:HttpClient) { }

  // getAll(): Observable<Bike[]> {
  //   return this.http.get<Bike[]>(FOODS_URL);
  // }

  // getAllFoodsBySearchTerm(searchTerm: string) {
  //   return this.http.get<Bike[]>(FOODS_BY_SEARCH_URL + searchTerm);
  // }

  // getAllTags(): Observable<Tag[]> {
  //   return this.http.get<Tag[]>(FOODS_TAGS_URL);
  // }

  // getAllFoodsByTag(tag: string): Observable<Bike[]> {
  //   return tag === "All" ?
  //     this.getAll() :
  //     this.http.get<Bike[]>(FOODS_BY_TAG_URL + tag);
  // }

  // getFoodById(foodId:string):Observable<Bike>{
  //   return this.http.get<Bike>(FOOD_BY_ID_URL + foodId);
  // }

   
  export class BikeService {
  constructor (){}

  
  getall =async () => {

    const {data} = await axios.get('/api/foods');
    const array = data
    console.log(" calling data " , data);
    return array;
    
  };


  async getAllbyid(id:string): Promise<Bike | undefined> {
    const allFoods = await this.getall();
    return allFoods.find((Bike: Bike) => Bike.id === id);
  }

  


}

export const getall =async () => {

  const {data} = await axios.get('/api/foods');
  console.log(" calling data " , data);
  return data;
  
};

