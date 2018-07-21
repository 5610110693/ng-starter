import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng Starter';
  x =['a', 'b'];
  show = false;

  debugx(event){
    let val = event.target.value;
    this.title = val;
    //console.log(event.target.value);
  }

}

