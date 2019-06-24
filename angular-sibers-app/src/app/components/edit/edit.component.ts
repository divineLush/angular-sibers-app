import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../home/http-service';
import { Contact } from '../home/contact';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

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
  form: FormGroup;

  constructor(private activateRoute: ActivatedRoute,
    public http: HttpService, fb: FormBuilder) { 
      this.name = activateRoute.snapshot.params['name'];
      this.form = fb.group({
        name: ['name'],
        username: ['username'],
        email: ['email'],
        phone: ['phone'],
        website: ['website']  
      })
    }

  ngOnInit() {
    this.http.getData().subscribe(d => { 
      this.data = d;      
      this.data.forEach(i => {
        if (i.name == this.name) {
          this.contact = i;
          this.getKeys();
          return;
        }
      })
      this.getKeyNames();
      this.form = new FormGroup({
        name: new FormControl(this.contact.name),
        username: new FormControl(this.contact.username),
        email: new FormControl(this.contact.email),
        phone: new FormControl(this.contact.phone),
        website: new FormControl(this.contact.website)
      })
    });
  }

  getExp(key: any): boolean {
    return typeof(this.contact[key]) == 'string' && key != 'avatar'
  }

  getKeys(): void {
    this.keys = [];
    for (let key in this.contact) {
      if (this.getExp(key)) {
        this.keys.push(this.contact[key])
      }
    }
  }

  getKeyNames(): void {
    this.keyNames = Object.keys(this.contact).filter(key => (
      this.getExp(key)
    ));
  }

  onSubmit(value: any): void {
    for (let key in value) {
      console.log(key);
      console.log(value[key]);
      this.contact[key] = value[key];
    }
    this.getKeys();
    this.getKeyNames();
  }

}
