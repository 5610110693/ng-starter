import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng Starter';
  x =['a', 'b'];

  debugx(event){
    console.log(event.key);
  }

}

