import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java-script1',
  templateUrl: './java-script1.component.html',
  styleUrls: ['./java-script1.component.css']
})
export class JavaScript1Component implements OnInit {
name:string="rizwana";
  constructor() { }

  ngOnInit() {
  
  }
  save(){
    alert("sucess");
        }
}
