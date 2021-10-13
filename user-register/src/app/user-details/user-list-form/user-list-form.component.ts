import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../../shared/user-details.service';

@Component({
  selector: 'app-user-list-form',
  templateUrl: './user-list-form.component.html',
  styles: [
  ]
})
export class UserListFormComponent implements OnInit {

  constructor(public service: UserDetailsService) { }

  ngOnInit(): void {
    this.service.refreshLists();
  }

}
