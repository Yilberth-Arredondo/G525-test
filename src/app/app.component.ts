import { Component} from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../sass/styles.scss']
})
  
export class AppComponent  {
  userform = this.fb.group({
    sex: ['', Validators.required],
    date_birthday: ['', Validators.required],
    name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
    country: ['', Validators.required],
    Department: ['', Validators.required],
    city: ['', Validators.required],
    comment: ['', Validators.required],
  })
  constructor(private fb: FormBuilder) { }
  onSubmit() {
  alert(JSON.stringify(this.userform.value));
  }
}
