import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo="listado de personas";
  personas:Persona[]=[new Persona("juan","perez"),
new Persona("laura","juarez"),new Persona("juan","perez")];

nombreInput:string="";

apellidoInput:string="";

agregarPersona(){
  let persona1=new Persona(this.nombreInput,this.apellidoInput)
  this.personas.push(persona1);
}
}
