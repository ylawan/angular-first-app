import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  TryMajorAlert(){
    AlertService.ShowMajorAlert("*1* OSI event triggered!");
    this.eventService.emit(EventService.EVENTS.OPEN_MODAL, {id:'appFeatureNotReady'});
  }

  TryMinorAlert(){
    AlertService.ShowMinorAlert("*2* EMAKE event triggered!");
  }

  TryModal(){
    this.eventService.emit(EventService.EVENTS.OPEN_MODAL, {id:'appFeatureNotReady'});
  }

}
