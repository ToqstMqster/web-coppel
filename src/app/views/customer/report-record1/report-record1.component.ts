import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportModel } from 'src/app/models/ReportModel';
import { ReportService } from 'src/app/services/ReportService';
import { Empresa } from 'src/app/classes/Empresa';
import { Pais } from 'src/app/classes/Pais';
import { Estado } from 'src/app/classes/Estado';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-report-record1',
  templateUrl: './report-record1.component.html',
  styleUrls: ['./report-record1.component.css']
})


export class ReportRecord1Component implements OnInit {

  protected rr1Form: FormGroup;
  protected companyList: Array<Empresa>;
  protected countryList: Array<Pais>;
  protected stateList: Array<Estado>;
  protected selectedCompany: Empresa;
  protected selectedCountry: Pais;
  protected selectedState: Estado;

  constructor(
    private router: Router,
    private reportModel: ReportModel,
    private reportService: ReportService,
    private formBuilder: FormBuilder,
  ) { 
    this.reportModel = reportModel;
    this.reportService = reportService;
    this.companyList = [];
    this.countryList = [];
    this.stateList = [];
    this.selectedCompany = {} as Empresa;
    this.selectedCountry = {} as Pais;
    this.selectedState = {} as Estado;

    this.rr1Form = this.formBuilder.group({
      numCentro: []
    })
  }

  ngOnInit(): void {
    //Traer Empresas
    this.reportService.getCompanies().subscribe(datos=>{
      datos.forEach((company: any)=> {
        const auxCompany = new Empresa(
          company.ID_EMPRESA,
          company.NOM_EMPRESA
        )
        this.companyList.push(auxCompany);
      });
    })

    //Traer Paises
    this.reportService.getCountries().subscribe(datos=>{
      datos.forEach((country: any)=> {
        const auxCountry = new Pais(
          country.ID_PAIS,
          country.NOM_PAIS,
        )
        this.countryList.push(auxCountry);
      });
    })

    //Traer Estados
    this.reportService.getStates().subscribe(datos=>{
      datos.forEach((state: any)=> {
        const auxState = new Estado(
          state.ID_ESTADO,
          state.NOM_ESTADO
        )
        //Asignar los estados con su país correspondiente
        this.countryList.forEach((cntry) =>{
          if(cntry.getId === state.ID_PAIS){
            cntry.getEstados.push(auxState)
          }
        })

      });
    })
  }

  OnSelectedCompany(cmpny: Empresa){
    this.selectedCompany = cmpny;
  }

  OnSelectedCountry(cntry: Pais){
    this.selectedCountry = cntry;
    this.selectedState = {} as Estado;
    this.stateList = this.selectedCountry.getEstados;
    //console.log(this.stateList)
  }

  OnSelectedState(State: Estado){
    this.selectedState = State;
  }

  clickButton(path: string){
    this.router.navigate([path]);
  }

  OnNextStepButton(path: string){
    if(Object.keys(this.selectedCompany).length == 0)
      return;
    if(Object.keys(this.selectedCountry).length == 0)
      return;
    if(Object.keys(this.selectedState).length == 0)
      return;
    if(!(this.rr1Form.value.numCentro))
      return;
    
    //Crear Denuncia
    this.reportModel.createNewReport(
      this.rr1Form.value.numCentro,
      this.selectedCompany,
      this.selectedCountry,
      this.selectedState)

    this.router.navigate([path]);
  }
}
