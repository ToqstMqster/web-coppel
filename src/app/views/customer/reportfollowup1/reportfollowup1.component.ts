import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators, FormControl } from '@angular/forms';
import { ReportService } from 'src/app/services/ReportService';
import { ReportModel } from 'src/app/models/ReportModel';

@Component({
  selector: 'app-reportfollowup1',
  templateUrl: './reportfollowup1.component.html',
  styleUrls: ['./reportfollowup1.component.css']
})
export class Reportfollowup1Component implements OnInit {

  protected rf1Form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private reportService: ReportService,
    private reportModel: ReportModel,
  ) { 
    this.reportService = reportService;
    this.reportModel = reportModel;

    this.rf1Form = this.formBuilder.group({
      folio: ['', Validators.required],
      psswrd: ['', Validators.required],
      
    })
  }

  ngOnInit(): void {
  }

  public async clickButton(path: string){

    if(!(this.rf1Form.value.folio))
      return
    if(!(this.rf1Form.value.psswrd))
      return
    
    //Traer contraseña de la base de datos 
    const data: any = await this.reportService.getPasswordByFolio(this.rf1Form.value.folio);
    const currentPsswrd = data[0].CONTRASEÑA

    //Comprobar si corresponden
    if(currentPsswrd === this.rf1Form.value.psswrd){
      this.reportModel.creteReportWithFolio(this.rf1Form.value.folio);
      this.router.navigate([path]);
    }
  }
}
