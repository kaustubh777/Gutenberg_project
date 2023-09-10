import { Directive, HostListener } from '@angular/core';
import { SrcollService } from '../services/scroll/scroll.service';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  
  constructor(private scroll: SrcollService) { }
  @HostListener('scroll', ['$event']) getScrollHeight(event) {
    if(event.target){
      this.scroll.checkScroll(event);
    }
  }

}
