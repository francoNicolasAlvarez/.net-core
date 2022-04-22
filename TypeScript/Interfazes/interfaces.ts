interface Usuario{
    nombreUsuario:string;
    password:string;
    confirmarPassword?:string;
}

let Usuario1:Usuario={nombreUsuario:"Juan", password:"1234"};

console.log(Usuario1);   
console.log(Usuario1.nombreUsuario);

interface abordar
{
abordarTransporte():void;
}
let avion:abordar={
    abordarTransporte:function(){
        console.log("abordando");
    }

}
avion.abordarTransporte();