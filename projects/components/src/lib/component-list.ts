// import { ScanModule } from './scan';
// import { LoadingModule } from './loading';
// import { DialogModule } from './dialog';

import { ScanComponent } from './scan';
import { LoadingComponent } from './loading';
import { DialogComponent } from './dialog';

export const componentsList = [
  ScanComponent,
  LoadingComponent,
  DialogComponent,

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
