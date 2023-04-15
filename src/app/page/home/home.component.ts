import { Component, OnInit,ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private router:Router){}
/*
  public pages2=[{
    pageTitle:'Početna',
    link:'home',
    subPages:[]
  },
  {
  pageTitle: 'O nama',
  link: 'about',
  subPages:[
      {
        pageTitle:"Nasi projekti",
        link:"about"
      }
    ]
  }
]

  */


  ngOnInit(): void {
    console.log(localStorage.getItem("username")) //da li su uspesno pokupljeni podaci iz local Storage-a
   
  }
  /*
  subPageClick(item: any){
    
    this.router.navigate(["/"+item])
  }
  */
}
