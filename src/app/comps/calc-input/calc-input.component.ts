import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-calc-input',
  templateUrl: './calc-input.component.html',
  styleUrls: ['./calc-input.component.css']
})
export class CalcInputComponent implements OnInit {

  constructor(public serv: ServiceService) { }

  ngOnInit(): void { }

  num: string = "";
  exercise: string = "";



  result: string = '';
  myCalc(value: string) {
    if (value != '=') {
      this.num += value;


    }
    if (value == '=') {
      this.exercise = this.num
      console.log(this.exercise);

      this.result = eval(this.num);

      this.num = this.result;
      this.serv.arrHistory.push(this.exercise + " =" + this.num);
    }
    if (value == 'CA') {

      this.num = "";

    }
  }
  myHistory(): void {
    console.log(this.num);
    for (let i of this.serv.arrHistory) {
      this.serv.arr.push(i)
    }
    this.serv.arrHistory=[]
  }
}
