/*class Prueba{
    private transporte:avion;

    public probar(){
        this.transporte=new avion();
        this.transporte.setColor("rojo");

    }
}*/

class Vehiculo{
    protected color: string;                //variable interna q accede el padre y los hijos
    protected encendidoApagado:boolean;
    
    constructor (color:string, encendidoApagado:boolean){
        this.color=color;
        this.encendidoApagado=encendidoApagado;
    }
    protected moverse():void{
        console.log("Me estoy moviendo")
    }
}

class avion extends Vehiculo{
    private cantTurbinas:number;

    constructor(color:string, encendidoApagado:boolean, cantTurbinas:number){
        super("azul",false);   //seteo el constructor del padre. estamos anexando la construccion del padre
        this.cantTurbinas=cantTurbinas;   //seteo
    }

    public setColor(color:string){
        this.color=color;
    }
    public getColor(){
        //return this.color; ó
        return this.color;
        //super.moverse();                 //con "super" accedo al metodo de la clase padre
    }
    public volar(){
        super.moverse();
    }
}
class Automovil extends Vehiculo{        //con "extends" estoy diciendo que "Automovil es hijo de "Vehiculo"
    private tipoTecho:string;
                                    //sin constructor se genera el constructor por defecto
    public andar(){
        super.moverse();
    }
}


let vehiculo1=new Vehiculo("rojo",false);
//vehiculo1.moverse(); //no puedo acceder xq el método está protegido

let avion1= new avion("rojo",false,4);
avion1.getColor();          //si fuera "public color": string, puedo acceder directamente al atributo y cambiar el color: avion1="verde;"
avion1.setColor("rojo");

let auto1=new Automovil("celeste",false);

//let prueba1 = new Prueba();
  //  prueba1.probar();
