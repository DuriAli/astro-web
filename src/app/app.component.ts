import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'astro-web';
  selectedDevice: {
    color: string,
    leftSnack: string,
    name: string,
    rightSnack: string,
  } | null = null;

  setSelectedDevice(device:any){
    this.selectedDevice = device;
  }
}
