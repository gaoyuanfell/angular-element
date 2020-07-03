import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bf-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.less'],
})
export class LoadingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  static selector = 'bf-loading';
}
