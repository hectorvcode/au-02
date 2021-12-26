import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [
    new Persona('Hector', 'Vasquez'), 
    new Persona('Natalia', 'Cardenas'),
    new Persona('Alison', 'Vasquez')
  ];
  nombreInput:string='';
  apellidoInput:string='';

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push( persona1 );
  }
}
