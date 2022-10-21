import { Componente } from "./interfaceComponente";

export class Archivo implements Componente {
    private name: string;

    public constructor(pName: string) {
        this.name = pName;
    }

    public getName(): string {
        return this.name;
    }

    public setName(pName: string): void {
        this.name = pName;
    }

    public buscar(keyword: string): void {
        console.log("Buscando la palabra clave " + keyword + " en el archivo " + this.name + ".");
    }
}
