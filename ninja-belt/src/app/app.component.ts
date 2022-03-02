import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:any = 'ninja-belt';

  ninja = {
    belt:'red',
    name:'Yoshi'
   }

   yellin(e:any){
    alert('I am loud!');
    console.log(e)
   }
}
