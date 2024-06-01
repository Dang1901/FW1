import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  apiUrl = 'http://localhost:3000/projects';

  constructor(private http:HttpClient) {}

  // ham lay danh sach san pham 
  getlist(){
    return this.http.get(this.apiUrl);
  }

  delete(id: any){
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
