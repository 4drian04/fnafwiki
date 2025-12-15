import { ChangeDetectorRef, Component } from '@angular/core';
import { Fnaf2Service } from '../services/fnaf2-service';
import { DetalleAnimatronico } from "../detalle-animatronico/detalle-animatronico";

@Component({
  selector: 'app-fnaf2',
  imports: [DetalleAnimatronico],
  templateUrl: './fnaf2.html',
  styleUrl: '../fnaf1/fnaf1.css',
})
export class Fnaf2 {

  animatronicos: any;

  listaAnimatronicos: any[] = []
  listaAnimatronicosEspeciales = ["Withered Golden Freddy", "Ballon Girl (JJ)", "Shadow Bonnie (RWQFSFASXC)", "Shadow Freddy", "Endo-02"]
  aparicionWitheredGoldenFreddy:number = 0
  aparicionShadowFreddy:number = 0
  aparicionBallonGirl:number = 0
  aparicionShadowBonnie:number = 0
  aparicionEndo02:number = 0
  constructor(private fnaf2Service: Fnaf2Service, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.fnaf2Service.getAnimatronicsFnaf2().subscribe((response: any) => {
      this.animatronicos = response.animatronicos
      this.aparicionWitheredGoldenFreddy = Math.floor(Math.random()*10)
      this.aparicionShadowFreddy = Math.floor(Math.random()*20)
      this.aparicionBallonGirl = Math.floor(Math.random()*15)
      this.aparicionShadowBonnie = Math.floor(Math.random()*20)
      this.aparicionEndo02 = Math.floor(Math.random()*10)
      this.cdr.detectChanges()
    })
  }

  onClickAnimatronico(animatronico: any){
    const index = this.listaAnimatronicos.indexOf(animatronico);

    if (index === -1) {
      this.listaAnimatronicos.push(animatronico);
    } else {
      this.listaAnimatronicos.splice(index, 1);
    }
  }

  audio: HTMLAudioElement = new Audio()
  cambiarImagen(animatronico: any, nombreImagen: String, enter:Boolean): void {
    animatronico.imagenActual = nombreImagen;
    if(enter){
      if(animatronico.nombre === "Toy Freddy"){
        this.reproducirSonido("assets/sonidosFnaf/freddys-laugh.mp3", animatronico.nombre)
      }else{
        if(animatronico.nombre === "Withered Foxy"){
          this.reproducirSonido("assets/sonidosFnaf/five-nights-at-freddys-foxys-piratesong.mp3", animatronico.nombre)
        }else{
          if(animatronico.nombre==="Balloon Boy"){
            this.reproducirSonido("assets/sonidosFnaf2/echo4b.mp3", animatronico.nombre)
          }else{
            if(animatronico.nombre === "Mangle"){
              this.reproducirSonido("assets/sonidosFnaf2/manglestatic.mp3", animatronico.nombre)
            }else{
              if(animatronico.nombre==="Puppet"){
                this.reproducirSonido("assets/sonidosFnaf2/puppet-music-box.mp3", animatronico.nombre)
              }else{
                if(animatronico.nombre==="Withered Freddy"){
                  this.reproducirSonido("assets/sonidosFnaf/freddys-laugh.mp3", animatronico.nombre)
                }else{
                  if(animatronico.nombre==="Withered Golden Freddy"){
                    this.reproducirSonido("assets/sonidosFnaf/golden-freddy.mp3", animatronico.nombre)
                  }else{
                    if(animatronico.nombre==="Ballon Girl (JJ)"){
                      this.reproducirSonido("assets/sonidosFnaf2/echo1.mp3", animatronico.nombre)
                    }else{
                      if(animatronico.nombre==="Shadow Bonnie (RWQFSFASXC)"){
                        this.reproducirSonido("assets/sonidosFnaf2/shadowBonnie.mp3", animatronico.nombre)
                      }else{
                        if(animatronico.nombre==="Shadow Freddy"){
                          this.reproducirSonido("assets/sonidosFnaf2/shadowFreddy.mp3", animatronico.nombre)
                        }else{
                          if(animatronico.nombre==="Endo-02"){
                            this.reproducirSonido("assets/sonidosFnaf2/manglestatic.mp3", animatronico.nombre)
                          }
                        }
                      }
                    }
                  }
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

  reproducirSonido(nombreSonido: string, nombreAnimatronico:string){
    this.audio = new Audio(nombreSonido)
    if(nombreAnimatronico === "Toy Freddy" || nombreAnimatronico==="Balloon Boy" || nombreAnimatronico==="Mangle" || nombreAnimatronico==="Puppet" || nombreAnimatronico==="Withered Freddy" || nombreAnimatronico==="Endo-02"){
      this.audio.loop = true
    }
    this.audio.play()
  }
}
