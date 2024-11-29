import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  base: number = 0;
  altura: number = 0;
  area: number = 0;

  
  calcularArea() {
    if (this.base && this.altura) {
      this.area = this.base * this.altura;
    } else {
      alert('Por favor, ingresa ambos lados.');
    }
  }
}
