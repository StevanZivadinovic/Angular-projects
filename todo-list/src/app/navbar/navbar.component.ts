import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PrviServiceService } from '../services/prvi-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  a: number = 5;
  inputText: string = 'unesi neko ime';
  boolean: any = false;
  prikazatingIf: boolean = true;
  color: string = 'blue';
  colors = ['red', 'orange', 'white', 'black'];
  ninja1 = {
    belt: 'red',
    name: 'Yoshi',
  };

  
  //  @Input se zove dekorator, kao i npr @Output
  @Input() ninja: any;
  @Output() onYell = new EventEmitter();
  
  fireYellEvent() {
    this.onYell.emit('text');
  }
  
  logujNINJU() {
    console.log(this.ninja);
  }
  
  prikaziInput(value: any) {
    console.log(value);
  }
  
  nekaFunkcija(poruka: string): number {
    console.log('haj');
    alert(poruka);
    return 1;
  }
  
  public preuzetiPodaciIzPrvogService:any = [];
  constructor(public _prviService:PrviServiceService) {}

  ngOnInit(): void {
    console.log(this.preuzetiPodaciIzPrvogService)
    this.preuzetiPodaciIzPrvogService = this._prviService.returnData()
  }
}
