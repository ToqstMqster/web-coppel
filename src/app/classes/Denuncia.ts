import { Empresa } from "./Empresa";
import { Estado } from "./Estado";
import { Pais } from "./Pais";

export class Denuncia {
    private numCentro?: number;
    private empresa?: Empresa;
    private pais?: Pais;
    private estado?: Estado;
    private folio?: number;
    private contrasena?: string;
    private nomCompleto?: string;
    private correo?: string;
    private telefono?: string;
    private descripcion?: string;
    private comentarios?: string;
    private estatus?: string;
    private fecha?: Date;

    constructor( 
        numCentro?: number,
        empresa?: Empresa,
        pais?: Pais,
        estado?: Estado,
        folio?: number,
        contrasena?: string,
        nomCompleto?: string,
        correo?: string,
        telefono?: string,
        descripcion?: string,
        comentarios?: string,
        estatus?: string,
        fecha?: Date,
        
    ){
        this.folio = folio
        this.contrasena = contrasena
        this.numCentro = numCentro
        this.nomCompleto = nomCompleto
        this.correo = correo
        this.telefono = telefono
        this.descripcion = descripcion
        this.comentarios = comentarios
        this.estatus = estatus
        this.fecha = fecha;
        this.empresa = empresa;
        this.pais = pais;
        this.estado = estado;
    }
    //Getters n Setters
    //Numbers
    //Folio
    public get getFolio(): number {
        return this.folio!;
    }
    
    public set setFolio(folio: number) {
        this.folio = folio;
    }
    //Número de centro
    public get getNumCentro(): number {
        return this.numCentro!;
    }
    
    public set setNumCentro(numCentro: number) {
        this.numCentro = numCentro;
    }
    
    //Strings
    //Contraseña
    public get getContrasena(): string {
      return this.contrasena!;
    }

    public set setContrasena(contrasena: string) {
      this.contrasena = contrasena;
    }

    //Nombre Completo
    public get getNomCompleto(): string {
        return this.nomCompleto!;
    }
  
    public set setNomCompleto(nomCompleto: string) {
        this.nomCompleto = nomCompleto;
    }

    //Correo
    public get getCorreo(): string {
        return this.correo!;
    }
  
    public set setCorreo(correo: string) {
        this.correo = correo;
    }

    //Teléfono
    public get getTelefono(): string {
        return this.telefono!;
    }
    
    public set setTelefono(telefono: string) {
        this.telefono = telefono;
    }

    //Descripción
    public get getDescripcion(): string {
        return this.descripcion!;
    }
  
    public set setDescripcion(descripcion: string) {
        this.descripcion = descripcion;
    }

    //Comentarios
    public get getComentarios(): string {
        return this.comentarios!;
    }
  
    public set setComentarios(comentarios: string) {
        this.comentarios = comentarios;
    }

    //Estatus
    public get getEstatus(): string {
        return this.estatus!;
    }
  
    public set setEstatus(estatus: string) {
        this.estatus = estatus;
    }

    //Objetos
    //Fecha
    public get getFecha(): Date {
      return this.fecha!;
    }

    public set setFecha(fecha: Date) {
      this.fecha = fecha;
    }

    //Empresa
    public get getEmpresa(): Empresa {
        return this.empresa!;
      }
  
    public set setEmpresa(empresa: Empresa) {
        this.empresa = empresa;
    }

    //País
    public get getPais(): Pais {
        return this.pais!;
      }
  
    public set setPais(pais: Pais) {
        this.pais = pais;
    }

    //Estado
    public get getEstado(): Estado {
        return this.estado!;
      }
  
    public set setEstado(estado: Estado) {
        this.estado = estado;
    }
}