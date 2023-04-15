import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'my-first-project'; 
   promenljiva: any;
   url = "";
  
  //constructor(private http_client:HttpClient){
    constructor(private router:Router){
      this.router.events.subscribe(event=>{
        if(event instanceof NavigationStart){
            this.url = event.url;
            console.log(this.url);
        }
      })
    }
      
  //}
  ngOnInit(): void {
    console.log("Ucitavanje strane")
    //this.ucitavanjePodataka();

    
  }
  /*
  ucitavanjePodataka(){
    this.http_client.get("https://jsonplaceholder.typicode.com/posts").subscribe(x =>{
      this.promenljiva = x;
      console.log(x);
    })
  } */

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
  },
  {
  pageTitle: 'Kontakt',
  link: 'contact',
  subPages:[]
  }
]

pageClick(item :any){
  this.router.navigate(["/"+item]);
}

subPageClick(item: any){ 
    
  this.router.navigate(["/"+item])
}

  
}
