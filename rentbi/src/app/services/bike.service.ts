import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { sample_Bikes, sample_tags } from 'src/data';
import { BikeS_BY_SEARCH_URL, BikeS_BY_TAG_URL, BikeS_TAGS_URL, BikeS_URL, Bike_BY_ID_URL } from '../shared/constants/urls';
import { Bike } from '../shared/models/Bike';
import { Tag } from '../shared/models/Tag';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
// export class BikeService {
  // getAll(): Bike[] {
  //   throw new Error('Method not implemented.');
  // }

  // constructor(private http:HttpClient) { }

  // getAll(): Observable<Bike[]> {
  //   return this.http.get<Bike[]>(BikeS_URL);
  // }

  // getAllBikesBySearchTerm(searchTerm: string) {
  //   return this.http.get<Bike[]>(BikeS_BY_SEARCH_URL + searchTerm);
  // }

  // getAllTags(): Observable<Tag[]> {
  //   return this.http.get<Tag[]>(BikeS_TAGS_URL);
  // }

  // getAllBikesByTag(tag: string): Observable<Bike[]> {
  //   return tag === "All" ?
  //     this.getAll() :
  //     this.http.get<Bike[]>(BikeS_BY_TAG_URL + tag);
  // }

  // getBikeById(BikeId:string):Observable<Bike>{
  //   return this.http.get<Bike>(Bike_BY_ID_URL + BikeId);
  // }

   
  export class BikeService {
  constructor (){}

  
  getall =async () => {

    const {data} = await axios.get('/api/Bikes');
    const array = data
    console.log(" calling data " , data);
    return array;
    
  };


  async getAllbyid(id:string): Promise<Bike | undefined> {
    const allBikes = await this.getall();
    return allBikes.find((Bike: Bike) => Bike.id === id);
  }

  getAllTag(): Tag[] {
    return [
      { name: 'ALL', count: 15 },
      { name: 'Varanasi', count: 4 },
      { name: 'Delhi', count: 2 },
      { name: 'Mumbai', count: 3 },
      { name: 'Banglore', count: 2 },
      { name: 'Jaipur', count: 1 },
      { name: 'Gurugaon', count: 1 },
      { name: 'Surat', count: 1 },
      { name: 'CAR', count: 2 },
      { name: 'SCOOTAR', count: 4 },
      { name: 'SPORTS BIKE', count: 3 },
      { name: 'CRUIZER', count: 5 },
      { name: 'BULLET', count: 3 },
      { name: 'ELECTRIC', count: 1 },
      { name: 'Varanasi', count: 4 },
      { name: 'Delhi', count: 2 },
      { name: 'Mumbai', count: 3 },
      { name: 'Banglore', count: 2 },
      { name: 'Jaipur', count: 1 },
      { name: 'Gurugaon', count: 1 },
      { name: 'Surat', count: 1 },
      { name: 'CAR', count: 2 },
      { name: 'SCOOTAR', count: 4 },
      { name: 'SPORTS BIKE', count: 3 },
      { name: 'CRUIZER', count: 5 },
      { name: 'BULLET', count: 3 },
      { name: 'ELECTRIC', count: 1 },
    ];
  }
 
  async getAllbikebytag(tag: string): Promise<Bike[]> {
    const allBikes = await this.getall();
    if (tag == 'ALL') return allBikes;
    else return allBikes.filter((bike: Bike) => bike.tags?.includes(tag));
  }

}

export const getall =async () => {

  const {data} = await axios.get('/api/Bikes');
  console.log(" calling data " , data);
  return data;
  
};

