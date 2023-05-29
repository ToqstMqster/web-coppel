import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportModel } from 'src/app/models/ReportModel';
import { FormGroup, FormBuilder,Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-report-record2',
  templateUrl: './report-record2.component.html',
  styleUrls: ['./report-record2.component.css']
})
export class ReportRecord2Component implements OnInit {

  protected rr2Form: FormGroup;
  protected isSelected: boolean;

  constructor(
    private reportModel: ReportModel,
    private router: Router,
    private formBuilder: FormBuilder,
    ) { 
      this.reportModel = reportModel;
      this.isSelected = true;
      this.rr2Form = this.formBuilder.group({
        nomCompleto: ['', Validators.required],
        correo: ['', Validators.required],
        tel: ['', Validators.required]
      })
    }

  ngOnInit(): void {

  }

  //Cambiar anonimato
  clickOption(selectedChoice: boolean){
    this.isSelected = selectedChoice;
  }

  clickButton(path: string){
    this.router.navigate([path]);
  }

  OnNextStepButton(path: string){
    if(!(this.isSelected)){ 
      if(!(this.rr2Form.value.nomCompleto))
      return;
      if(!(this.rr2Form.value.correo))
      return;
      if(!(this.rr2Form.value.tel))
      return;
    }
    
    //Actualizar datos denuncia
    this.reportModel.updateReport(
      this.rr2Form.value.nomCompleto,
      this.rr2Form.value.correo,
      this.rr2Form.value.tel
    )

    //Navegar siguiente página
    this.router.navigate([path]);
  }

}
