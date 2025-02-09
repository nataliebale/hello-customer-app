import {Component} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {PersonalInfoFormControls} from '../../../shared/interfaces/personal-info-form.interface';
import {MatError, MatInputModule} from '@angular/material/input';
import {emailsMatchValidator} from '../../../shared/validators/emails-match.validator';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-personal-information',
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatError, MatSelectModule],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.scss'
})
export class PersonalInformationComponent {
  form: FormGroup<PersonalInfoFormControls> = this.createForm();

  private createForm(): FormGroup<PersonalInfoFormControls>{
    return new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        emailAddress: new FormControl('', [Validators.required, Validators.email]),
        confirmEmailAddress: new FormControl('', [Validators.required, Validators.email]),
        language: new FormControl(''),
      },
      {
        validators: [emailsMatchValidator]
      }
    );
  }

  clearForm(){
    this.form.reset();
  }
}
