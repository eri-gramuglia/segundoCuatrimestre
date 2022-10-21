export class Publicacion {
    protected titulo:string;
    protected autor:string;
    protected precio:number;

    public constructor(pTitulo:string,pAutor:string,pPrecio:number){
        this.titulo=pTitulo;
        this.autor=pAutor;
        this.precio=pPrecio;
    }
    getTitulo():string{
    return this.titulo;
    }
    getAutor():string{
        return this.autor;
    }
    getPrecio():number{
        return this.precio;
    }
}