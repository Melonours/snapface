import { Component, OnInit,Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

constructor (private faceSnapsService : FaceSnapsService,
             private router : Router,
             private route : ActivatedRoute){}

  ngOnInit() : void{
    this.buttonText= 'Oh Snap!'
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oups, unSnap!'
    }else{
      this.buttonText = 'Oh Snap!';
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    }
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
