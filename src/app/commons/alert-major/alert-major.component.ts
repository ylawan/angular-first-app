import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../services/alert.service';
import { AlertBaseComponent } from '../base/alert-base.component';

@Component({
  selector: 'app-alert-major',
  templateUrl: './alert-major.component.html',
  styleUrls: ['./alert-major.component.scss']
})
export class AlertMajorComponent extends AlertBaseComponent implements OnInit {

  ngOnInit() {
    this.subs = AlertService.MajorAlert(
      (data)=>{
        this.showMessage(data);
      }
    );
  }

}
