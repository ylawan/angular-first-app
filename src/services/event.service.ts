import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  static get EVENTS(){
    return CONSTANTS.EVENTS;
  }

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

const CONSTANTS = {
  EVENTS:{
    OPEN_MODAL: "open_modal::events",
    CLOSE_MODAL: "close_modal::events",
    MODAL_OPENED: "modal_opened::events",
    MODAL_CLOSED: "modal_closed::events"
  }
}