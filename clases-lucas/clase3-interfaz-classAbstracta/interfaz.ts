//class Mentira{};

interface Lala {};

interface Auto {        //definición de la interface
    acelerar():void;
    getVelocidadActual():number;
}
class AutoDeCarrera /*extends Mentira*/ implements Auto, Lala{   //va primero extends y después implements
                                                                // pero no es una buena práctica q se herede una clase, cuando
                                                                // sólo estoy declarando, no imlementando métodos.
    private velocidadActual:number;
    constructor(){
        this.velocidadActual=0;
    }
    public acelerar(): void {
        this.velocidadActual +=50;
    }
    public getVelocidadActual(): number {
        return this.velocidadActual;
    }
}

class Carreta implements Auto {
    private velocidadActual:number;
    constructor(){
        this.velocidadActual = 0;
    }
    public acelerar(): void {
        this.velocidadActual;         
    }
    public getVelocidadActual(): number {
        return this.velocidadActual;
    }

}