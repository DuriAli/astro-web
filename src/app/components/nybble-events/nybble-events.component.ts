import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, FirestoreInstances, doc, getDoc } from '@angular/fire/firestore';
import { first, pipe } from 'rxjs';

@Component({
  selector: 'app-nybble-events',
  templateUrl: './nybble-events.component.html',
  styleUrls: ['./nybble-events.component.scss']
})
export class NybbleEventsComponent implements OnInit {
  isLoading = false;
  events: any[] = [];

  device: any = null;
  constructor(public firestore: Firestore) { }

  ngOnInit(): void {
    this.fetchDevices();
  }

  fetchDevices() {
    this.isLoading = true;
    collectionData(collection(this.firestore, 'nybble-events')).pipe(first()).subscribe((data => {
      this.events = data;
      this.events.forEach((e, i) => {
        if (e.isLeft == false) {
          let id = e.deviceID._key.path.segments[e.deviceID._key.path.segments.length - 1];
          getDoc(doc(this.firestore, 'nybble-devices', id)).then(data => {
            this.events[i].device = data.data();
            this.device = data.data();
          }).finally(() => {
            console.log(data);
            console.log(this.device)
            this.events.forEach(e => {
              e.device = this.device
            })
            this.isLoading = false;
          })
        }

      });

    }));
  }

  getDateTime(timestamp: any) {
    console.log(timestamp);
  }
}
