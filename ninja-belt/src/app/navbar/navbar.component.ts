import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 a:number = 5;
 inputText:string = 'unesi neko ime';
 boolean:any = false;

 ninja1 = {
  belt:'red',
  name:'Yoshi'
 }

 @Input() ninja:any;

 nekaFunkcija(poruka:string):number{
   console.log('haj')
   alert(poruka)
  return 1
 }

  constructor() { }

  ngOnInit(): void {
  }

}
