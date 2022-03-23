import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, FirestoreInstances, doc, getDoc } from '@angular/fire/firestore';
import { first, pipe } from 'rxjs';

@Component({
  selector: 'app-nybble-events',
  templateUrl: './nybble-events.component.html',
  styleUrls: ['./nybble-events.component.scss']
})
export class NybbleEventsComponent implements OnInit {

  events: any[] = [];

  constructor(public firestore: Firestore, public firestoreInstance: FirestoreInstances) { }

  ngOnInit(): void {
    this.fetchDevices();
  }

  fetchDevices() {
    collectionData(collection(this.firestore, 'nybble-events')).pipe(first()).subscribe((data => {
      this.events = data;
      this.events.forEach((e, i) => {
        console.log(e.eventDateTime.toDate())

        let id = e.deviceID._key.path.segments[e.deviceID._key.path.segments.length - 1];
        getDoc(doc(this.firestore, 'nybble-devices', id)).then(data => {
          this.events[i].device = data.data();

        })
      });

      console.log(this.events)
    }));
  }

  getDateTime(timestamp: any) {
    console.log(timestamp);
  }
}
