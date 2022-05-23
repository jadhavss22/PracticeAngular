import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form';
  data = "Subodh"
  count  = 0;
  disable =false;
  getData(val:any){
    console.warn(val);
    
  }
  gettext(val:any){
    console.warn(val);
    
  }
  counter(type:string){

  type === 'add' ?this.count++:this.count--;
  }
}
