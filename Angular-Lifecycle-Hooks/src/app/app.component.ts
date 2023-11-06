import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Lifecycle-Hooks';

  InputVal : string = "";

constructor(){
  console.log('app constructor called');
  
}
OnButtonClick(InputEl:HTMLInputElement){
  this.InputVal = InputEl.value;
}
}
 