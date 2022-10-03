
class Decodificador{
    private canalActual:number;

    constructor(paramCanalInicial:number){
        this.canalActual=paramCanalInicial;
    }
    cambiarCanal(){
        this.canalActual=this.canalActual+1;
        }
    }
class Televisor{
    private estaPrendido:boolean;
    private decodificador:Decodificador;
    private volumenActual:number;
    
    constructor(paramEstaPrendido:boolean, paramDecodificador:Decodificador, paramVolumenInicial:number){
        this.estaPrendido=paramEstaPrendido;
        this.decodificador=paramDecodificador;
        this.volumenActual=paramVolumenInicial;
    }
    prenderApagar():void{
       if(this.estaPrendido){
        this.estaPrendido=false;
       }else
            this.estaPrendido=true;
    }
    subirVolumen():void{
        this.volumenActual=this.volumenActual+1;
    }
    bajarVolumen():void{
        this.volumenActual=this.volumenActual-1;
    }
    subirCanal():void{
        this.decodificador.cambiarCanal();
    }
    bajarCanal(){
        this.decodificador.cambiarCanal();
    }
}

let deco1= new Decodificador(1);
let primerTelevisor: Televisor = new Televisor(true, deco1,10);


