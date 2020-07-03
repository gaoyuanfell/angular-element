import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'bf-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.less'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScanComponent implements OnInit, OnChanges {
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    this.cdr.markForCheck();
  }

  static selector = 'bf-scan';

  ngOnInit(): void {}

  private _list;
  @Input() set list(val) {
    this._list = val;
  }
  get list() {
    return this._list;
  }

  time = interval(2000);
}
