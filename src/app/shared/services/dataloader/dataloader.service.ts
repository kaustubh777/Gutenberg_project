import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataloaderService {
  nextURL;
  requestObj;
  baseUrl = ' https://gutendex.com/books/?mime_type=image';
  constructor(public http:HttpClient) { }

  getBooks( filter:string, initial:boolean,category:string,) {
    if(initial){
      this.requestObj = this.http.get(this.baseUrl,{
        params : new HttpParams().append('search',filter).append('topic',category),
      })
    }
    else{
      this.requestObj = this.http.get(this.nextURL)
    }
    return this.requestObj.pipe(tap(
      response =>{
        this.nextURL = response['next'];
      }
    ))
  }

}
