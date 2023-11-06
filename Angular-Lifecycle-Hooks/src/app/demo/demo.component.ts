import { Component,Input,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges {
title: string = 'DemoComponent' ;


  @Input()
  message!: string;

constructor (){
  
  console.log('demo component constructor called');
  console.log(this.title);
  console.log(this.message);
  
}
ngOnChanges(Changes:SimpleChanges){
  console.log('ngOnChanges hook called');
  console.log(Changes);
  
}
}
