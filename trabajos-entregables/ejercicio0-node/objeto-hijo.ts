export{};
class Hijo{

    public altura: number;
    public peso: number;
    public edad: number;
    public percentil : boolean;

    constructor (paramAltura:number, paramPeso:number, paramEdad:number, paramPercentil:boolean){
        this.altura = paramAltura;
        this.peso = paramPeso;
        this.edad = paramEdad;
        this.percentil = paramPercentil;

    }

    obtenerAltura():number{
        return this.altura;
    }
    obtenerPeso():number{
        return this.peso;
    }
    obtenerEdad():number{
        return this.edad;
    }

    obtenerPercentil():void{

        if(this.percentil===true){
            console.log("dentro de los parámetros normales");
        }else {
            this.percentil=true;
            console.log("fuera de los parámetros normales");
        }
    }  
}

let primerHijo = new Hijo(120,30,5,true);
//let edadDelPrimerHijo:number = primerHijo.obtenerEdad;
console.log("la edad del primer niño es:", primerHijo.obtenerEdad);



let segundoHijo= new Hijo(150,45,9,false);
//let alturaDelSegundoHijo:number = segundoHijo.obtenerAltura;
console.log("la altura del segundo niño es:", segundoHijo.obtenerAltura);





