import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-cat-cmp',
  templateUrl: './app-cat-cmp.component.html',
  styleUrls: ['./app-cat-cmp.component.css']
})
export class AppCatCmpComponent implements OnInit{
  @Input() componentName:string;
  @Input() componentImage:string;
  componentArrow = "assets/images/Next.svg"

  constructor(public route:Router) { }

  ngOnInit() {
  }

  goToselectedCategory(){
    this.route.navigate(['/category/'+this.componentName]);
  }


}
