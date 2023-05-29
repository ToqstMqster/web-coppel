import { Estado } from "./Estado";

export class Pais {
    private id: number;
    private nombre: string;
    private estados?: Array<Estado>;

    constructor(
        id: number,
        nombre: string,
        estados?: Array<Estado>,
    ){
        this.id = id;
        this.nombre = nombre;
        this.estados = [];
    }
    //Getters n Setters
    public get getId(): number {
        return this.id;
    }
    
    public set setId(id: number) {
        this.id = id;
    }

    public get getNombre(): string {
        return this.nombre;
    }
    
    public set setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public get getEstados(): Array<Estado> {
        return this.estados!;
      }
    
      public set setEstado(estados: Array<Estado>) {
        this.estados = estados;
      }
}