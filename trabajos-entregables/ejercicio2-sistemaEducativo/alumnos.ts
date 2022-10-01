export{};
class SistemaEducativo {

    private materia:string;
    private nomMaestro:string;
    private nomApeAlumno:string;
    private notaAlumno: number;
    
    constructor(pMateria:string, pNomMaestro:string, pNomApeAlumno?:string, pNotaAlum?:number){

    this.materia = pMateria;
    this.nomMaestro = pNomMaestro;
    //this.nomApeAlumno = pNomApeAlumno; al ser un parámetro opcional no es necesario
    //this.notaAlumno = pNotaAlum;  al ser un parámetro opcional no es necesario
   
    
    }
    matricularAlumno(){
        return this.nomApeAlumno;
    }
    expulsarAlumno(){
        return this.nomApeAlumno   //let ultimo = frutas.pop()
    }
    contratarMaestro(){
        return this.nomMaestro;   //let nuevaLongitud = frutas.push('Naranja')
    }
    despedirMaestro(){
        return this.nomMaestro;
    }
    
    llamarMateria() {
        return this.materia; 
    }

    llamarAlumno() {
        return this.nomApeAlumno;
    }   
    llamarValorNota(){
        return this.notaAlumno;
    }
    llamarNota():boolean{
        return (this.notaAlumno >=7);
    }    
   // llamarAprobadoDesaprobado():string{
   //     return (this.llamarNota = true)
    //}
    
    llamarMaestro():string{
        return this.nomMaestro;
    }
}

let alumno1 = new SistemaEducativo ("Ingles","Maestro Juan","María", 10,);
let alumno2 = new SistemaEducativo ("Ingles","Maestro Juan","Mario", 9);
let alumno3 = new SistemaEducativo ("Ingles","Maestro Juan","Pepe", 1);

let alumno12 = new SistemaEducativo ("Español","Maestra Ana","María", 10,);
let alumno22 = new SistemaEducativo ("Español","Maestra Ana","Mario", 9);
let alumno32 = new SistemaEducativo ("Español","Maestr Ana","Pepe", 1);

let maestroMateria1 = new SistemaEducativo ("Ingles","Maestro Juan");
let maestroMateria2 = new SistemaEducativo ("Español","Maestro José");

let listadoAlumIngles[] = [alumno1,alumno2,alumno3];
let listadoAlumEspaniol[] = [alumno1,alumno2,alumno3];
let listadoMaestros[] = [maestroMateria1,maestroMateria2];



console.log("********************************");  //  `${variable`}   imprime lo que contiene una variable
console.log("*********Materia:" +maestroMateria1.llamarMateria()+"********");
console.log("*********" +maestroMateria1.llamarMaestro()+"**********");
console.log("********************************");


if (alumno1.llamarNota()){
    console.log("Alumno : "+ alumno1.llamarAlumno() +" , aprobado con " + alumno1.llamarValorNota())}
else { console.log("Alumno : " + alumno1.llamarAlumno() +" , desaprobado con " + alumno3.llamarValorNota());
}
if (alumno2.llamarNota()){
    console.log("Alumno : "+ alumno2.llamarAlumno() + ", aprobado con " + alumno2.llamarValorNota())}
else { console.log("alumno : " + alumno2.llamarAlumno() + ", desaprobado con " + alumno3.llamarValorNota());
}
if (alumno3.llamarNota()){
    console.log("Alumno : "+ alumno3.llamarAlumno() +" , aprobado con " + alumno3.llamarValorNota())}
else { console.log("Alumno : " + alumno3.llamarAlumno() +", desaprobado con " + alumno3.llamarValorNota());
}

console.log("");
console.log("********************************");
console.log("*********Materia:" +maestroMateria2.llamarMateria()+"********");
console.log("*********" +maestroMateria2.llamarMaestro()+"**********");
console.log("********************************");


