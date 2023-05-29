import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators, FormControl } from '@angular/forms';
import { ReportService } from 'src/app/services/ReportService';
import { ReportModel } from 'src/app/models/ReportModel';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  protected form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private reportService: ReportService,
    private reportModel: ReportModel,
  ) { 
    this.reportService = reportService;
    this.reportModel = reportModel;

    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      psswrd: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  public async clickButton(path: string){
    //Comprobar campos vacios
    if(!(this.form.value.email))
      return
    if(!(this.form.value.psswrd))
      return

    //Traer contraseña de la bd y compararla
    const data: any = await this.reportService.getPasswordByEmail(this.form.value.email);
    const currentPsswrd = data[0].CONTRASEÑA

    if(currentPsswrd === this.form.value.psswrd){
      //Crear empleado
      this.reportModel.createEmployeeUser(this.form.value.email)
      this.router.navigate([path]);
    }
  }

}
