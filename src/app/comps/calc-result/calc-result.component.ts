import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';



@Component({
  selector: 'app-calc-result',
  templateUrl: './calc-result.component.html',
  styleUrls: ['./calc-result.component.css']
})
export class CalcResultComponent implements OnInit {

  constructor(public serv:ServiceService) { }

  ngOnInit(): void {
  }

}
