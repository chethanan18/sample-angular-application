import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDetailsService } from '../../shared/user-details.service';
import { UserDetails } from '../../shared/user-details.model';

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styles: [
  ]
})
export class UserDetailsFormComponent implements OnInit {

  constructor(public service:UserDetailsService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
     this.service.postUserDetails().subscribe(
    res => {
      this.resetForm(form);
    },
    err => { console.log(err); }
  );
  }

  resetForm(form:NgForm) {
    form.form.reset();
    this.service.formData = new UserDetails();
  }

}
