import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from 'src/app/services/face-snaps.service';
import { Subject, interval,takeUntil,tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  faceSnaps!: FaceSnap[];
  private destroy$!: Subject<boolean>

  constructor(private faceSnapsService: FaceSnapsService) {}
 
  ngOnInit() {
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
    
    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
      ).subscribe();
  }

  ngOnDestroy(): void {
      this.destroy$.next(true)
  }
}

