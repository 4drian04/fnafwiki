import { ChangeDetectorRef, Component } from '@angular/core';
import { Fnaf1Service } from '../services/fnaf1-service';
import { DetalleAnimatronico } from "../detalle-animatronico/detalle-animatronico";
import { NgFor } from "../../../node_modules/@angular/common";

@Component({
  selector: 'app-fnaf1',
  imports: [DetalleAnimatronico, NgFor],
  templateUrl: './fnaf1.html',
  styleUrl: './fnaf1.css',
})
export class Fnaf1 {

  aparicionGoldenFreddy: number = 0
  animatronicos: any;
  listaAnimatronicos: any[] = []
  constructor(private fnaf1Service: Fnaf1Service, private cdr: ChangeDetectorRef) {}
  isMobile(): boolean {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  ngOnInit(): void {
    this.fnaf1Service.getAnimatronicsFnaf1().subscribe((response: any) => {
      this.animatronicos = response.animatronicos
      this.aparicionGoldenFreddy = Math.floor(Math.random()*10)
      this.cdr.detectChanges()
    })
  }
  audio: HTMLAudioElement = new Audio()
  cambiarImagen(animatronico: any, nombreImagen: String, enter:Boolean): void {
    animatronico.imagenActual = nombreImagen;
    if(enter){
      if(animatronico.nombre === "Freddy Fazbear"){
      this.reproducirSonido("assets/sonidosFnaf/freddys-laugh.mp3", animatronico.nombre)
      }else{
        if(animatronico.nombre === "Foxy"){
          this.reproducirSonido("assets/sonidosFnaf/five-nights-at-freddys-foxys-piratesong.mp3", animatronico.nombre)
        }else{
          if(animatronico.nombre==="Chica" || animatronico.nombre === "Bonnie"){
            this.reproducirSonido("assets/sonidosFnaf/bonnie-chica.mp3", animatronico.nombre)
          }else{
            this.reproducirSonido("assets/sonidosFnaf/golden-freddy.mp3", "Golden Freddy")
          }
        }
      }
    }else{
      this.audio.pause()
    }
  }

  reproducirSonido(nombreSonido: string, nombreAnimatronico:string){
    this.audio = new Audio(nombreSonido)
    if(nombreAnimatronico === "Freddy Fazbear"){
      this.audio.loop = true
    }else{
      if(nombreAnimatronico==="Chica" || nombreAnimatronico==="Bonnie"){
        this.audio.loop=true
      }
    }
    this.audio.play()
  }

  onClickAnimatronico(animatronico: any){
    const index = this.listaAnimatronicos.indexOf(animatronico);

    if (index === -1) {
      this.listaAnimatronicos.push(animatronico);
    } else {
      this.listaAnimatronicos.splice(index, 1);
    }
  }
}