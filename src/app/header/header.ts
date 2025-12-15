import { Component } from '@angular/core';
import { AppRoutingModuloe } from "../app.routes";
import { NgClass } from "../../../node_modules/@angular/common/";

@Component({
  selector: 'app-header',
  imports: [AppRoutingModuloe, NgClass],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  tema: 'fnaf' | 'fnaf3' = 'fnaf';
  onMouseEnter(){
    const audio = new Audio("assets/sonidosFnaf/fnaf2-camera.mp3")
    audio.play()
  }

  onMouseClickFnaf(){
    this.tema='fnaf'
    const audio = new Audio("assets/sonidosFnaf/fnaf2-camera.mp3")
    audio.play()
  }

  onMouseClickFnaf3(){
    this.tema='fnaf3'
    const audio = new Audio("assets/sonidosFnaf/fnaf2-camera.mp3")
    audio.play()
  }

  playEasterEgg(){
    const audio = new Audio("assets/sonidosFnaf/partyfavorraspypart_ac01_3.mp3")
    audio.play()
  }
}
