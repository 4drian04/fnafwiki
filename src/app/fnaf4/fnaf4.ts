import { ChangeDetectorRef, Component } from '@angular/core';
import { DetalleAnimatronico } from "../detalle-animatronico/detalle-animatronico";
import { Fnaf4Service } from '../services/fnaf4-service';

@Component({
  selector: 'app-fnaf4',
  imports: [DetalleAnimatronico],
  templateUrl: './fnaf4.html',
  styleUrl: '../fnaf1/fnaf1.css',
})
export class Fnaf4 {

  animatronicos: any;
  listaAnimatronicos: any[] = []
  constructor(private fnaf4Service: Fnaf4Service, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.fnaf4Service.getAnimatronicsFnaf4().subscribe((response: any) => {
      this.animatronicos = response.animatronicos
      this.cdr.detectChanges()
    })
  }

  audio: HTMLAudioElement = new Audio()
  cambiarImagen(animatronico: any, nombreImagen: String, enter:Boolean): void {
    animatronico.imagenActual = nombreImagen;
    if(enter){
      if(animatronico.nombre === "Nightmare Balloon Boy"){
      this.reproducirSonido("assets/sonidosFnaf4/ballon-boy-fnaf4.mp3", animatronico.nombre)
      }else{
        if(animatronico.nombre === "Nightmare Fredbear"){
          this.reproducirSonido("assets/sonidosFnaf4/five-nights-at-freddy's-4-nightmare-nightmare-fredbear-laugh.mp3", animatronico.nombre)
        }else{
          if(animatronico.nombre==="Nightmare Foxy"){
            this.reproducirSonido("assets/sonidosFnaf4/FNAF4_Nightmare_Foxy_Dum_Dum_Dum.mp3", animatronico.nombre)
          }else{
            if(animatronico.nombre==="Nightmare"){
              this.reproducirSonido("assets/sonidosFnaf2/shadowFreddy.mp3", animatronico.nombre)
            }else{
              if(animatronico.nombre==="Nightmare Mangle"){
                this.reproducirSonido("assets/sonidosFnaf4/Mangle_fnaf4.mp3", animatronico.nombre)
              }else{
                if(animatronico.nombre==="Nightmare Freddy"){
                  this.reproducirSonido("assets/sonidosFnaf/freddys-laugh.mp3", animatronico.nombre)
                }
              }
            }
          }
        }
      }
    }else{
      this.audio.pause()
    }
  }

  onClickAnimatronico(animatronico: any){
    const index = this.listaAnimatronicos.indexOf(animatronico);

    if (index === -1) {
      this.listaAnimatronicos.push(animatronico);
    } else {
      this.listaAnimatronicos.splice(index, 1);
    }
  }

  reproducirSonido(nombreSonido: string, nombreAnimatronico:string){
    this.audio = new Audio(nombreSonido)
    if(nombreAnimatronico === "Nightmare Fredbear" || nombreAnimatronico==="Nightmare Mangle"|| nombreAnimatronico==="Nightmare" || nombreAnimatronico==="Nightmare Foxy" || nombreAnimatronico=="Nightmare Freddy"){
      this.audio.loop = true
    }
    this.audio.play()
  }
}
