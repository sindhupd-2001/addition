import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'addition';
  constructor() { }
  result!:number
  add(val1:string, val2:string)
  {
    this.result=parseFloat(val1)+parseFloat(val2)
  }
  sub(val1:string, val2:string)
  {
    this.result=parseFloat(val1)-parseFloat(val2)
  }
  mul(val1:string, val2:string)
  {
    this.result=parseFloat(val1)*parseFloat(val2)
  }
  div(val1:string, val2:string)
  {
    this.result=parseFloat(val1)/parseFloat(val2)
  }
  ngOnInit(): void {
  }

}
