import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SrcollService {
  scrollTop:number;
  contentHeight:number;
  scrollHeight:number;
  percentscrolled:number;
  triggeredScrolled = new Subject<boolean>();
  buffer:boolean = true;
  constructor() { }

  checkScroll(event){
    this.scrollTop = event['target'].scrollTop;
      this.contentHeight = event['target'].offsetHeight;
      this.scrollHeight = event['target'].scrollHeight;
      this.percentscrolled = ((this.scrollTop + this.contentHeight) / this.scrollHeight) * 100;
      if(this.percentscrolled > 99.3 && this.buffer){
      this.buffer = false;
      setTimeout( () => { 
        this.buffer = true;
      },2000)
      this.triggeredScrolled.next(true);
    }
    }
}
