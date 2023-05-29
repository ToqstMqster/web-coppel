export class Estado {
    private id: number;
    private nombre: string;

    constructor(
        id: number,
        nombre: string,
    ){
        this.id = id;
        this.nombre = nombre;
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
}