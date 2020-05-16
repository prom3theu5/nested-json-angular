import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { UserService, expandableTableRowAnimation, User } from '../shared/index';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../shared/css/table.scss' ],
  animations: [ expandableTableRowAnimation ]
})
export class UserComponent implements OnInit {

  users: User[];

  displayedColumns: string[] = [
    'expandIcon',
    'Identification number', 
    'Name', 
    'Gender',
    'Risk', 
    'Hair length', 
    'IQ', 
    'Admission date', 
    'Last breakdown', 
    'Yearly fee', 
    'Knows the Joker?',
    'deleteIcon'
  ];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService
      .getUsers()
      .subscribe(data => this.users = data);
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1);
    this.users = [...this.users];
  }

}