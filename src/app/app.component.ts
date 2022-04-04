import { Component } from '@angular/core';
import { ServoService } from './services/servo-service/servo.service';

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

  constructor(public servoService: ServoService) { }

  setSelectedDevice(device: any) {
    // this.selectedDevice = device;
    this.servoService.spinRightServo().then(data=>{
      console.log(data);
    });
  }
}
