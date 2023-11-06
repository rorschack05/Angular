import { Component,Input,OnChanges,SimpleChanges,OnInit, ViewChild, ElementRef,DoCheck } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges, OnInit, DoCheck {
title: string = 'DemoComponent' ;


  @Input()
  message!: string;
  
  @ViewChild('temp')
  tempPara!: ElementRef;

constructor (){
  
  console.log('demo component constructor called');
  // console.log(this.title);
  // console.log(this.message);
  
}
ngOnChanges(Changes:SimpleChanges){
  console.log('ngOnChanges hook called');
  // console.log(Changes);
  
}
ngOnInit(){
  console.log('ngOnInit hook Called');
  // console.log(this.tempPara.nativeElement.innerHTML);
  
}
ngDoCheck(){
  console.log('ngDOCheck hook called');
  
}
}
