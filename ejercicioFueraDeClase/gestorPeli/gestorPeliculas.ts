class Pelicula {
    private titulo:string;
    private genero:string;
    private duracion:number;

    constructor (pTitulo:string, pGenero:string, pDuracion:number){
        this.titulo=pTitulo;
        this.genero=pGenero;
        this.duracion=pDuracion;
    }
    setTitulo (pTitulo:string):void{
        this.titulo=pTitulo;
    }
    getTitulo():string{
        return this.titulo
    }
    setGenero(pGenero:string):void{
        this.genero=pGenero;
    }
    getGenero():string{
        return this.genero;
    }
    setDuracion(pDuracion:number):void{
        this.duracion=pDuracion;
    }
    getDuracion():number{
        return this.duracion;
    }
}

class GestorPeliculas {
    private listadoPelicula: Pelicula[];

    constructor (pListado:Pelicula[]){
        this.listadoPelicula=pListado
    } 
    
    public agregarPelicula(pTitulo:Pelicula):void{
        this.listadoPelicula.push(pTitulo);
        console.log("Se agregó al listado la pelicula: "+pTitulo.getTitulo());
    }
    public eliminarPelicula(pTitulo:Pelicula):void{
        let encontrado=false;
        for (let i = 0; (i < this.listadoPelicula.length && !encontrado);i++) {
           if(pTitulo.getTitulo()=== this.listadoPelicula[i].getTitulo()){
                this.listadoPelicula.splice(i,1);

                console.log("Pelicula Borrada del Listado: " + pTitulo.getTitulo());
               encontrado=true;
            } 
            } if (!encontrado){
                console.log("No sé encontró la pelicula a eliminar: " +pTitulo.getTitulo());
                              }

    } 
    public modificarPelicula(pTitulo:string, pGenero:string, pDuracion:number){
        let encontrado=false;
        for (let i = 0; (i < this.listadoPelicula.length && !encontrado);i++) {
           if(pTitulo=== this.listadoPelicula[i].getTitulo()){
                this.listadoPelicula[i].setTitulo(pTitulo);
                this.listadoPelicula[i].setGenero(pGenero);
                this.listadoPelicula[i].setDuracion(pDuracion);
                console.log("Se modificó la pelicula: "+ pTitulo); 
            } 
        } if(encontrado){
                console.log("La pelicula " + pTitulo, " a modificar no se encontró");
            }
        }
        public consultarPelicula(pTitulo:Pelicula):void{
            let encontrado=false;
            for(let i=0; (i<this.listadoPelicula.length && !encontrado);i++){
                    if(pTitulo.getTitulo()=== this.listadoPelicula[i].getTitulo()){
                   
                    console.log("Libro Consultado: "+ pTitulo.getTitulo());
                    encontrado=true;
                }
            }
                if(!encontrado){
                    console.log("No se encontró el libro consultado: " + pTitulo.getTitulo());
                }
        }
}

let pelicula1 = new Pelicula ("La bella y la Bestia", "Infantil", 45);
let pelicula2 = new Pelicula ("La Sirenita", "Infantil", 104);
let pelicula3 = new Pelicula ("It", "Terror",120);

let listadoPelicula : Pelicula[] = [pelicula1, pelicula2];

let editarParamountain : GestorPeliculas = new GestorPeliculas(listadoPelicula);

editarParamountain.agregarPelicula(pelicula3);
editarParamountain.modificarPelicula("La sirenita","Infantil", 120);
console.log (listadoPelicula);
