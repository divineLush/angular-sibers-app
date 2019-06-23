import { Component, OnInit } from '@angular/core';
import { HttpService } from './http-service';
import { Contact } from './contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: Contact[];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getData().subscribe(d => {
      this.data = d;
    })
  }

  sort(): void {
    this.data = this.data.sort((a, b) => (a.name > b.name ? 1 : -1));;
  }

}
