export{};
class Televisor1{ //
                //con la palabra reservada "class" moldea el objeto
    
    private estaPrendido: Boolean; //se declaran con la palabra reservada "private"
    private volumenActual: number;
    private canalActual: number;
    private modelo : string;
    private marca : string;
    private pulgada : number;
  
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
    subirVolumen():void {
        this.volumenActual = this.volumenActual++;
    }
    setearPulgadas(paramPulgada:number):void{
        this.pulgada=paramPulgada;
    } 

}
//let primerTelevisor = Televisor1(); //a ésto se le llama instanciar (crear) un objeto(Televisor) 
//tdv no podemos diferenciar los objetos, hasta ahora son todos iguales
primerTelevisor.setearPulgadas(43); //le doy una caracteristica sin crear un "constructor"
primerTelevisor.obtenerVolumen();




