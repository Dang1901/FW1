import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  listProjects: any;
  // apiUrl = 'http://localhost:3000/projects'; //khai báo apiUrl

  constructor(private service:ProjectService) {}

  ngOnInit(): void {
    //cú pháp gửi http request
    //this.HttpClient.method(apiUrl).subscribe( response => {})
    // this.thaivm2.get(this.apiUrl).subscribe(response => {
    //   this.listProjects = response;
    // })

    // goi ham getlist trong ProjectService
    this.service.getlist().subscribe( response => {
      this.listProjects = response;
    });
  }

  onDelete(id: any): void {
    if(confirm('Bạn có chắc không?')) { //popup confirm khi xóa
      // this.thaivm2.delete(this.apiUrl + '/' + id).subscribe(res => {
      //   alert('Xóa thành công');
      //   this.ngOnInit(); //cập nhật lại danh sách project mà ko cần reload lại trang
      // })
      this.service.delete(id).subscribe(res => {
        alert('Xóa thành công');
        this.ngOnInit(); 
      })
    } 
  }
}
