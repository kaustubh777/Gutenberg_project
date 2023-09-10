import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { DataloaderService } from '../shared/services/dataloader/dataloader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SrcollService } from '../shared/services/scroll/scroll.service';


@Component({
  selector: 'app-cat-detail-cmp',
  templateUrl: './cat-detail-cmp.component.html',
  styleUrls: ['./cat-detail-cmp.component.css']
})
export class CatDetailCmpComponent implements OnInit {
  categoryName:string = 'Fiction';
  searchText:string = '';
  booksArray:{}[] = [];
  isProcessing:boolean = false;
  isFiltering:boolean = false;
  bookListEnd:boolean = false;

  constructor(private dataService:DataloaderService, public currentRoute:ActivatedRoute, private route:Router, private scroll:SrcollService) { }

  ngOnInit() {
    this.categoryName =  this.currentRoute.snapshot.params['cat'];
    this.loadData(this.searchText, true, this.categoryName);
    this.scroll.triggeredScrolled.subscribe(
      (flag)=>{
        if(flag && !this.bookListEnd)
        this.loadData(this.searchText,false,this.categoryName)
      },
      (error)=>{
        console.log("Problem in fetching next");
      }
    )
  }

  clearInput() {
    this.searchText = '';
    this.isFiltering = true;
    this.bookListEnd = false;
    this.loadData(this.searchText, true, this.categoryName);

  }

  goBack(){
    this.route.navigate(['']);
  }

  loadData(searchText, initial,category:string) {
    if(!this.isFiltering)
    this.isProcessing = true;
    this.dataService.getBooks(searchText,initial,category).subscribe(
      (response)=>{
        this.booksArray.push(...response['results']);
        this.isProcessing = false;
        if(response['next'] == null)
          this.bookListEnd = true;
        if(!!this.isFiltering)
          this.isFiltering = !this.isFiltering;
      }
    )
  }

  filterData(){
    if(this.searchText.length > 0){
      this.isFiltering = true;
      this.bookListEnd = false;
      setTimeout(()=>{
        this.dataService.getBooks(this.searchText,true,this.categoryName).subscribe(
          (response)=>{
            this.booksArray = response['results'];
            this.isFiltering = false;
            if(response['next'] == null)
              this.bookListEnd = true;
          }
        )
      },1500);
    }
  }


  getLink(formats:{}){
    if(formats['text/html; charset=utf-8'] && this.checkExtension(formats['text/html; charset=utf-8'])){
     return formats['text/html; charset=utf-8'];
    }
    else if(formats['text/html; charset=iso-8859-1'] && this.checkExtension(formats['text/html; charset=iso-8859-1'])){
      return formats['text/html; charset=iso-8859-1'];
    }
    else if(formats['text/html; charset=us-ascii'] && this.checkExtension(formats['text/html; charset=us-ascii'])){
      return formats['text/html; charset=us-ascii'];
    }
    else if(formats['application/pdf'] && this.checkExtension(formats['application/pdf'])){
      return formats['application/pdf'];
    }
    else if(formats['text/plain; charset=utf-8'] && this.checkExtension(formats['text/plain; charset=utf-8'])){
      return formats['text/plain; charset=utf-8'];
    }
    else if(formats['text/plain; charset=iso-8859-1'] && this.checkExtension(formats['text/plain; charset=iso-8859-1'])){
      return formats['text/plain; charset=iso-8859-1'];
    }
    else if(formats['text/plain; charset=us-ascii'] && this.checkExtension(formats['text/plain; charset=us-ascii'])){
      return formats['text/plain; charset=us-ascii'];
    }
    else{
      return "404";
    }
  }

  checkExtension(link:string){
    if(link.slice(-3) == 'zip')
    return false;
    else
    return true;
  }

}
