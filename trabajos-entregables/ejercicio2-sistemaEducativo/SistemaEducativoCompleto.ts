"use strict";
class Alumno{
    private nombre:string;
    private apellido:string;
    private notaMatematica:number;
    private notaGeografia:number;
    private notaSociales:number;

    constructor (pNombre:string,pApellido:string, pNotaMatematica:number, pNotaGeografia:number, pNotaSociales:number){
        this.nombre=pNombre;
        this.apellido=pApellido;
        this.notaMatematica=pNotaMatematica;
        this.notaGeografia=pNotaGeografia;
        this.notaSociales=pNotaSociales;
    }
    public setNombre(pNombre:string):void{
        this.nombre=pNombre;
    }
    public getNombre  ():string{
        return this.nombre;
    }
   
    public setApellido(pApellido:string):void{
        this.apellido=pApellido;
    }
    public getApellido():string{
        return this.apellido;
    }

    public getCalificacion(pNota:number):string{
        if (pNota>7){
            return ("ALUMNO: "+ this.getApellido(), " APROBADO CON "+pNota);
        } else{
            return ("ALUMNO: "+ this.getApellido(), " DESAPROBADO CON "+pNota);
        }
    }
    public getNotaMatematica(){
        return this.getCalificacion(this.notaMatematica);
    }
    public getNotaGeografia(){
        return this.getCalificacion(this.notaGeografia);
    }
    public getNotaSociales(){
        return this.getCalificacion(this.notaSociales);
    }
}
class Profesor{
    private nombre:string;
    private apellido:string;
    private listadoAlumno:Alumno[];

    constructor (pNombre:string,pApellido:string, pListadoA1:Alumno[]){
        this.nombre=pNombre;
        this.apellido=pApellido;
        this.listadoAlumno=pListadoA1;
    }
    public getNombre():string{
        return this.nombre;
    }
    public setNombre(pNombre:string):void{
        this.nombre=pNombre;
    }
    public getApellido():string{
        return this.apellido;
    }
    public setApellido(pApellido:string):void{
        this.apellido=pApellido;
    }
}
class Escuela {
    private nombreEscuela:string;
    private listadoAlumnos:Alumno[];
    private listadoProfesores:Profesor[];

    constructor(pNombre:string, pListadoAlumnos:Alumno[], pListadoProfesores:Profesor[]){
        this.nombreEscuela = pNombre;
        this.listadoAlumnos = pListadoAlumnos;
        this.listadoProfesores = pListadoProfesores;
    }
        public getNombreEscuela(){
            return this.nombreEscuela;
        }
        public setNombreEscuela(pNombre:string){
            this.nombreEscuela=pNombre;
        }
        public contrataProfesor(pProfesor:Profesor):void{
            this.listadoProfesores.push(pProfesor); //inserta un elemento en el arreglo
            console.log("Profesor Contratado: " +pProfesor.getApellido());
        }
        public despedirProfesor (pProfesor:Profesor):void{
            let encontrado = false;
            for (let i = 0; (i<this.listadoProfesores.length && !encontrado); i++){
                if(pProfesor.getApellido() == this.listadoProfesores[i].getApellido()){
                    this.listadoProfesores.splice(i,1);
                    console.log("Profesor Despedido: " +pProfesor.getApellido());
                    encontrado = true;
                }
            }
            if(!encontrado){
                console.log("No se encontró Profesor");
            }
        }
        public matricularAlumno(pAlumno:Alumno):void{
            this.listadoAlumnos.push(pAlumno);
            console.log("Alumno Matriculado: " +pAlumno.getApellido());
        }
        public removerAlumno(pAlumno:Alumno):void{
            let encontrado=false;
            for (let i = 0; (i<this.listadoAlumnos.length && !encontrado); i++) {
                if(pAlumno.getApellido() == this.listadoAlumnos[i].getApellido()){
                    this.listadoAlumnos.splice(i,1);
                    console.log("Alumno Expulsado: " +pAlumno.getApellido());
                    encontrado=true;
                }
            }
                if (!encontrado){
                     console.log("No se encontró el alumno");
                }
            }
        }


let alumnoA = new Alumno ("Juan", "Perez",5,3,1);
let alumnoB = new Alumno ("Jorge", "Gonzalez",6,9,7);
let alumnoC = new Alumno ("Ana", "Nenen",9,8,10);
let alumnoD = new Alumno ("Gloria", "Fuentes",4,6,8);


let listadoA1 : Alumno[] = [alumnoA, alumnoB, alumnoC];

let docenteM = new Profesor ("María", "Alvarez", listadoA1);
let docenteG = new Profesor ("Pedro", "Díaz", listadoA1);
let docenteS = new Profesor ("Mateo", "Gomez", listadoA1);
let docenteI = new Profesor ("Abril", "Soria", listadoA1);

let  listadoDocentes : Profesor[] = [docenteM,docenteG,docenteS];

let escuelaPrimaria: Escuela = new Escuela("Escuela 1", listadoA1, listadoDocentes);
console.log("---------------------------")
escuelaPrimaria.despedirProfesor(docenteS);
console.log("---------------------------")
escuelaPrimaria.contrataProfesor(docenteI);
console.log("---------------------------")
escuelaPrimaria.removerAlumno(alumnoA);
console.log("---------------------------")
escuelaPrimaria.matricularAlumno(alumnoD);
console.log("---------------------------")