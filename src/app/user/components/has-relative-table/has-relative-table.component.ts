import { Component, OnInit, Input } from '@angular/core';

import { Relative } from '../../shared/index';


@Component({
  selector: 'app-has-relative-table',
  templateUrl: './has-relative-table.component.html',
  styleUrls: ['../../shared/css/table.scss']
})
export class HasRelativeTableComponent {

  @Input() relatives: Relative[];

  displayedColumns: string[] = [
    'expandIcon', 
    'Relative ID', 
    'Patient ID', 
    'Is alive?', 
    'Frequency of visits'
  ];

  constructor() {}
  
}