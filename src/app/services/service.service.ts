import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  arr:string[]=[];
  arrHistory:string[]=[];

  constructor() { }
}
