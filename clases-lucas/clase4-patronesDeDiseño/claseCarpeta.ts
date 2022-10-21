import { Componente } from "./interfaceComponente";

export class Carpeta implements Componente {
    private componentes: Componente[];
    private name: string;

    public constructor(pName: string, pCompomnentes: Componente[]) {
        this.componentes = pCompomnentes;
        this.name = pName;
    }

    public getName(): string {
        return this.name;
    }

    public setName(pName: string): void {
        this.name = pName;
    }

    /* Método Recursivo */
    public buscar(keyword: string): void {
        console.log("Buscando recursivamente la palabra clave " + keyword + " en la carpeta " + this.name + ".");
        for (let i: number = 0; i < this.componentes.length; i++) {
            console.log("Longitud: ", this.componentes.length, "i: ", this.componentes[i]);
            this.componentes[i].buscar(keyword);
        }
    }

    public agregar(c: Componente): void {
        this.componentes.push(c);
    }
}
