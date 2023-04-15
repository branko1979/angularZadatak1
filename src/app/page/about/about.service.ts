import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http:HttpClient) { }

  public getPosts(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts"); //fake pozivi
  }
}
