import { Component, Input, OnInit } from '@angular/core';
import { BikeService } from '../../../services/bike.service';
import { Tag } from '../../../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  bikepagetags?:string[] ;
   tags?: Tag[]=[];
  constructor(private fs: BikeService) { }

  ngOnInit(): void {
    if(!this.bikepagetags)
    this.tags= this.fs.getAllTag();
  }

}
