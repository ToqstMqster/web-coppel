import { Injectable } from '@angular/core';
import { ReportService } from "../services/ReportService";
import { Denuncia } from '../classes/Denuncia';
import { Empresa } from '../classes/Empresa';
import { Pais } from '../classes/Pais';
import { Estado } from '../classes/Estado';
import { Empleado } from '../classes/Empleado';

@Injectable({
  providedIn: 'root',
})

export class ReportModel {

    protected reportService: ReportService;
    protected report: Denuncia;
    protected employeeUser: Empleado;

    constructor(
        reportService: ReportService,
    ) {
        this.reportService = reportService;
        this.report = {} as Denuncia;
        this.employeeUser = {} as Empleado;
    }

    public getCurrentReport(): Denuncia{
        return this.report;
    }

    public createNewReport(
        numCentro: number,
        company: Empresa,
        country: Pais,
        state: Estado): void{
            
        this.report = new Denuncia(numCentro,company, country, state)
    }

    public updateReport(
        nomCompleto: string,
        correo: string,
        tel: string,
    ): void{

        this.report.setNomCompleto = nomCompleto;
        this.report.setCorreo  = correo;
        this.report.setTelefono = tel;
    }

    public saveFullReport(
        folio: number,
        detalle: string,
        fecha: Date,
        contrasena: string,
        ): void{

        this.report.setFolio = folio;
        this.report.setDescripcion = detalle;
        this.report.setFecha = fecha;
        this.report.setContrasena = contrasena;
    }

    public creteReportWithFolio(folio: number):void{
        this.report = new Denuncia()
        this.report.setFolio = folio
    }

    //User part
    public createEmployeeUser(correo: string): void{
        this.employeeUser = new Empleado(correo)
    }

    public addingEmployeeInfo(id: number, nombre: string): void{
        this.employeeUser.setId = id;
        this.employeeUser.setNombre = nombre;
    }

    public addReportList(listaDenuncias: Array<Denuncia>): void {
        this.employeeUser.setListaDenuncias = listaDenuncias;
    }

    public getCurrentEmployeeUser(): Empleado{
        return this.employeeUser;
    }

    public pushReportIntoList(
        folio: number,
        nomEmpresa: string,
        idEmpresa: number
    ): void{
        const empresa = new Empresa(idEmpresa, nomEmpresa)
        const report = new Denuncia()

        report.setFolio = folio
        report.setEmpresa = empresa

        this.employeeUser.getListaDenuncias.push(report)
    }

    public createFullReport(
        folio:number,
        numCentro: number,
        nomCompleto: string,
        correo: string,
        telefono: string,
        descripcion: string,
        fecha: Date,
            idEmpresa: number,
            nomEmpresa: string,
            idPais: number,
            nomPais: string,
            idEstado: number,
            nomEstado: string
    ): void {
        //Crear la denuncia
        this.report = new Denuncia()
        //Crear los otros objetos
        const empresa = new Empresa(idEmpresa, nomEmpresa)
        const pais = new Pais(idPais, nomPais)
        const estado = new Estado(idEstado, nomEstado)

        this.report.setEmpresa = empresa
        this.report.setPais = pais
        this.report.setEstado = estado

        //Asignarlo los otros datos
        this.report.setFolio = folio
        this.report.setNumCentro = numCentro
        this.report.setNomCompleto = nomCompleto
        this.report.setCorreo = correo
        this.report.setTelefono = telefono
        this.report.setDescripcion = descripcion
        this.report.setFecha = fecha
    }

    public updtReportbyEmployee(
        comentarios: string,
        estatus: string
    ): void {
        this.report.setComentarios = comentarios
        this.report.setEstatus = estatus
    }

    public clearReportList(): void{
        this.employeeUser.setListaDenuncias = []
    }


}