abstract class AutoCiudad{
    protected velocidadActual:number;
    private estaPrendido: boolean;

    public constructor(){
        this.velocidadActual = 0;
        this.estaPrendido = false;
    }
    abstract acelerar

}

interface Auto{
    acelerar():void;
    getVelocidadActual():number;
}

class AutoCiudadChico extends AutoCiudad {

    public acelerar():

}