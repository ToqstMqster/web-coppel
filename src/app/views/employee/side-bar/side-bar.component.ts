import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  protected formModal:any;

  constructor(
    private router: Router,
    ) { 
    }

  ngOnInit(): void {
  }

  clickButton(path: string){
    this.router.navigate([path]);
  }

  clickLogin(path: string){
  }

}
