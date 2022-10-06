interface Auto {
    acelerar(): void;
    getVelocidadActual(): number;
  }
  
  class AutoCarreras implements Auto {
    private velocidadActual: number;
  
    constructor() {
      this.velocidadActual = 0;
    }
  
    public acelerar(): void {
      this.velocidadActual += 50;
    }
  
    public getVelocidadActual(): number {
        return this.velocidadActual;
    }
  }
  
  class Carreta implements Auto {
    private velocidadActual: number;
  
    constructor() {
      this.velocidadActual = 0;
    }
  
    public acelerar(): void {
        this.velocidadActual += 1;
    }
  
    public getVelocidadActual(): number {
        return this.velocidadActual;
    }
  }