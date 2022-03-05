import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrviServiceService {


  returnData(){
  return  [  {name:'mika', godine:27},
      {name:'zika', godine:28},
      {name:'pera', godine:29}
    ]
  }
  constructor() { }
}
