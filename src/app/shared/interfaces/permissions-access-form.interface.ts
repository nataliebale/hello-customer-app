import {FormControl} from '@angular/forms';

export type PermissionsAccessFormControls = {
  companyName: FormControl<string | null>;
  tpEmail1DashboardDefault: FormControl<boolean | null>;
  tpEmail1DashboardCustomNPS: FormControl<boolean | null>;
  tpEmail2DashboardDefault: FormControl<boolean | null>;
  tpEmail1ReportsDefault: FormControl<boolean | null>;
  tpEmail2ReportsDefault: FormControl<boolean | null>;
};
