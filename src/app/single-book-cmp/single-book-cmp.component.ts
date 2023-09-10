import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-book-cmp',
  templateUrl: './single-book-cmp.component.html',
  styleUrls: ['./single-book-cmp.component.css']
})
export class SingleBookCmpComponent implements OnInit {
@Input() bookCover:string;
@Input() bookTitle:string;
@Input() bookAuthor:string;
@Input() bookLink:string;

  constructor(public route:Router) { }

  ngOnInit() {
  }

  goToLink(){
    if(this.bookLink !== '404'){
      window.open(this.bookLink, "_blank");
    }
    else{
      this.route.navigate(['/Linknotfound'])
    }
  }
}
