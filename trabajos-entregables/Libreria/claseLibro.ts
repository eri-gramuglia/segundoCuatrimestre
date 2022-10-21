import { Publicacion } from "./clasePublicacion";

export class Libro extends Publicacion {
    private cantidadPag:number;
    private resumen:string;
    private genero:string;
       
    public constructor(pTitulo:string,pPaginas:number,pAutor:string,pPrecio:number,pGenero:string,pResumen:string){
        super(pTitulo,pAutor,pPrecio);
        this.genero=pGenero;
        this.resumen=pResumen;
        this.cantidadPag=pPaginas;
    }
    getCantPaginas():number{
        return this.cantidadPag;
    }
    getResumen():string{
        return this.resumen;
    }
    getGenero():string{
        return this.genero;
    }
}