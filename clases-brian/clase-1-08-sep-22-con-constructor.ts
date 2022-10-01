class Televisor { //el objeto Televisor con la palabra reservada "class" moldea el objeto

 
//las vbles internas se declaran con la palabra reservada "private"
private estaPrendido: boolean; 
private volumenActual: number;
private canalActual: number;
private modelo : string;
private marca : string;
private pulgadas : number;


    constructor (paramVolumen:number, paramPulgada:number){ // éstos parametros pueden ser opcionales
                
        this.volumenActual = paramVolumen;
        //this.canalActual = paramCanal;  // el "this" hace referencia a la clase Televisor
        //this.modelo = paramModelo;
        //this.marca = paramMarca;
        this.pulgadas = paramPulgada;
    }
    prenderApagar():void{
        if(this.estaPrendido===true){
            this.estaPrendido=false;
        }else {
            this.estaPrendido=true;   //la palabra reservada "this" hace referencia a la variable "estaPrendido"
        }
    }
    obtenerVolumen():number{
        return this.volumenActual;
     }
    subirVolumen(): void {
        this.volumenActual = this.volumenActual++;
    }
    setearPulgadas(paramPulgada:number):void{
        this.pulgadas=paramPulgada;
    }
}

let primerTelevisor = new Televisor(50,60);    
//a ésto se le llama instanciar (crear) un objeto(Televisor) 

let volumenDelPrimerTelevisor:number = primerTelevisor.obtenerVolumen();

console.log("volumen "+volumenDelPrimerTelevisor);


let segundoTelevisor = new Televisor(20,49);
 //tdv no podemos diferenciar los objetos, hasta ahora son todos iguales/mmmm
        
    
    






