import { Injectable } from '@angular/core';
import { Bike } from '../shared/models/Bike';
import { Tag } from '../shared/models/Tag';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
   
  export class BikeService {
  constructor (){}

  
  getall =async () => {

    const {data} = await axios.get('/api/Bikes');
    const array = data
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
  return data;
  
};

