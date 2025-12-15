import { ChangeDetectorRef, Component } from '@angular/core';
import { Fnaf3Service } from '../services/fnaf3-service';
import { DetalleAnimatronico } from "../detalle-animatronico/detalle-animatronico";

@Component({
  selector: 'app-fnaf3',
  imports: [DetalleAnimatronico],
  templateUrl: './fnaf3.html',
  styleUrl: './fnaf3.css',
})
export class Fnaf3 {
  animatronicos: any;
  listaAnimatronicos: any[] = []
  aparicionShadowBonnie:number = 0
  constructor(private fnaf3Service: Fnaf3Service, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.fnaf3Service.getAnimatronicsFnaf3().subscribe((response: any) => {
      this.animatronicos = response.animatronicos
      this.aparicionShadowBonnie = Math.floor(Math.random()*10)
      this.cdr.detectChanges()
    })
  }

  audio: HTMLAudioElement = new Audio()
  cambiarImagen(animatronico: any, nombreImagen: String, enter:Boolean): void {
    animatronico.imagenActual = nombreImagen;
    if(enter){
      if(animatronico.nombre === "Springtrap"){
      this.reproducirSonido("assets/sonidosFnaf3/fnaf3-springtrap.mp3", animatronico.nombre)
      }else{
        if(animatronico.nombre === "Phantom Puppet"){
          this.reproducirSonido("assets/sonidosFnaf3/fnaf3-jumpscare-phantom-puppet.mp3", animatronico.nombre)
        }else{
          if(animatronico.nombre==="Phantom Mangle"){
            this.reproducirSonido("assets/sonidosFnaf3/manglestatic3.mp3", animatronico.nombre)
          }else{
            if(animatronico.nombre==="Phantom Balloon Boy"){
              this.reproducirSonido("assets/sonidosFnaf2/echo1.mp3", animatronico.nombre)
            }else{
              if(animatronico.nombre==="Phantom Freddy"){
                this.reproducirSonido("assets/sonidosFnaf/freddys-laugh.mp3", animatronico.nombre)
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
    if(nombreAnimatronico === "Springtrap" || nombreAnimatronico==="Phantom Mangle"|| nombreAnimatronico==="Phantom Freddy"){
      this.audio.loop = true
    }
    this.audio.play()
  }

}
