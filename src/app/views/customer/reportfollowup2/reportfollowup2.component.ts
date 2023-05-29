import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Denuncia } from 'src/app/classes/Denuncia';
import { ReportModel } from 'src/app/models/ReportModel';
import { ReportService } from 'src/app/services/ReportService';

@Component({
  selector: 'app-reportfollowup2',
  templateUrl: './reportfollowup2.component.html',
  styleUrls: ['./reportfollowup2.component.css']
})
export class Reportfollowup2Component implements OnInit {

  protected report: Denuncia

  constructor(
    private router: Router,
    private reportModel: ReportModel,
    private reportService: ReportService,
  ) { 
    this.reportModel = reportModel;
    this.reportService = reportService;
    this.report = {} as Denuncia;
  }
  
  async ngOnInit(): Promise<void> {
    this.report = this.reportModel.getCurrentReport();
    const data: any = await this.reportService.getCommStateReport(this.report.getFolio);
    console.log(data)
    //Si es null no muestres nada
    !data[0].COMENTARIOS ? this.report.setComentarios = 
      this.report.setComentarios = "" : 
      this.report.setComentarios = data[0].COMENTARIOS
    this.report.setEstatus = data[0].ESTATUS
  }

  clickButton(path: string){
    this.router.navigate([path]);
  }

}
