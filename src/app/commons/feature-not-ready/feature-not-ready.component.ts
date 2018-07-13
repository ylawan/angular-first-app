import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-feature-not-ready',
  templateUrl: './feature-not-ready.component.html',
  styleUrls: ['./feature-not-ready.component.scss']
})
export class FeatureNotReadyComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  CloseOverlay($event){
    this.eventService.emit(EventService.EVENTS.CLOSE_MODAL, {id:'appFeatureNotReady'});
  }
}
