import { Component, OnInit } from '@angular/core';
import { FormControl,Form } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getData(data:any){
    console.warn(data);
    
  }
}


