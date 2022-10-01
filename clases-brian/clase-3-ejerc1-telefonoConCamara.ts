import{Telefono} from "./clase-3-ejerc1-telefonoPadre";

class TelefonoConCamara extends Telefono{
    private flash:boolean;

    constructor(pEstadoTelefono:boolean, pEstadoBateria:number, pFlash:boolean){
        super(pEstadoTelefono,pEstadoBateria);
        this.flash=pFlash;
    }
    public sacarFoto():string{
        let foto:string= "captura";
    return foto;
    }
    public conFlash():void{
        this.flash = false;
    }
    public sinFlash():void{
        this.flash= true;
    }
}

let telefonoConcamara1 : TelefonoConCamara = new TelefonoConCamara(true, 35, true);

console.log(telefonoConcamara1.sacarFoto());

