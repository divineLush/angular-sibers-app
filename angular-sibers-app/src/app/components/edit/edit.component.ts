import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../home/http-service';
import { Contact } from '../home/contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  name: string;
  keys: any[];
  keyNames: any[];
  contact: Contact;
  data: Contact[];

  constructor(private activateRoute: ActivatedRoute,
    public http: HttpService) { 
      this.name = activateRoute.snapshot.params['name'];
    }

  ngOnInit() {
    this.keys = [];
    this.http.getData().subscribe(d => { 
      this.data = d;      
      this.data.forEach(i => {
        if (i.name == this.name) {
          this.contact = i;
          for (let key in this.contact) {
            if (typeof(this.contact[key]) == 'string'
              && key != 'avatar') {
              this.keys.push(this.contact[key])
            }
          }
          return;
        }
      })
      this.keyNames = Object.keys(this.contact).filter(key => (
        key != 'avatar' && typeof(this.contact[key]) == 'string'
      ));
    });
  }

}
