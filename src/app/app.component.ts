import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
      this.mySnap = new FaceSnap (
        'Nirvana',
        'Mon premier chat',
        new Date(),
        0,
        'https://lemagduchat.ouest-france.fr/images/dossiers/2022-02/assurance-chat-goutiere-171537.jpg',
      )

      this.myOtherSnap = new FaceSnap (
        'Gasoline',
        'Mon petit chat bibou',
        new Date(),
        0,
        'https://www.josera.fr/media/chat_evaille_de_tortue_3.jpg'
      )

      this.myLastSnap = new FaceSnap (
        'Nando',
        'Le petit chiengue',
        new Date(),
        0,
        'https://t1.ea.ltmcdn.com/fr/posts/5/3/0/education_du_golden_retriever_2035_600.jpg'
      )
  }
}
