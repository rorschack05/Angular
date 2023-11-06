import { ViewChildren } from '@angular/core';
import { Component, ElementRef, ViewChild, QueryList } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
  fullName: string=''
  @ViewChildren('inputEl',{}) inputElements: QueryList<ElementRef>;
  show() {
    let name=''
    this.inputElements.forEach((el) => {
    name += el.nativeElement.value + ' '
     
    })
    this.fullName= name.trim();
  }


}



