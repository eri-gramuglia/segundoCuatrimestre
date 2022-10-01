export{};

//declaro la primer clase
class Listado {
    private nombreAlumno:string;
    constructor (pNombreAlumno:string){
        this.nombreAlumno=pNombreAlumno;
    }
    llamarNombreAlumno():string{
        return this.nombreAlumno;
    }
}
//declaro segunda clase
class Nota {
    private notaAlumno: number;
    constructor(pNotaAlumno:number){
        this.notaAlumno=pNotaAlumno;
    }
llamarNotaAlumno():boolean{
    if (this.notaAlumno>= 7)
    return true;
    else (this.notaAlumno<6)
    return false;
}
}
//declaracion de tercer clase e integracion de las class anteriores
class SistemaEducativo {
    private nombreMaestro:string;
    private matricular:boolean;
    private contratar:boolean;
    private expulsar:boolean;
    private despedir:Boolean;
    private listado:Listado;
    private nota:Nota;
    
    constructor (pNombreMaestro:string, pMatricular:boolean, pContratar:boolean, pExpulsar:boolean,pDespedir:boolean,pListado:Listado,pNota:Nota){
        this.nombreMaestro=pNombreMaestro;
        this.matricular=pMatricular;
        this.contratar=pContratar;
        this.expulsar=pExpulsar;
        this.despedir=pDespedir;
        this.listado=pListado;
        this.nota=pNota;
    }
}
//primer consulta listado de alumnos
let alumno1=new Listado ("Erica  Gramuglia");
let alumno2=new Listado ("Juan Perez");
let alumno3=new Listado ("Ana Diaz");

console.log("alumno:",alumno1.llamarNombreAlumno());

let ListadoAlumnos: Listado[]=[alumno1,alumno2,alumno3];


console.log("Lista de Alumnos: ",ListadoAlumnos);

