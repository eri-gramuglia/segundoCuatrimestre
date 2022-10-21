import { Alumno } from "./alumno";
import { Examen } from "./examen";

export class RendicionDeExamen {
    protected examen: Examen;
    protected respuestas: number[];

    constructor(pExamen: Examen, pRespuestas: number[]) {
        this.examen = pExamen;
        this.respuestas = pRespuestas;
    }

    public rendicionDeExamen(examen: Examen, respuestas: number[]): void {
        if (examen.getTema() === examen.getTema()) {
            for (let i: number = 0; i < respuestas.length; i++) {
                respuestas.push(respuestas[i]);
            }
        }
    }

    public getExamen(): Examen {
        return this.examen;
    }

/*     public estaAprobado(): boolean {
        if (Alumno.rendirExamen() === true) {
            console.log(`El alumno aprobó el examen`)
            return true;
        } else {
            console.log(`El alumno desaprobó el examen`)
            return false;
        }
    } */
}