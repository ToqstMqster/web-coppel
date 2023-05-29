import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare let window:any;

@Component({
  selector: 'landmark',
  templateUrl: './landmark.component.html',
  styleUrls: ['./landmark.component.css']
})
export class LandmarkComponent implements OnInit {

  protected formModal:any;

  constructor(
    private router: Router,
    ) { 
    }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("sendModal")
    );
  }



  clickButton(path: string){
    this.router.navigate([path]);
  }

}
