import {FormControl} from '@angular/forms';

export type PersonalInfoFormControls = {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  emailAddress: FormControl<string | null>;
  confirmEmailAddress: FormControl<string | null>;
  language: FormControl<string | null>;
};
