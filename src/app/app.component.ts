import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dollar: number;
  usdToRupee: number;

  onConvert() {
    this.usdToRupee = this.dollar * 77.5750;
  }

}
