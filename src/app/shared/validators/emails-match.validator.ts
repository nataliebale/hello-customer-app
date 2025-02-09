import {AbstractControl, ValidationErrors,  ValidatorFn} from '@angular/forms';

export const emailsMatchValidator: ValidatorFn =
  (group: AbstractControl): ValidationErrors | null => {
    const email = group.get('emailAddress')?.value;
    const confirmEmail = group.get('confirmEmailAddress')?.value;

    return email && confirmEmail && email !== confirmEmail
      ? {emailMismatch: true}
      : null;
  };
