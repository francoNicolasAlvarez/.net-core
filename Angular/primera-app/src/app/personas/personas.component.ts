import { Component } from "@angular/core";

@Component({
    selector:"app-personas",
    templateUrl:"./personas.component.html",
    styleUrls:['./personas.component.css']
   
})
export class personasComponente
{
    titulo="ingeniero";
    deshabilitar=false;
    mensaje="";
    mostrar=false;
    agregarPersona(){
        this.mensaje="persona agregada";
        this.mostrar=true;

    }
    
    
}