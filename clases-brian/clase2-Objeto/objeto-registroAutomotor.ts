export{};


class Autos{
    private numMotor: number;
    private patente: number;
    private marca: string;
    private modelo: string;
   
    constructor (paramNumMotor: number, paramPatente:number, paramMarca:string, paramModelo:string){
        this.numMotor = paramNumMotor;
        this.patente = paramPatente;
        this.marca = paramMarca;
        this.modelo = paramModelo;
    }
        obtenerNumMotor(): number{
            return this.numMotor
        }
        obtenerPatente():number{
            return this.patente;
    }
        obtenerMarca():string{
            return this.marca;
    }
        obtenerModelo():string{
            return this.modelo;
    }  
}
class registroAutomotor{
    private patenteRegistro:number;
    private marcaRegistro:string;
    private modeloRegistro:string;

    constructor (paramPatenteRegistro:number, paramMarcaRegistro:string, paramModeloRegistro:string){
        this.patenteRegistro = paramPatenteRegistro;
        this.marcaRegistro = paramMarcaRegistro;
        this.modeloRegistro = paramModeloRegistro;
    }    
        buscarPatente():number{      //consulta por un auto en un listado
        return this.patenteRegistro;
        }
        buscarMarca():string{      //consulta por un auto en un listado
            return this.marcaRegistro;
        }
        buscarModelo():string{      //consulta por un auto en un listado
            return this.modeloRegistro;
            }

}
let listadoAutos [3] = new Auto [3]; 
listadoAutos[0] = new Autos (1111, "Audi","A3");
listadoAutos[1] = new Autos (2222, "Chevrolet","Agile");
listadoAutos[2] = new Autos (3333, "Hyundai","Veloster");

function mostrarListado(listadoAutos) {
    for (let index = 0; index < listadoAutos.length; index++) {
        const elementos = listadoAutos[index];
        console.log(listadoAutos[index]);
    }
}    

console.log ("--------------------------");
console.log (".......AUTOMÓVILES........")
console.log ("--------------------------");
console.log("");

mostrarListado(listadoAutos);

//console.log("El modelo del ", listadoAutos[0].obtenerMarca(),"es: ", listadoAutos[0].obtenerMarca());
//console.log("El motor del ", listadoAutos[0].obtenerMarca(),"es: ", listadoAutos[0].obtenerTipo());
//console.log("Está encendido el ", primerAuto.obtenerMarca()," ", primerAuto.encenderApagar());
//console.log("");
