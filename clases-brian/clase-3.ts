//clase 21 de septiembre de 2022.

class Televisor{
    private canalActual:number;
    protected volumenActual:number; //mantiene el encapsulado de la variable y se puede acceder desde la clase hija.
    protected estaPrendido:boolean;

    constructor (paramCanal:number, paramVolumen:number){
        this.canalActual=paramCanal;
        this.volumenActual=paramVolumen;
    }
    public getCanalActual():number{
        return this.canalActual;
    }
    public setCanal(paramCanal:number):void{
        this.canalActual=paramCanal;
    }
    public getVolumenActual():number{
        return this.volumenActual;
    }
    public setVolumenActual(paramVolumen:number):void{
        this.volumenActual=paramVolumen;
    }
    protected prenderApagar (): void{    //mantiene el encapsulado del metodo y se puede acceder desde la clase hija
        if (this.estaPrendido===true){
            this.estaPrendido=false;
        } else {
            this.estaPrendido=false;
        }
    }
    
}

class SmartTV extends Televisor{    //la clase hija hereda todo de la clase padre: variables, métodos..
    private navegarInternet:boolean;
    private prenderWifi:boolean;

    constructor(paramCanal:number, paramVolumen:number){

        super(paramCanal,paramVolumen);

        // la palabra reservada "SUPER" ==> llama al constructor del padre y despues se sigue inicializando las variables especificas de la clase SmartTV
        this.navegarInternet = false;    
        this.prenderWifi = false;
    }

    public setNavegar():void{
        this.navegarInternet=true;
    }
    public setDejarNavegar():void{
        this.navegarInternet=false;
    }
    public setEncenderWifi():void{
        this.prenderWifi= true;
    }
    public setApagarWifi():void{
        this.prenderWifi = false;
    }
}

let tvDeTubo: Televisor = new Televisor (45,25);
let tvSmart: SmartTV = new SmartTV(25,50);

let volumenSmart:number=56;
let canalSmart:number=45;
console.log("el volumen actual del Smart es ", +volumenSmart);
console.log("el canal actual del Smart es ", +canalSmart);
