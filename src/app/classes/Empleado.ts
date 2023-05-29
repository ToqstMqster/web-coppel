import { Denuncia } from "./Denuncia";


export class Empleado {

    private correo?: string;
    private id?: number;
    private nombre?: string;
    private listaDenuncias?: Array<Denuncia>;

    constructor(
        correo?: string,
        id?: number,
        nombre?: string,
    ){
        this.correo = correo;
        this.id = id;
        this.nombre = nombre;
        this.listaDenuncias = [];
    }

    //Getters n Setters
    public get getId(): number {
        return this.id!;
    }
    
    public set setId(id: number) {
        this.id = id;
    }

    public get getCorreo(): string {
        return this.correo!;
    }
    
    public set setCorreo(correo: string) {
        this.correo = correo;
    }

    public get getNombre(): string {
        return this.nombre!;
    }
    
    public set setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public get getListaDenuncias(): Array<Denuncia> {
        return this.listaDenuncias!;
      }
    
      public set setListaDenuncias(listaDenuncias: Array<Denuncia>) {
        this.listaDenuncias = listaDenuncias;
      }
}