import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/classes/Empleado';
import { ReportModel } from 'src/app/models/ReportModel';
import { ReportService } from 'src/app/services/ReportService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lista',
  templateUrl: './menu-lista.component.html',
  styleUrls: ['./menu-lista.component.css']
})
export class MenuListaComponent implements OnInit {

  protected user: Empleado;

  constructor(
    private reportModel: ReportModel,
    private reportService: ReportService,
    private router: Router,
  ) { 
    this.reportModel = reportModel;
    this.reportService = reportService;
    this.user = {} as Empleado;
  }

  async ngOnInit(): Promise<void> {
    //Traer empleado creado
    this.user = this.reportModel.getCurrentEmployeeUser()
    console.log('carga', this.user.getListaDenuncias)

    //Traer los demas datos de la bd
    //Id, nombre
    const empData: any = await this.reportService.getEmployeeData(this.user.getCorreo);
    this.reportModel.addingEmployeeInfo(empData.ID_USER, empData.EMP_NOMBRE)
    

    //Lista de denuncias
    const repList: any = await this.reportService.getReportListByEmpID(this.user.getId);
    if(repList){
      repList.forEach((rep: any) => {
        this.reportModel.pushReportIntoList(rep.FOLIO, rep.NOM_EMPRESA, rep.ID_EMPRESA)
      }); 
    }
  }

  clickButton(path: string, folio: number){
    localStorage.setItem('folio', folio.toString())
    this.router.navigate([path]);
  }
}
