import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  id = 0;
  project: any = {};
  constructor(private route:ActivatedRoute, private http:HttpClient) {
    this.id = this.route.snapshot.params['user'];
  }

  ngOnInit(): void {
    let apiUrl = 'http://localhost:3000/projects/'+this.id; //khai báo apiUrl

    //gửi request lên json-server để lấy thông tin
    this.http.get(apiUrl).subscribe(res => {
      this.project = res; //gán dữ liệu json-server trả về vào 1 biến
    })
  }
}
