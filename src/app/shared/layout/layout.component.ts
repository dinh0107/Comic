import { Component, OnInit } from '@angular/core';
import { ComicType } from '../service/ComicType';
import { TypeComicService } from '../service/TypeComic.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements  OnInit {
  Type: any [] = []

  constructor(private typeService : TypeComicService){}

  ngOnInit(): void {
    this.typeService.getType().subscribe(res => {
      console.log(res.data.items)
      this.Type = res.data.items
    })
  }

  isActive = false;
  typeBox = false;

  toggleActive(){
    this.isActive = ! this.isActive
  }


  toggletypeBox(){
    this.typeBox = ! this.typeBox
  }
}
