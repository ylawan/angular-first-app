import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../services/alert.service';
import { AlertBaseComponent } from '../base/alert-base.component';

@Component({
  selector: 'app-alert-minor',
  templateUrl: './alert-minor.component.html',
  styleUrls: ['./alert-minor.component.scss']
})
export class AlertMinorComponent extends AlertBaseComponent implements OnInit {

  ngOnInit() {
    this.subs = AlertService.MinorAlert(
      (data)=>{
        this.showMessage(data);
      }
    );
  }
}
