import { Component, OnInit } from '@angular/core';
import { HttpService } from './http-service';
import { Contact } from './contact';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: Contact[];
  form: FormGroup;

  constructor(private http: HttpService, fb: FormBuilder) {
    this.form = fb.group({
      field: ['']
    })
  }

  ngOnInit() {
    this.http.getData().subscribe(d => {
      this.data = d;
    })
  }

  sort(): void {
    this.data = this.data.sort((a, b) => (a.name > b.name ? 1 : -1));
    // const sorted: Contact[] = this.data.sort((a, b) => (a.name > b.name ? 1 : -1));
    // this.http.postData(sorted).subscribe();
  }

  contains(value: RegExp, contact: Contact): boolean {
    const keys = Object.keys(contact).filter(key => (
      typeof(contact[key]) == 'string' && 
      key != 'avatar' && contact[key].search(value) != -1
    ));
    return keys.length != 0;  
  }

  onSubmit(value: any): void {
    if (value.field != '') {
      const reg = new RegExp(value.field, 'gi');
      this.data = this.data.filter(contact => (
        this.contains(reg, contact)
      ));
    }
  }

}
