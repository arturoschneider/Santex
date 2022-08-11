import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'secondProject';

  contador = 0;

  sumarUno(): void {
    this.contador += 1;

  }
  names = [ "Agus", "Tomas", "Pepo", "Zara"];

  random = Math.floor(Math.random() * this.names.length);
  name = this.names[this.random]

  mostrarNombre(name: string, price: number): void {

    console.log(name)
    console.log(price)
  }

  products = [{name: "Mouse", "price": 10}, {name: "SSD", "price": 200}, {name:"Monitor", "price": 40}, {name:"RAM", price: 25}, {name: "SSD", price: 25}]// "HDD": 15, "Teclado": 30, "Silla": 60, "Auris": 50, "Cámara": 50, "Cooler": 60, "Fuente": 80} ]
  isButtonVisible = true;
  showHide(){
    this.isButtonVisible = !this.isButtonVisible;
  }
}

