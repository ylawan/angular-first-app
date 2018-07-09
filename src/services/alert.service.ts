import { Injectable } from '@angular/core';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  static get ALERTS(){
    return CONSTANTS.ALERTS;
  }

  private static eventService = new EventService();

  // constructor() {  }

  public static MajorAlert(callBack){
    return AlertService.SubscribeAlert(AlertService.ALERTS.MAJOR, callBack);
  }

  public static MinorAlert(callBack){
    return AlertService.SubscribeAlert(AlertService.ALERTS.MINOR, callBack);
  }

  private static SubscribeAlert(type, callBack){
    return AlertService.eventService.subscribe(type, callBack);
  }

  public static ShowMajorAlert(message, options=null){
    const defaultOptions = {
      duration: 0,
      autoClose: false,
      closeable: true
    };
    
    const opt = Object.assign(defaultOptions, options);

    AlertService.ShowAlert(AlertService.ALERTS.MAJOR, message, opt);
  }

  public static ShowMinorAlert(message, options=null){
    const defaultOptions = {
      duration: 5,
      autoClose: true,
      closeable: true
    };

    const opt = Object.assign(defaultOptions, options);

    AlertService.ShowAlert(AlertService.ALERTS.MINOR, message, opt);
  }

  private static ShowAlert(type, message, options){
    const alertData = {
      message: message, 
      options: options
    };

    AlertService.eventService.emit(type, alertData);
  }
}


const CONSTANTS = {
  ALERTS:{
    MAJOR: "major::alert",
    MINOR: "minor::alert"
  }
}