// import { ScanModule } from './scan';
// import { LoadingModule } from './loading';
// import { DialogModule } from './dialog';

import { ScanComponent } from './scan';

export const componentsList = [
  ScanComponent,
  // {
  //   selector: 'scan',
  //   module: () => import('./scan/scan.module').then((m) => m.ScanModule),
  // },
  // {
  //   selector: 'loading',
  //   module: () =>
  //     import('./loading/loading.module').then((m) => m.LoadingModule),
  // },
  // {
  //   selector: 'dialog',
  //   module: () => import('./dialog/dialog.module').then((m) => m.DialogModule),
  // },
];
