export{};
class Auto{
    private marca: string;
    private modelo: string;
    private tipo: string;   //naftero-gasolero
    private estaEncendidoApagado: boolean;
    private velocidadActual:number;
    
    constructor (paramMarca:string, paramModelo:string, paramTipo:string, 
        EstaEncendido:boolean, velocidadInicial:number){

        this.marca = paramMarca;
        this.modelo = paramModelo;
        this.tipo = paramTipo;
        this.estaEncendidoApagado = EstaEncendido;
        this.velocidadActual = velocidadInicial;
     
    }

    obtenerMarca():string{
        return this.marca;
    }
    obtenerModelo():string{
        return this.modelo;
    }
    obtenerTipo():string{
        return this.tipo;
    }
    encenderApagar():void{
        if(this.estaEncendidoApagado===true){ //está encendido
            this.estaEncendidoApagado=false;
        }else {
            this.estaEncendidoApagado=true;   //la palabra reservada "this" hace referencia a la variable "estaEncendido"
        }
       
    }
    aumentarVelocidad():void {
       this.velocidadActual = this.velocidadActual + 1;
    }
    disminuirVelocidad():void {
        this.velocidadActual = this.velocidadActual - 1;
    }
   
}
 
let auto1 = new Auto ("Audi","A3", "naftero",true,40 );
let auto2 = new Auto ("Chevrolet","Agile","naftero",true,60);
let auto3 = new Auto ("Hyundai","Veloster","naftero",false,20);


console.log ("--------------------------");
console.log (".......AUTOMÓVILES........")
console.log ("--------------------------");
console.log("");
console.log("El modelo del ", auto1.obtenerMarca(),"es: ", auto1.obtenerMarca());
console.log("El modelo del ", auto2.obtenerMarca(),"es: ", auto2.obtenerMarca());
console.log("El modelo del ", auto3.obtenerMarca(),"es: ", auto3.obtenerMarca());
console.log("El motor del ", auto2.obtenerMarca(),"es: ", auto2.obtenerTipo());
console.log("");
console.log(auto1.obtenerMarca());

