import { Component } from '@angular/core';
import { NgbModal, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { ServoService } from './services/servo-service/servo.service';
import { Firestore, collectionData, collection, addDoc, Timestamp } from '@angular/fire/firestore';
import { first, pipe } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  closeResult = '';

  dispenseDateTime: Date = new Date();
  devices: any[] = [];


  title = 'astro-web';
  selectedDevice: {
    color: string;
    leftSnack: string;
    name: string;
    rightSnack: string;
  } | null = null;

  constructor(
    public servoService: ServoService,
    private modalService: NgbModal,
    public firestore: Firestore,
  ) { }

  setSelectedDevice(device: any) {
    this.selectedDevice = device;
    this.servoService.spinServo().then((data) => {
      console.log(data);
    });
  }

  selectDeviceForm(device: any) {

  }

  saveForm() {
    let collectionRef = collection(this.firestore, 'nybble-events');
    let dateTime = new Date(this.dispenseDateTime);
    let ts = Timestamp.fromDate(dateTime);

    addDoc(collectionRef,
      {
        "isLeft": true,
        "eventDateTime": ts,
        "isRepeatEvent": false,
        "deviceID": '/nybble-devices/3OuP1BcnwFoWnZ5yKhHn'
      }
    );
  }

  scheduleDispenser(content: any) {
    this.fetchDevices();
    this.modalService.open(content);
  }

  fetchDevices() {
    collectionData(collection(this.firestore, 'nybble-devices')).pipe(first()).subscribe((data => {
      this.devices = data;
      console.log(data);
    }));
  }
}
