import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Firestore, collectionData, collection, FirestoreInstances } from '@angular/fire/firestore';
import { first, pipe } from 'rxjs';

@Component({
  selector: 'app-nybble-devices',
  templateUrl: './nybble-devices.component.html',
  styleUrls: ['./nybble-devices.component.scss']
})
export class NybbleDevicesComponent implements OnInit {
  @Output() selectDevice: EventEmitter<any> = new EventEmitter();

  devices: any[] = [];

  constructor(public firestore: Firestore, public firestoreInstance: FirestoreInstances) { }

  ngOnInit(): void {
    this.fetchDevices();
  }

  fetchDevices() {
    collectionData(collection(this.firestore, 'nybble-devices')).pipe(first()).subscribe((data => {
      this.devices = data;
    }));
  }

  onSelectDevice(device: any) {
    this.selectDevice.emit(device);
  }
}
