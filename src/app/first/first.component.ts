import { Component, OnInit } from '@angular/core';
import { SampleDataService } from '../../services/sample-data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  sampleData = null;
  
  constructor(private sampleDataService: SampleDataService) { }

  ngOnInit() {
    this.getSample();
  }

  getSample(){
    this.sampleDataService
    .getSampleData(10)
    .subscribe((data)=>{
      this.sampleData = data;
      console.log("sample data = ", data);
    });
  }
}
