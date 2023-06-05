import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.faceSnaps = [
      {

        title: 'Nirvana',
        description: 'Mon premier chat',
        createdDate: new Date(),
        snaps: 145,
        imageUrl: 'https://lemagduchat.ouest-france.fr/images/dossiers/2022-02/assurance-chat-goutiere-171537.jpg',
        location: 'L-L-N'
    },

    {
      title: 'Gasoline',
      description: 'Mon petit chat bibou',
      createdDate: new Date(),
      snaps: 4555,
      imageUrl: 'https://www.josera.fr/media/chat_evaille_de_tortue_3.jpg',
      location: 'Ottignies'
    },

    {
      title: 'Nando',
      description: 'Le petit chiengue',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: 'https://t1.ea.ltmcdn.com/fr/posts/5/3/0/education_du_golden_retriever_2035_600.jpg'
    }
    ]
  }
}
