import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgIf } from "../../../node_modules/@angular/common/";
import { Router } from '@angular/router';


@Component({
  selector: 'app-not-found-component',
  imports: [NgIf],
  templateUrl: './not-found-component.html',
  styleUrl: './not-found-component.css',
})
export class NotFoundComponent {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
  constructor(private router: Router) {}

  showVideo = false;

  playVideo() {
    this.showVideo = true;

    // Esperamos a que Angular pinte el video
    setTimeout(() => {
      this.bgVideo.nativeElement.muted = false;
      this.bgVideo.nativeElement.play();
    });
  }
  goHome() {
    this.router.navigate(['/']);
  }
}
