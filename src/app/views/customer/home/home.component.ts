import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportModel } from 'src/app/models/ReportModel';
import { ReportService } from 'src/app/services/ReportService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private reportModel: ReportModel,
    private reportService: ReportService,
  ) { 
    this.reportModel = reportModel;
    //this.reportService = reportService;
  }

  ngOnInit(): void {
    // this.reportService.porfavor().subscribe(datos=>{
    //   console.log(datos);
    // })
  }

  clickButton(path: string){
    this.router.navigate([path]);
  }


}
