import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Denuncia } from '../classes/Denuncia';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json'})
// };

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  
  servidor="http://localhost:3000";
  
  constructor(
    private servicio:HttpClient
  ) {
  }

  getCompanies():Observable<any>{
    return this.servicio.get(`${this.servidor}/companies`)
  }

  getCountries():Observable<any>{
    return this.servicio.get(`${this.servidor}/countries`)
  }

  getStates():Observable<any>{
    return this.servicio.get(`${this.servidor}/states`)
  }

  // getLastFolio():Observable<any>{
  //   return this.servicio.get(`${this.servidor}/folio`)
  // }

  getLastFolio(){
    return new Promise(async (resolve) => {
      const response = await fetch(`${this.servidor}/folio`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const res = await response.json()
      console.log('aver', res[0])
      resolve(res[0])
    });
  }

  getPasswordByFolio(folio: number){
    return new Promise(async (resolve) => {
      const response = await fetch(`${this.servidor}/password/${folio}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const res = await response.json()
      resolve(res)
    });
  }

  getPasswordByEmail(email: string){
    return new Promise(async (resolve) => {
      const response = await fetch(`${this.servidor}/passwordEmail/${email}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const res = await response.json()
      resolve(res)
    });
  }
  

  getCommStateReport(folio: number){
    return new Promise(async (resolve) => {
      const response = await fetch(`${this.servidor}/CommState/${folio}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const res = await response.json()
      resolve(res)
    });
  }

  //Traer nombre e id empleado con correo
  getEmployeeData(correo: string){
    return new Promise(async (resolve) => {
      const response = await fetch(`${this.servidor}/employee/${correo}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const res = await response.json()
      resolve(res[0])
    });
  }

  //Traer lista de denuncias asignada a un empleado
  getReportListByEmpID(id: number){
    return new Promise(async (resolve) => {
      const response = await fetch(`${this.servidor}/empReportList/${id}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const res = await response.json()
      resolve(res)
    });
  }

  //Traer todos los datos de la denuncia
  getReportData(folio: number){
    return new Promise(async (resolve) => {
      const response = await fetch(`${this.servidor}/reportData/${folio}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const res = await response.json()
      resolve(res[0])
    });
  }

  //Guardar denuncia
  postReport(report: Denuncia){
    return new Promise(async (resolve) => {
      const response = await fetch(`${this.servidor}/reports`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(report)
      });

      const res = await response.json();

      if (res.isValid) {
        resolve(res.data);
      } else {
        resolve(null);
      }
    });
  }

  //Actualizar denuncia
  updateReport(folio: number, comentarios: string, estatus: string){
    const updts = {comentarios, estatus}
    return new Promise(async (resolve) => {
      const response = await fetch(`${this.servidor}/updateReport/${folio}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updts)
      });

      const res = await response.json();

      if (res.isValid) {
        resolve(res.data);
      } else {
        resolve(null);
      }
    });
  }

}