class Persona
{
    private nombre:string;
    constructor(nombre:string){
        this.nombre=nombre;
    }
    getNombre():string{
        return this.nombre
    }
    static metodoEstatico():number
    {
        return 10;
    }

}
let Persona1=new Persona("Juan");
console.log(Persona1.getNombre());
console.log(Persona.metodoEstatico());