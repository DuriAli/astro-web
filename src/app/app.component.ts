import { Component } from '@angular/core';
import { NgbModal, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { ServoService } from './services/servo-service/servo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  closeResult = '';

  time: NgbTimeStruct = {
    hour: 13, 
    minute: 30,
    second: 0
  };

  title = 'astro-web';
  selectedDevice: {
    color: string;
    leftSnack: string;
    name: string;
    rightSnack: string;
  } | null = null;

  constructor(
    public servoService: ServoService,
    private modalService: NgbModal
  ) {}

  setSelectedDevice(device: any) {
    // this.selectedDevice = device;
    this.servoService.spinRightServo().then((data) => {
      console.log(data);
    });
  }

  schedule(content: any) {
    console.log('hi mom');
    this.modalService.open(content);
  }

  displayTime() {
    console.log(this.time);
  }
}
