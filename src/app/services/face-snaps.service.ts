import { Injectable } from "@angular/core";
import { FaceSnap } from "src/app/models/face-snap.model";

@Injectable({
    providedIn: "root"
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
 
    {
        id: 1,
        title: 'Nirvana',
        description: 'Mon premier chat',
        createdDate: new Date(),
        snaps: 145,
        imageUrl: 'https://lemagduchat.ouest-france.fr/images/dossiers/2022-02/assurance-chat-goutiere-171537.jpg',
        location: 'L-L-N'
    },

    {
      id: 2,
      title: 'Gasoline',
      description: 'Mon petit chat bibou',
      createdDate: new Date(),
      snaps: 4555,
      imageUrl: 'https://www.josera.fr/media/chat_evaille_de_tortue_3.jpg',
      location: 'Ottignies'
    },

    {
      id: 3,
      title: 'Nando',
      description: 'Le petit chiengue',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: 'https://t1.ea.ltmcdn.com/fr/posts/5/3/0/education_du_golden_retriever_2035_600.jpg'
    }
    ]

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number) :  FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found');  
        }else{
            return faceSnap
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}