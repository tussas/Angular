import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
//cdo se inicializa el footer, llama al constructor y obtiene el año
  anio: number;

constructor(){
  this.anio = new Date().getFullYear() + 1;
}

}
