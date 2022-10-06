interface Auto {
    acelerar(): void;
    getVelocidadActual(): number;
  }
  
  // class AutoCarreras implements Auto {
  //   private velocidadActual: number;
  
  //   constructor() {
  //     this.velocidadActual = 0;
  //   }
  
  //   public acelerar(): void {
  //     this.velocidadActual += 50;
  //   }
  
  //   public getVelocidadActual(): number {
  //       return this.velocidadActual;
  //   }
  // }
  
  abstract class AutoCiudad implements Auto {
    protected velocidadActual: number;
    private estaPrendido: boolean;
  
    public constructor() {
        this.velocidadActual = 0;
        this.estaPrendido = false;
    }
  
    abstract acelerar(): void;
   
    public prender(): void {
        this.estaPrendido = true;
    }
  
    public apagar(): void {
        this.estaPrendido = false;
    }
  
    protected estadoMotor(): boolean{
      return this.estaPrendido;
    }
  
    // abstract getVelocidadActual(): number;
  
    public getVelocidadActual(): number {
        return this.velocidadActual;
    }
  }
  
  // Herencia de clase abstracta
  class AutoCiudadChico extends AutoCiudad {
    
    public acelerar(): void {
        this.velocidadActual += 10;
    }
  
    getVelocidadActual(): number {
        return this.velocidadActual;
    }
  }