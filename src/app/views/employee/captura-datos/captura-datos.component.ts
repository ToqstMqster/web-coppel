import { Component, OnInit } from '@angular/core';
import { ReportModel } from 'src/app/models/ReportModel';
import { ReportService } from 'src/app/services/ReportService';
import { Router } from '@angular/router';
import { Denuncia } from 'src/app/classes/Denuncia';
import { FormGroup, FormBuilder,Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-captura-datos',
  templateUrl: './captura-datos.component.html',
  styleUrls: ['./captura-datos.component.css']
})
export class CapturaDatosComponent implements OnInit {

  protected report: Denuncia;
  protected formFecha: Date;
  protected form: FormGroup;
  protected option: string;

  constructor(
    private reportModel: ReportModel,
    private reportService: ReportService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { 
    this.reportModel = reportModel;
    this.reportService = reportService;
    this.report = {} as Denuncia;
    this.formFecha = {} as Date;
    this.option = '';

    this.form = this.formBuilder.group({
      comentarios: ['', Validators.required],
    })
  }

  clickOption(opt: string){
    this.option = opt;
  }

  async ngOnInit(): Promise<void> {
    //Traer datos de denuncia por folio
    const report: any = await this.reportService.getReportData(Number(localStorage.getItem('folio')))
    //Guardarlos en una denuncia
    this.reportModel.createFullReport(
      report.FOLIO, report.NUM_CENTRO, report.NOM_COMPLETO,
      report.CORREO, report.TELEFONO, report.DESCRIPCION,
      report.FECHA, report.ID_EMPRESA, report.NOM_EMPRESA,
      report.ID_PAIS, report.NOM_PAIS, report.ID_ESTADO,
      report.NOM_ESTADO)
    //Traer denuncia
    this.report = this.reportModel.getCurrentReport()

    //Formatear fecha
    this.formFecha = new Date(this.report.getFecha)
  }

  sendReport(path: string){
    if(!(this.form.value.comentarios))
      return
    if(this.option == '')
      return
    
    //Actualizar denuncia objeto
    this.reportModel.updtReportbyEmployee(this.form.value.comentarios, this.option)
    this.report = this.reportModel.getCurrentReport()

    //Enviarlo a la bd
    this.reportService.updateReport(
      this.report.getFolio,
      this.report.getComentarios,
      this.report.getEstatus)

    //Volver al menu
    this.toastr.success("Denuncia resuelta")
    localStorage.removeItem('folio')
    this.reportModel.clearReportList()
    this.router.navigate([path]);
  }

}
