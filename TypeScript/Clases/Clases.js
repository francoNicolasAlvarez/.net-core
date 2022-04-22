"use strict";
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        this.nombre = nombre;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.metodoEstatico = function () {
        return 10;
    };
    return Persona;
}());
var Persona1 = new Persona("Juan");
console.log(Persona1.getNombre());
console.log(Persona.metodoEstatico());
