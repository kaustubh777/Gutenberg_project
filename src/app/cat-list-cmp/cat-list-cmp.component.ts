import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-list-cmp',
  templateUrl: './cat-list-cmp.component.html',
  styleUrls: ['./cat-list-cmp.component.css']
})
export class CatListCmpComponent implements OnInit {
  componentArray:{name:string,img:string}[] =[
    {name:'Fiction',img:'assets/images/Fiction.svg'},
    {name:'Philosophy',img:'assets/images/Philosophy.svg'},
    {name:'Drama',img:'assets/images/Drama.svg'},
    {name:'History',img:'assets/images/History.svg'},
    {name:'Humour',img:'assets/images/Humour.svg'},
    {name:'Adventure',img:'assets/images/Adventure.svg'},
    {name:'Politics',img: 'assets/images/Politics.svg'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
