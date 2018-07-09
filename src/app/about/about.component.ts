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
    AlertService.ShowMajorAlert("*1* Lawan event triggered!");
  }

  TryMinorAlert(){
    AlertService.ShowMinorAlert("*2* Agbedor event triggered!");   
  }
}
