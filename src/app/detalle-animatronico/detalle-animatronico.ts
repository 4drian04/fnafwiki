import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-animatronico',
  imports: [],
  templateUrl: './detalle-animatronico.html',
  styleUrl: './detalle-animatronico.css',
})
export class DetalleAnimatronico {
  @Input() animatronico: any
  @Input() isActive: Boolean = false
  
}
