import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  logujNINJU() {
    console.log(this.ninja);
  }
  fireYellEvent(e: any) {
    this.onYell.emit(e);
  }

  prikaziInput(value: any) {
    console.log(value);
  }

  nekaFunkcija(poruka: string): number {
    console.log('haj');
    alert(poruka);
    return 1;
  }

  constructor() {}

  ngOnInit(): void {}
}
