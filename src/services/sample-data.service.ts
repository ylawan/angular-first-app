import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { from } from 'rxjs/observable/from';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {

  constructor(private httpClient: HttpClient) {
  }

  getSampleData(count = 10){
    //const url = `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=${count}`;
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.httpClient.get(url)
    .pipe(map(data=>[].slice.call(data,0,count)));
  }
  
}
