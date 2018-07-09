import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private _events = {};

  constructor() { }

  subscribe(eventName:string, eventCallback:any){
    let e:EventEmitter<any> = this._events[eventName];
    if(!e){
      e = new EventEmitter();
      this._events[eventName] = e;
    }
    let s = e.subscribe(eventCallback);
    return {
      unsubscribe: ()=>{
        console.log(`Unsbscribing from ${eventName} *`);
        s.unsubscribe(); 
        if(e.observers.length <= 0){ 
          console.log(`Deleting ${eventName} **`);
          delete this._events[eventName]; 
        }
      }
    }
  }

  emit(eventName:string, eventData:any){
    let e:EventEmitter<any> = this._events[eventName];
    if(e){
      e.emit(eventData);
    }
  }
}