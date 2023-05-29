import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators, FormControl } from '@angular/forms';
import { ReportModel } from 'src/app/models/ReportModel';
import { ReportService } from 'src/app/services/ReportService';
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

declare let window:any;

@Component({
  selector: 'app-report-record3',
  templateUrl: './report-record3.component.html',
  styleUrls: ['./report-record3.component.css']
})
export class ReportRecord3Component implements OnInit {

  protected rr3Form: FormGroup;
  protected folioList: Array<number>;
  protected newFolio: number;
  protected model!: NgbDateStruct;
  protected formModal:any;
 

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private reportModel: ReportModel,
    private reportService: ReportService,
    private calendar: NgbCalendar,
    private toastr: ToastrService
  ) { 
    this.reportModel = reportModel;
    this.reportService = reportService;
    this.folioList = [];
    this.newFolio = 0;

    this.rr3Form = this.formBuilder.group({
      detalle: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  async ngOnInit(): Promise<void> {
    //Traer ultimo folio
    const newFolio: any = await this.reportService.getLastFolio()
    //Nuevo folio
    this.newFolio = newFolio.LASTFOLIO + 1

    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );

  }
  clickButton(path: string){
    this.router.navigate([path]);
  }

  async sendReport(){
    //Comprobar vacios
    if(!(this.rr3Form.value.detalle))
      return
    if(!(this.model))
      return
    if(!(this.rr3Form.value.password))
      return
    if(!(this.rr3Form.value.confirmPassword))
      return
    //Comprobar contraseña
    if(this.rr3Form.value.password.length < 8){
      this.toastr.error("La contraseña requiere de mínimo 8 caracteres");
      return
    }
    //Si no son iguales
    if(this.rr3Form.value.password !== this.rr3Form.value.confirmPassword){
      this.toastr.error("Las contraseñas no coinciden");
      return
    }
    
    //date
    const date = new Date(this.model.year, this.model.month, this.model.day);

    //Agregar los ultimos cambios
    this.reportModel.saveFullReport(
      this.newFolio,
      this.rr3Form.value.detalle,
      date,
      this.rr3Form.value.password
    );

    //Enviar denuncia a bd
    const report = this.reportModel.getCurrentReport();
    this.reportService.postReport(report);

    //Volver a home
    this.formModal.show();
    this.router.navigate(['home']);
  }

}
