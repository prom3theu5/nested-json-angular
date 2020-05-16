import { Component, OnInit, Input } from '@angular/core';

import { Phone } from '../../shared/index';


@Component({
  selector: 'app-has-phone-table',
  templateUrl: './has-phone-table.component.html',
  styleUrls: ['../../shared/css/table.scss']
})
export class HasPhoneTableComponent {

  @Input() phones: Phone[];

  displayedColumns: string[] = [
    'Phone ID',
    'ID of the relative',
    'Phone'
  ];

  constructor() {}
  
}